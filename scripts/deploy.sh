#!/bin/bash
set -e

# Script de Deploy para Hostinger via SSH
# Faz deploy com estratégia de release e rollback automático

echo "🚀 Iniciando deploy..."

# Validar variáveis de ambiente necessárias
if [ -z "$HOSTINGER_SSH_HOST" ] || [ -z "$HOSTINGER_SSH_USER" ]; then
    echo "❌ Erro: Variáveis HOSTINGER_SSH_HOST e HOSTINGER_SSH_USER são obrigatórias"
    echo "Configure via:"
    echo "  export HOSTINGER_SSH_HOST='seu_host'"
    echo "  export HOSTINGER_SSH_USER='seu_usuario'"
    exit 1
fi

# Configurações padrão
HOSTINGER_SSH_PORT="${HOSTINGER_SSH_PORT:-22}"
SSH_KEY_PATH="${SSH_KEY_PATH:-~/.ssh/hostinger_deploy}"
BUILD_DIR="${BUILD_DIR:-./build}"
REMOTE_RELEASES_DIR="~/releases"
REMOTE_PUBLIC_DIR="~/public_html"

# Verificar se build existe
if [ ! -d "$BUILD_DIR" ]; then
    echo "❌ Diretório de build não encontrado: $BUILD_DIR"
    echo "Execute 'npm run build' primeiro"
    exit 1
fi

# Configurar SSH
if [ -f "$SSH_KEY_PATH" ]; then
    SSH_OPTS="-i $SSH_KEY_PATH -p $HOSTINGER_SSH_PORT -o StrictHostKeyChecking=yes -o UserKnownHostsFile=~/.ssh/known_hosts"
else
    echo "⚠️  Chave SSH não encontrada em $SSH_KEY_PATH, usando autenticação padrão"
    SSH_OPTS="-p $HOSTINGER_SSH_PORT"
fi

RSYNC_SSH="ssh $SSH_OPTS"
TIMESTAMP=$(date -u +"%Y%m%d%H%M%S")
REMOTE_RELEASE_DIR="${REMOTE_RELEASES_DIR}/${TIMESTAMP}"

echo "📦 Build encontrado em: $BUILD_DIR"
echo "🔐 Conectando em: $HOSTINGER_SSH_USER@$HOSTINGER_SSH_HOST:$HOSTINGER_SSH_PORT"
echo "📁 Release: $TIMESTAMP"

# Criar diretório de releases no servidor
echo "📂 Criando diretório de release no servidor..."
ssh $SSH_OPTS $HOSTINGER_SSH_USER@$HOSTINGER_SSH_HOST "mkdir -p $REMOTE_RELEASES_DIR" || {
    echo "❌ Falha ao criar diretório de releases"
    exit 1
}

# Fazer upload do build via rsync
echo "⬆️  Fazendo upload do build..."
rsync -avz --delete -e "$RSYNC_SSH" $BUILD_DIR/ $HOSTINGER_SSH_USER@$HOSTINGER_SSH_HOST:${REMOTE_RELEASE_DIR}/ || {
    echo "❌ Falha no upload via rsync"
    exit 1
}

# Ativar a nova release (com backup automático)
echo "🔄 Ativando nova release..."
ssh $SSH_OPTS $HOSTINGER_SSH_USER@$HOSTINGER_SSH_HOST "
    set -e
    # Backup da versão atual
    if [ -e $REMOTE_PUBLIC_DIR ]; then
        echo '💾 Fazendo backup da versão atual...'
        mv $REMOTE_PUBLIC_DIR ${REMOTE_PUBLIC_DIR}.bak.${TIMESTAMP} || true
    fi
    
    # Ativar nova release
    echo '✨ Movendo nova release para public_html...'
    mv ${REMOTE_RELEASE_DIR} $REMOTE_PUBLIC_DIR
    
    # Limpar releases antigas (manter últimas 5)
    echo '🧹 Limpando releases antigas...'
    cd $REMOTE_RELEASES_DIR
    ls -1dt */ 2>/dev/null | tail -n +6 | xargs -r rm -rf
    
    echo '✅ Deploy concluído com sucesso!'
" || {
    echo "❌ Falha ao ativar release"
    exit 1
}

echo ""
echo "✅ Deploy realizado com sucesso!"
echo "🌐 Site atualizado em: https://seu-dominio.com"
echo "📝 Release: $TIMESTAMP"
echo ""

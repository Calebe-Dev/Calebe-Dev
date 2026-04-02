#!/bin/bash
set -e

# Script de Rollback para Hostinger
# Restaura o último backup disponível

echo "⏪ Iniciando rollback..."

# Validar variáveis de ambiente necessárias
if [ -z "$HOSTINGER_SSH_HOST" ] || [ -z "$HOSTINGER_SSH_USER" ]; then
    echo "❌ Erro: Variáveis HOSTINGER_SSH_HOST e HOSTINGER_SSH_USER são obrigatórias"
    exit 1
fi

HOSTINGER_SSH_PORT="${HOSTINGER_SSH_PORT:-22}"
SSH_KEY_PATH="${SSH_KEY_PATH:-~/.ssh/hostinger_deploy}"
REMOTE_PUBLIC_DIR="~/public_html"

# Configurar SSH
if [ -f "$SSH_KEY_PATH" ]; then
    SSH_OPTS="-i $SSH_KEY_PATH -p $HOSTINGER_SSH_PORT -o StrictHostKeyChecking=yes"
else
    SSH_OPTS="-p $HOSTINGER_SSH_PORT"
fi

echo "🔍 Procurando último backup..."

# Fazer rollback
ssh $SSH_OPTS $HOSTINGER_SSH_USER@$HOSTINGER_SSH_HOST "
    set -e
    
    # Encontrar último backup
    LAST_BACKUP=\$(ls -1dt ${REMOTE_PUBLIC_DIR}.bak.* 2>/dev/null | head -n 1)
    
    if [ -z \"\$LAST_BACKUP\" ]; then
        echo '❌ Nenhum backup encontrado'
        exit 1
    fi
    
    echo \"💾 Último backup encontrado: \$LAST_BACKUP\"
    
    # Remover versão atual com problema
    if [ -e $REMOTE_PUBLIC_DIR ]; then
        echo '🗑️  Removendo versão atual...'
        rm -rf ${REMOTE_PUBLIC_DIR}.broken.\$(date +%Y%m%d%H%M%S)
        mv $REMOTE_PUBLIC_DIR ${REMOTE_PUBLIC_DIR}.broken.\$(date +%Y%m%d%H%M%S)
    fi
    
    # Restaurar backup
    echo '🔄 Restaurando backup...'
    mv \$LAST_BACKUP $REMOTE_PUBLIC_DIR
    
    echo '✅ Rollback concluído com sucesso!'
" || {
    echo "❌ Falha no rollback"
    exit 1
}

echo ""
echo "✅ Rollback realizado com sucesso!"
echo "🌐 Site restaurado para versão anterior"
echo ""

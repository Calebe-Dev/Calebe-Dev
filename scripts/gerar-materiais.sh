#!/bin/bash
set -e

# Gera os materiais estáticos a partir dos fontes em materiais/ usando o Chrome headless:
#   static/curriculo-calebe-araujo.pdf            (currículo, texto selecionável para ATS)
#   static/images/compartilhamento-calebe-araujo.jpg (imagem de compartilhamento 1200×630)
# Uso: npm run materiais

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
TMP="$(mktemp -d)"

if [ ! -x "$CHROME" ]; then
    echo "❌ Chrome não encontrado em: $CHROME (defina a variável CHROME)"
    exit 1
fi

echo "📄 Gerando currículo em PDF..."
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$ROOT/static/curriculo-calebe-araujo.pdf" \
    "file://$ROOT/materiais/curriculo.html" 2>/dev/null

echo "🖼️  Gerando imagem de compartilhamento..."
"$CHROME" --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 \
    --screenshot="$TMP/compartilhamento.png" \
    "file://$ROOT/materiais/compartilhamento.html" 2>/dev/null
sips -s format jpeg -s formatOptions 85 "$TMP/compartilhamento.png" \
    --out "$ROOT/static/images/compartilhamento-calebe-araujo.jpg" >/dev/null

rm -rf "$TMP"
echo "✅ Materiais gerados em static/"

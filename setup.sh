#!/bin/bash

set -e

echo "🚭 Cigarettes-Diary Setup"
echo "========================"
echo ""

check_command() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "❌ $1 is not installed."
    return 1
  fi
  echo "✅ $1 found"
}

MISSING=0

for cmd in node npm php composer; do
  if ! check_command "$cmd"; then
    MISSING=1
  fi
done

if [ "$MISSING" -eq 1 ]; then
  echo ""
  echo "Please install the missing tools first:"
  echo "- Node.js: https://nodejs.org/"
  echo "- PHP: https://www.php.net/"
  echo "- Composer: https://getcomposer.org/"
  exit 1
fi

echo ""
echo "Installing frontend dependencies..."
npm install

echo ""
if [ -d "php-api" ]; then
  echo "Installing PHP dependencies..."
  cd php-api
  composer install
  cd ..
else
  echo "⚠ php-api folder not found. Skipping PHP install."
fi

echo ""
if [ -f ".env.example" ] && [ ! -f ".env" ]; then
  cp .env.example .env
  echo "✅ .env created from .env.example"
fi

echo ""
echo "Setup complete!"
echo ""
echo "Next steps:"
echo "1. Start the frontend: npm run dev"
echo "2. Start the PHP backend in another terminal:"
echo "   cd php-api"
echo "   php -S localhost:8000"
echo "3. Open: http://localhost:5173"

# Cigarettes-Diary Setup Script for Windows PowerShell

$ErrorActionPreference = "Stop"

Write-Host "🚭 Cigarettes-Diary Setup" -ForegroundColor Cyan
Write-Host "========================" -ForegroundColor Cyan
Write-Host ""

function Test-Command {
    param($Command)
    $exists = $null -ne (Get-Command $Command -ErrorAction SilentlyContinue)
    if ($exists) {
        Write-Host "✅ $Command found" -ForegroundColor Green
        return $true
    }
    Write-Host "❌ $Command is not installed." -ForegroundColor Red
    return $false
}

$missing = $false

foreach ($command in @("node", "npm", "php", "composer")) {
    if (-not (Test-Command $command)) {
        $missing = $true
    }
}

if ($missing) {
    Write-Host ""
    Write-Host "Please install the missing tools first:" -ForegroundColor Yellow
    Write-Host "- Node.js: https://nodejs.org/"
    Write-Host "- PHP: https://www.php.net/"
    Write-Host "- Composer: https://getcomposer.org/"
    exit 1
}

Write-Host ""
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
npm install

Write-Host ""
if (Test-Path "php-api") {
    Write-Host "Installing PHP dependencies..." -ForegroundColor Yellow
    Push-Location php-api
    composer install
    Pop-Location
} else {
    Write-Host "⚠ php-api folder not found. Skipping PHP install." -ForegroundColor Yellow
}

Write-Host ""
if ((Test-Path ".env.example") -and -not (Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "✅ .env created from .env.example" -ForegroundColor Green
}

Write-Host ""
Write-Host "Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Start the frontend: npm run dev"
Write-Host "2. Start the PHP backend in another terminal:"
Write-Host "   cd php-api"
Write-Host "   php -S localhost:8000"
Write-Host "3. Open: http://localhost:5173"

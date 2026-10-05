# Cigarettes-Diary Setup Script for Windows PowerShell
# Automated installation for Windows

# Enable error handling
$ErrorActionPreference = "Stop"

Write-Host "🚭 Cigarettes-Diary Setup Script (Windows)" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Helper function to check if command exists
function Test-Command {
    param($Command)
    $exists = $null -ne (Get-Command $Command -ErrorAction SilentlyContinue)
    if ($exists) {
        Write-Host "✓ $Command found" -ForegroundColor Green
        return $true
    } else {
        Write-Host "❌ $Command is not installed" -ForegroundColor Red
        return $false
    }
}

# Step 1: Check Prerequisites
Write-Host "Step 1: Checking Prerequisites" -ForegroundColor Yellow
Write-Host "--------------------------------" -ForegroundColor Yellow

$missing = $false

if (-not (Test-Command "node")) { $missing = $true }
if (-not (Test-Command "npm")) { $missing = $true }
if (-not (Test-Command "php")) { $missing = $true }
if (-not (Test-Command "composer")) { $missing = $true }

if ($missing) {
    Write-Host ""
    Write-Host "Some prerequisites are missing. Please install them:" -ForegroundColor Red
    Write-Host "  Chocolatey: choco install nodejs php composer" -ForegroundColor Yellow
    Write-Host "  Or visit:" -ForegroundColor Yellow
    Write-Host "    - Node.js: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "    - PHP: https://www.php.net/manual/en/install.windows.php" -ForegroundColor Yellow
    Write-Host "    - Composer: https://getcomposer.org/download/" -ForegroundColor Yellow
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "✓ All prerequisites installed" -ForegroundColor Green
Write-Host ""

# Step 2: Install Frontend Dependencies
Write-Host "Step 2: Installing Frontend Dependencies" -ForegroundColor Yellow
Write-Host "----------------------------------------" -ForegroundColor Yellow

if (Test-Path "package.json") {
    npm install
    Write-Host "✓ Frontend dependencies installed" -ForegroundColor Green
} else {
    Write-Host "❌ package.json not found. Make sure you're in the project root." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 3: Install PHP Dependencies
Write-Host "Step 3: Installing PHP Dependencies" -ForegroundColor Yellow
Write-Host "-------------------------------------" -ForegroundColor Yellow

if (Test-Path "php-api") {
    Push-Location php-api
    
    if (Test-Path "composer.json") {
        composer install
        Write-Host "✓ PHP dependencies installed" -ForegroundColor Green
    } else {
        Write-Host "⚠ composer.json not found in php-api/ - skipping" -ForegroundColor Yellow
    }
    
    Pop-Location
} else {
    Write-Host "⚠ php-api/ directory not found - skipping" -ForegroundColor Yellow
}

Write-Host ""

# Step 4: Setup Environment File
Write-Host "Step 4: Setting Up Environment" -ForegroundColor Yellow
Write-Host "-------------------------------" -ForegroundColor Yellow

if ((Test-Path ".env.example") -and -not (Test-Path ".env")) {
    Copy-Item ".env.example" ".env"
    Write-Host "✓ Created .env from .env.example" -ForegroundColor Green
    Write-Host "  Edit .env to customize settings if needed" -ForegroundColor Yellow
} elseif (Test-Path ".env") {
    Write-Host "⚠ .env already exists - skipping" -ForegroundColor Yellow
} else {
    Write-Host "⚠ .env.example not found - skipping" -ForegroundColor Yellow
}

Write-Host ""

# Step 5: Verify Installation
Write-Host "Step 5: Verifying Installation" -ForegroundColor Yellow
Write-Host "-------------------------------" -ForegroundColor Yellow

Write-Host "Node.js version: " -NoNewLine
node --version

Write-Host "npm version: " -NoNewLine
npm --version

Write-Host "PHP version: " -NoNewLine
php --version | Select-Object -First 1

Write-Host "Composer version: " -NoNewLine
composer --version

Write-Host ""

# Step 6: Ready to Go
Write-Host "✓ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Start Frontend Development Server:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Green
Write-Host ""
Write-Host "2. (Optional) Start PHP Backend (in another terminal):" -ForegroundColor White
Write-Host "   cd php-api" -ForegroundColor Green
Write-Host "   php -S localhost:8000" -ForegroundColor Green
Write-Host ""
Write-Host "3. Open in browser:" -ForegroundColor White
Write-Host "   http://localhost:5173" -ForegroundColor Green
Write-Host ""
Write-Host "For more information, see README.md" -ForegroundColor White
Write-Host ""

# Quick Installation Guide 🚀

This guide helps a user install and run the project quickly after cloning the repository.

## Prerequisites

Make sure these are installed on your machine:

- Node.js 16 or newer
- npm 7 or newer
- PHP 7.4 or newer
- Composer

Check that they are available:

```bash
node --version
npm --version
php --version
composer --version
```

If any command fails, install the missing tool before continuing.

### Download links

- Node.js: https://nodejs.org/
- PHP: https://www.php.net/
- Composer: https://getcomposer.org/

---

## Quick Start (Recommended)

### macOS / Linux

```bash
git clone https://github.com/Ben3425/Cigarettes-Diary.git
cd Cigarettes-Diary
chmod +x setup.sh
./setup.sh
```

### Windows PowerShell

```powershell
git clone https://github.com/Ben3425/Cigarettes-Diary.git
cd Cigarettes-Diary
.\setup.ps1
```

The setup script will:
- install frontend dependencies
- install PHP dependencies
- create `.env` from `.env.example` if needed
- verify that the environment is ready

---

## Manual Setup

### 1. Clone the repository

```bash
git clone https://github.com/Ben3425/Cigarettes-Diary.git
cd Cigarettes-Diary
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install PHP dependencies

```bash
cd php-api
composer install
cd ..
```

### 4. Create environment file

```bash
cp .env.example .env
```

The default file is already set for local development:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Cigarettes-Diary
VITE_ENVIRONMENT=development
```

---

## Run the app

### Start the frontend

```bash
npm run dev
```

Frontend URL:

```text
http://localhost:5173
```

### Start the PHP backend in another terminal

```bash
cd php-api
php -S localhost:8000
```

---

## Production build

```bash
npm run build
```

The compiled app is generated into the `dist/` folder.

---

## Troubleshooting

### `node` or `npm` not found

Install Node.js from https://nodejs.org/

### `composer` not found

Install Composer from https://getcomposer.org/

### Port already in use

Use a different port:

```bash
npm run dev -- --port 3000
```

### `npm install` fails

Clear the cache and try again:

```bash
npm cache clean --force
npm install
```

### `composer install` fails

Try:

```bash
composer update
```

---

## Summary

The easiest installation flow after cloning is:

```bash
npm install
cd php-api && composer install && cd ..
npm run dev
```

Then run the PHP server in another terminal:

```bash
cd php-api
php -S localhost:8000
```

Enjoy using the app! 🎯

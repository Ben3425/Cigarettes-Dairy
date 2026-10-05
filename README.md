# 🚭 Cigarettes-Diary

A professional web-based diary application for tracking and monitoring daily cigarette consumption. The project is designed to help users understand smoking habits through a clean dashboard, simple workflow, and clear historical data.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-v16%2B-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![PHP](https://img.shields.io/badge/PHP-v7.4%2B-777BB4?logo=php&logoColor=white)](https://www.php.net/)
[![Composer](https://img.shields.io/badge/Composer-Required-885630?logo=composer&logoColor=white)](https://getcomposer.org/)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Build Validation](#build-validation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

---

## Project Overview

Cigarettes-Diary is a full-stack application that combines a modern React + TypeScript frontend with a secure PHP backend using JWT authentication. The goal is to help users:

- Track daily cigarette use
- Review historical consumption patterns
- Monitor progress over time
- Maintain a simple and focused habit-tracking workflow

This project is intended for personal use, habit analysis, and easy extension with new features.

---

## Features

- Daily cigarette tracking
- Overview dashboard and trend analysis
- Clean and responsive UI
- Vite-powered frontend with fast development workflow
- JWT authentication support through PHP
- Easy setup for local development
- Production build support with Vite

---

## Technology Stack

### Frontend
- React
- TypeScript
- Vite
- ESLint

### Backend
- PHP
- Composer
- firebase/php-jwt

### Tools
- npm
- Git

---

## Prerequisites

Before installing the project, make sure the following tools are installed on your machine:

- Node.js 16 or newer
- npm 7 or newer
- PHP 7.4 or newer
- Composer

To verify installation:

```bash
node --version
npm --version
php --version
composer --version
```

If one of these commands fails, install the missing tool before continuing.

Useful links:
- Node.js: https://nodejs.org/
- PHP: https://www.php.net/
- Composer: https://getcomposer.org/

---

## Installation

### 1) Clone the repository

```bash
git clone https://github.com/Ben3425/Cigarettes-Diary.git
cd Cigarettes-Diary
```

### 2) Install frontend dependencies

From the project root:

```bash
npm install
```

This installs the frontend dependencies defined in `package.json`.

### 3) Install PHP dependencies

If the project includes a PHP API folder such as `php-api/`, install Composer dependencies there:

```bash
cd php-api
composer install
cd ..
```

This installs dependencies such as `firebase/php-jwt` for API authentication.

### 4) Environment configuration (optional)

If you use environment variables, create a `.env` file in the project root (and optionally in the PHP folder if needed):

```bash
cp .env.example .env
```

Example:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Cigarettes-Diary
```

If `.env.example` does not exist yet, create a `.env` manually and add only the required values for your setup.

---

## Development

To run the application in development mode:

```bash
npm run dev
```

This starts the Vite development server. By default the app should be available at:

```text
http://localhost:5173
```

If the port is already in use, Vite may choose another port automatically.

If your PHP API is also running locally, start it in a separate terminal:

```bash
cd php-api
php -S localhost:8000
```

---

## Production Build

To create a production build for deployment, run:

```bash
npx vite build
```

This command compiles the frontend and generates the production bundle in the `dist/` directory.

You can also run:

```bash
npm run build
```

Both commands are intended to produce the same Vite production build.

### Production output

After a successful build, the generated files will be in the `dist/` folder, with structure similar to:

```text
dist/
├── index.html
├── assets/
│   ├── index-*.js
│   ├── index-*.css
│   └── ...
└── ...
```

---

## Build Validation

To validate that the project installs and builds correctly, follow this sequence:

### 1) Install dependencies

```bash
npm install
```

### 2) Confirm the app boots in development mode

```bash
npm run dev
```

### 3) Build for production

```bash
npx vite build
```

### 4) Check the build output

```bash
ls -la dist
```

A successful build should create the `dist/` folder and include `index.html` and compiled assets.

### 5) Optional preview

```bash
npm run preview
```

This allows you to preview the production bundle locally before deployment.

---

## Project Structure

A typical project structure looks like this:

```text
Cigarettes-Diary/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
├── php-api/
│   ├── src/
│   ├── vendor/
│   ├── composer.json
│   └── ...
├── dist/
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── LICENSE
└── .env.example
```

The exact structure may vary depending on the final project state, but the Vite frontend and PHP backend remain the core architecture.

---

## Available Scripts

From the project root:

```bash
npm run dev
npm run build
npx vite build
npm run preview
npm run lint
```

Description:
- `npm run dev` — start local development server
- `npm run build` — build the app for production
- `npx vite build` — build using Vite directly
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint checks

---

## Troubleshooting

### Node/npm not found

```bash
node --version
npm --version
```

Install Node.js from https://nodejs.org/ if needed.

### `npm install` fails

Try cleaning the cache:

```bash
npm cache clean --force
npm install
```

### `npx vite build` fails

Check that:
- you are in the project root
- `package.json` exists
- dependencies were installed successfully
- Node.js is installed and up-to-date

Run:

```bash
npm install
npx vite build
```

### PHP dependency issues

If Composer dependencies fail:

```bash
cd php-api
composer install
composer update
```

### Port already in use

If port `5173` is occupied, Vite will usually select another available port. You can also specify one manually:

```bash
npm run dev -- --port 3000
```

---

## Contributing

Contributions are welcome. To contribute:

```bash
git checkout -b feature/my-improvement
git commit -m "Add my improvement"
git push origin feature/my-improvement
```

Then open a pull request on GitHub.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

## Support

If you run into issues:

1. Check this README
2. Verify your local environment versions
3. Run the installation and build commands again
4. Open an issue in the GitHub repository with details and error output

Repository:
- https://github.com/Ben3425/Cigarettes-Diary

---

## Final Note

This project follows a standard Vite + React + TypeScript setup for the frontend and a PHP + JWT backend setup for secure API authentication. To validate the frontend build, the key command is:

```bash
npx vite build
```

If this command completes successfully and generates `dist/`, the production build is working correctly.

---

Happy tracking and healthier habits! 🎯

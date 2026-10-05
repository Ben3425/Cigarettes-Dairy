# 🚭 Cigarettes-Diary

A web-based diary application to track and monitor your daily cigarette consumption. Get clear insights into your smoking habits with an intuitive dashboard and simple habit tracking workflow.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Manual Installation](#manual-installation)
- [Running the App](#running-the-app)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 📊 Track daily cigarette consumption
- 📈 View consumption overview and statistics
- 🎨 Clean and intuitive user interface
- ⚡ Fast development experience with Vite + HMR
- 🔐 JWT-based authentication through the PHP backend
- 📱 Responsive design for desktop and mobile use

---

## 🛠️ Tech Stack

### Frontend
- React
- TypeScript
- Vite
- ESLint

### Backend
- PHP
- Composer
- firebase/php-jwt

---

## 📦 Prerequisites

Before installing, make sure the following tools are installed:

- Node.js 16 or newer
- npm 7 or newer
- PHP 7.4 or newer
- Composer

Check them with:

```bash
node --version
npm --version
php --version
composer --version
```

If any command fails, install the missing tool before continuing.

Useful links:
- https://nodejs.org/
- https://www.php.net/
- https://getcomposer.org/

---

## 🚀 Quick Start

After cloning the repository, the easiest setup is to use the included setup scripts.

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

The setup scripts will:
- install frontend dependencies with npm
- install backend dependencies with Composer
- create a `.env` file from `.env.example` if needed
- verify the environment is ready to run locally

For more details, see [INSTALL.md](INSTALL.md).

---

## 🔧 Manual Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Ben3425/Cigarettes-Diary.git
cd Cigarettes-Diary
```

### Step 2: Install Frontend Dependencies

```bash
npm install
```

### Step 3: Install PHP Dependencies

```bash
cd php-api
composer install
cd ..
```

### Step 4: Create Environment File

```bash
cp .env.example .env
```

Example configuration:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=Cigarettes-Diary
VITE_ENVIRONMENT=development
```

---

## 💻 Running the App

Start the frontend in one terminal:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:5173
```

Start the PHP backend in a second terminal:

```bash
cd php-api
php -S localhost:8000
```

The frontend expects the backend to be available at `http://localhost:8000`.

---

## 🏗️ Building for Production

Create a production build with:

```bash
npm run build
```

You can also run:

```bash
npx vite build
```

The generated files will be placed in the `dist/` directory for deployment.

---

## 📁 Project Structure

```text
Cigarettes-Diary/
├── src/                    # React + TypeScript frontend source
├── public/                 # Static frontend assets
├── php-api/                # PHP backend code
│   ├── src/
│   ├── vendor/            # Composer dependencies
│   └── composer.json
├── dist/                  # Production build output
├── .env.example           # Example environment variables
├── .gitignore
├── INSTALL.md             # Easy setup and troubleshooting guide
├── README.md              # Project documentation
├── setup.sh               # One-command setup for macOS/Linux
├── setup.ps1              # One-command setup for Windows
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── LICENSE
└── ...
```

---

## 🔍 Troubleshooting

### `node` or `npm` not found

Install Node.js from https://nodejs.org/

### `composer` not found

Install Composer from https://getcomposer.org/

### `npm install` fails

Try:

```bash
npm cache clean --force
npm install
```

### `composer install` fails

Try:

```bash
composer update
```

### Port already in use

If port 5173 is already taken, start the app on another port:

```bash
npm run dev -- --port 3000
```

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-improvement`
3. Commit your changes: `git commit -m "Add my improvement"`
4. Push to your branch: `git push origin feature/my-improvement`
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 🎉 Acknowledgments

- Vite
- React
- TypeScript
- firebase/php-jwt

---

Happy tracking! 🎯

# 🚭 Cigarettes-Dairy

A web-based diary application to track and monitor your daily cigarette consumption. Get clear insights into your smoking habits with an intuitive dashboard interface.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 📊 Track daily cigarette consumption
- 📈 View consumption overview and statistics
- 🎨 Clean and intuitive user interface
- ⚡ Fast development experience with Hot Module Replacement (HMR)
- 🔐 Secure JWT authentication for API
- 📱 Responsive design with React + TypeScript

---

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code quality

### Backend
- **PHP** - Server-side logic
- **Composer** - PHP dependency manager
- **firebase/php-jwt** - JWT authentication

---

## 📦 Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **PHP** (v7.4 or higher) - [Download](https://www.php.net/)
- **Composer** - [Download](https://getcomposer.org/)

---

## 🚀 Installation

### Step 1: Clone the Repository

```bash
git clone https://github.com/Ben3425/Cigarettes-Dairy.git
cd Cigarettes-Dairy
```

### Step 2: Install Frontend Dependencies

Install all Node.js dependencies:

```bash
npm install
```

### Step 3: Install PHP Dependencies

Install Composer dependencies for the PHP API:

```bash
composer install
```

This will install:
- Composer's autoloader
- [firebase/php-jwt](https://github.com/firebase/php-jwt) - JWT library for secure authentication

### Step 4: Configure Environment (Optional)

If your project uses environment variables, create a `.env` file in the root directory and add your configuration.

---

## 💻 Development

Start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

---

## 🏗️ Building for Production

Build the application for production deployment:

```bash
npx vite build
```

This command will:
- Compile React and TypeScript code
- Optimize and minify assets
- Generate production-ready files in the `dist/` directory

### Production Output

After building, your optimized files will be located in:

```
dist/
├── index.html
├── assets/
│   ├── index.js
│   ├── index.css
│   └── ...
└── ...
```

Deploy the contents of the `dist/` folder to your hosting provider.

---

## 📁 Project Structure

```
Cigarettes-Dairy/
├── src/                      # React source code
│   ├── components/           # React components
│   ├── pages/               # Page components
│   ├── App.tsx              # Main App component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── php-api/                 # PHP backend code
│   ├── vendor/              # Composer dependencies
│   ├── src/                 # PHP source files
│   └── composer.json        # PHP dependencies
├── dist/                    # Production build output (generated)
├── node_modules/            # Node.js dependencies (generated)
├── package.json             # Frontend dependencies
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint configuration
└── README.md                # This file
```

---

## 🔧 Available Scripts

In the project directory, you can run:

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npx vite build` | Build using Vite directly |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

---

## 📝 License

This project is provided as-is for personal and educational use.

---

## 📞 Support

If you encounter any issues or have questions:

1. Check existing [GitHub Issues](https://github.com/Ben3425/Cigarettes-Dairy/issues)
2. Create a new issue with a detailed description
3. Include steps to reproduce the problem

---

## 🎉 Acknowledgments

- Built with [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- React community and documentation
- [firebase/php-jwt](https://github.com/firebase/php-jwt) for secure authentication

---

**Happy tracking!** 🎯

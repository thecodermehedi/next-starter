# NextStarter

A modern, zero-config Next.js v15 starter template with TypeScript, TailwindCSS v4, and developer-friendly tooling.

![Next.js Badge](https://img.shields.io/badge/Next.js-15.0.0-black)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-5.7.3-blue)
![TailwindCSS Badge](https://img.shields.io/badge/TailwindCSS-4.0.0-38B2AC)

## Features

- ⚡ **Next.js 15** with App Router
- 🔤 **TypeScript** for type safety
- 💅 **TailwindCSS v4** for styling
- 📏 **ESLint & Prettier** for code quality
- 🔄 **App Router** with loading/error states
- 🔐 **Type-safe env vars** with T3 Env
- 🧩 **SEO optimization** with sitemap, robots.txt, and manifest
- 🛠️ **Husky** pre-commit hooks
- 🧪 **CI workflow** with GitHub Actions
- 📱 **PWA ready** with proper manifest and icons

## 🚀 Deployment

Easily deploy your Next.js app with <a href="https://vercel.com/">Vercel</a> by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thecodermehedi/next-starter)

## 🎯 Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10.8.0+ (recommended)

### Installation

> Clone this template in one of three ways

#### Click the link below:

> [Create a new repository with this template](https://github.com/new?template_name=next-starter&template_owner=thecodermehedi)

#### Using `create-next-app`

```bash
pnpm create next-app -e https://github.com/thecodermehedi/next-starter my-project-name
```

#### Using `git clone`

```bash
git clone https://github.com/thecodermehedi/next-starter.git my-project
cd my-project
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Environment Variables

Create a `.env.local` file in the root directory with the following:

```bash
# Required - Your site's base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional - Skip environment variable validation during development
# SKIP_ENV_VALIDATION=true
```

### ⚙️ Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm check` - Run linting, type checking, and format checking
- `pnpm fix` - Autofixing linting, typing and formatting errors
- `pnpm pre-commit` - Run checks and fix linting/formatting issues

## 📁 Structure

```bash
├── .github/          # GitHub Actions workflows
├── public/           # Static assets
├── src/
│   ├── app/          # App router components and routes
│   ├── components/   # Reusable components
│   ├── config/       # Site configuration
│   ├── env.ts        # Type-safe environment variables
│   └── lib/          # Utility functions
└── next.config.js    # Next.js configuration
```

## 🤝 Contribution

To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes, and commit them.
4. Push your changes to the forked repository.
5. Create a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## ❤️ Support

If you liked the project, I will appreciate if you leave a star. 🌟😊

Made by <a href="https://github.com/thecodermehedi">Mehedi Hasan</a>

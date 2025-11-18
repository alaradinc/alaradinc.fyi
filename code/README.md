# Alara Dinc - Personal Portfolio Website

A Next.js portfolio website built with TypeScript, Tailwind CSS, and deployed on Cloudflare Pages.

## Tech Stack

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **Deployment**: Cloudflare Pages (via OpenNext adapter)
- **UI Components**: Radix UI

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Preview (Cloudflare)

```bash
npm run preview
```

## Deployment to Cloudflare Pages

### Via GitHub

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/your-username/your-repo.git
   git push -u origin main
   ```

2. **Deploy on Cloudflare Pages**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**
   - Click **Connect to Git** and select your GitHub repository
   - Configure build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run pages:build`
     - **Build output directory**: `.vercel/output/static`
     - **Root directory**: `code` (if your Next.js app is in the `code` folder)
   - Click **Save and Deploy**

### Build Settings for Cloudflare Pages

- **Production branch**: `main`
- **Build command**: `npm run pages:build`
- **Build output directory**: `.vercel/output/static`
- **Node version**: 18 or higher

## Project Structure

```
code/
├── app/              # Next.js App Router pages
├── components/       # React components
├── public/           # Static assets
├── lib/              # Utility functions
└── styles/           # Global styles
```

## Features

- Responsive design
- Video background
- Image optimization with Next.js Image
- Typekit fonts integration
- SEO optimized

## License

Private project


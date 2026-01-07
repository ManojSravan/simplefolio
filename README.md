# SimpleFolio

A clean, minimal, and developer-friendly portfolio template built with Next.js. Get your professional online presence up and running in minutes.

## ✨ Features

- **Type-Safe**: Built with TypeScript for reliable, maintainable code
- **Responsive Design**: Looks great on all devices - mobile, tablet, and desktop
- **Modern Stack**: Next.js 16, React, TypeScript, and TailwindCSS
- **Clean Architecture**: Well-organized, easy-to-understand codebase
- **SEO Optimized**: Meta tags and Open Graph support out of the box
- **Fast Performance**: Optimized images and modern best practices
- **Easy Customization**: Update content directly in the section components (`components/sections`) or add your own data files
- **Production Ready**: Deploy to Vercel, Netlify, or any platform in seconds

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/simplefolio.git
cd simplefolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Update Your Information

Edit the following files (section components and utilities):

- **Hero Section**: `components/sections/Hero.tsx` - Update name, title, and description (profile image referenced in `/public/hero.jpeg`)
- **Experience**: `components/sections/Experience.tsx` - Add your work history (see `experienceData` inside)
- **Projects**: `components/sections/Projects.tsx` - Showcase your projects
- **Skills**: `components/sections/Skills.tsx` - List your technical skills
- **Blog Posts**: `components/sections/Blogs.tsx` - Link to your articles
- **Testimonials**: `components/sections/Testimonials.tsx` - Add client feedback
- **Social Links**: `components/utils/Socials.tsx` - Update your social media links

### Change Profile Image

Replace `/public/hero.jpeg` with your own profile picture (referenced by `components/sections/Hero.tsx`).

### Update Metadata

Edit `app/layout.tsx` to update SEO information, site title, and description.

### Customize Colors & Theme

Modify `tailwind.config.ts` to change colors, fonts, and spacing.

## 📁 Project Structure
```
simplefolio/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── common/             # Shared UI components
│   ├── layout/             # Layout components
│   ├── sections/           # Page sections (Hero, About, Experience, Projects, etc.)
│   ├── ui/                 # UI primitives and design system components
│   └── utils/              # Component helpers (e.g., Socials)
├── hooks/                  # Reusable hooks
├── lib/                    # Utility functions and helpers
├── public/                 # Static assets (images)
└── styles/                 # Global styles
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework (v16)
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling
- [Lucide Icons](https://lucide.dev/) - Icons

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## © Copyright & Credits

Copyright © 2024–2026 SimpleFolio contributors. This project is licensed under the [MIT License](LICENSE).

Special thanks to the creators and maintainers of **shadcn/ui** for design inspiration and component ideas, Tailwind Labs for **Tailwind CSS**, **Lucide** for icons, and the many open-source projects and contributors whose work helped make this template possible.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/simplefolio/issues).

## 💬 Support

If you like this project, please give it a ⭐ on GitHub!

---

Made with ❤️ by developer, for developers.

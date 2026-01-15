# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## ✨ Features

- **Next.js 14** with App Router and Server Components
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Framer Motion** for smooth animations with rotating hero titles
- **Dark Mode** support with next-themes
- **Fully Responsive** design (mobile-first)
- **Modern UI/UX** with smooth transitions
- **SEO Optimized**
- **Dynamic Projects** loaded from JSON file
- **Form Validation** with real-time error feedback
- **Icon Integration** in skills section
- **Animated Components** with scroll triggers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd agent-portfolio
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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
agent-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills section
│   │   ├── Projects.tsx    # Projects section
│   │   └── Contact.tsx     # Contact section
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer
│   ├── ThemeProvider.tsx   # Theme context provider
│   └── ThemeToggle.tsx     # Dark/Light mode toggle
├── public/                 # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`components/sections/Hero.tsx`):

   - Change your name and title
   - Update the description

2. **About Section** (`components/sections/About.tsx`):

   - Update your bio
   - Change the profile image placeholder

3. **Skills Section** (`components/sections/Skills.tsx`):

   - Modify the skills array with your technologies
   - Change emoji icons to match your tech stack

4. **Projects Section** (`components/sections/Projects.tsx`):

   - Edit `public/data/projects.json` with your actual projects
   - Add project images to the `public/projects` folder
   - Toggle `featured` flag to control which projects appear by default

5. **Contact Section** (`components/sections/Contact.tsx`):

   - Update your email and location
   - Configure form submission (currently logs to console)

6. **Footer** (`components/Footer.tsx`):
   - Update social media links
   - Change your name in the copyright

### Color Scheme

Edit `tailwind.config.ts` to customize the color palette:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    },
  },
}
```

### Fonts

Update the font in `app/layout.tsx`:

```typescript
import { YourFont } from "next/font/google";

const yourFont = YourFont({ subsets: ["latin"] });
```

## 🌙 Dark Mode

Dark mode is implemented using `next-themes`. The theme toggle button is in the navigation bar. Users can choose between:

- Light mode
- Dark mode
- System preference (default)

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1280px+)

## 🔧 Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy!

### Other Platforms

You can also deploy to:

- Netlify
- AWS Amplify
- Digital Ocean
- Cloudflare Pages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Contact

Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/agent-portfolio](https://github.com/yourusername/agent-portfolio)

---

Made with ❤️ using Next.js

# Soumya H. — AI Portfolio

A modern, premium portfolio website for a Generative AI Engineer.

## Tech Stack

- **Next.js 15** — App Router, SSR/SSG
- **React 19** — Latest React with hooks
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Clean icon set

## Features

- ✅ Dark / Light mode with system preference detection
- ✅ Animated hero with particle network background
- ✅ Typewriter effect for role titles
- ✅ Scroll progress indicator
- ✅ Responsive navbar with mobile menu
- ✅ Framer Motion scroll-reveal animations
- ✅ Full SEO with OpenGraph tags + JSON-LD schema
- ✅ Accessible (WCAG compliant, ARIA labels, focus rings)
- ✅ Mobile-first responsive design
- ✅ Vercel-ready deployment

## Sections

1. **Hero** — Animated intro with particle background + typewriter
2. **About** — Professional summary with stats
3. **Skills** — Grouped tech stack cards
4. **Projects** — 4 featured AI projects with links
5. **Experience** — Timeline of internships and projects
6. **Education** — CS degree + PGP Data Science
7. **Certifications** — AWS, NVIDIA, Claude AI
8. **Achievements** — Stats and milestones
9. **Blog** — AI knowledge hub (expandable)
10. **Contact** — Form + social links
11. **Footer** — Clean, minimal

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customization

### Personal info
Update these files with your actual details:
- `app/layout.tsx` — SEO metadata, JSON-LD schema
- `components/sections/Hero.tsx` — Name, tagline, social links
- `components/sections/About.tsx` — Bio text, stats
- `components/sections/Projects.tsx` — Your actual projects
- `components/sections/Experience.tsx` — Work history
- `components/sections/Contact.tsx` — Email, location, social links
- `components/Footer.tsx` — Links

### Resume
Place your resume PDF at `public/resume.pdf` — the Download button links to it.

### Contact form
The form simulates submission. Connect it to:
- [Formspree](https://formspree.io) — easiest, free tier
- [Resend](https://resend.com) — email API
- Next.js API Route → Nodemailer

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or push to GitHub and import at vercel.com
```

The site is production-ready with zero configuration required on Vercel.

## License

MIT — free to use and modify.

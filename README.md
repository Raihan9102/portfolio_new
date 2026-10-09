# Portfolio Website

Personal portfolio showcasing Muhammad Raihan Thaffan Hidayat's work in Telecommunications Engineering, specializing in Computer Vision, IoT Development, and Web Applications.

Built with React and Vite.

## Features

### Completed Features

- Clean, responsive design optimized for all devices
- Bilingual support (English/Indonesian)
- Project filtering by category (AI, IoT, Web, Data)
- Detailed project case studies with technical specifications
- Interactive skill categorization with proficiency levels
- Working contact form with validation
- CV download functionality
- Active navigation tracking

### Main Sections

1. Home - Professional introduction and key statistics
2. About - Background, education, and core competencies
3. Experience - Work history and internship details
4. Projects - Portfolio of completed work
5. Skills - Technical expertise across multiple domains
6. Certifications - Professional credentials
7. Contact - Get in touch

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download the project files

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Open browser at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates optimized production build in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── cv/                     # CV files
├── src/
│   ├── components/             # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── BackgroundBlobs.jsx
│   ├── context/
│   │   └── LanguageContext.jsx # i18n support
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization Guide

### Personal Information

Hero Section (`src/components/Hero.jsx` line 36):
- Update your name
- Update title and specialization (lines 42-44)

About Section (`src/components/About.jsx`):
- Update stats (lines 10-15)
- Modify description paragraphs (lines 51-68)

### Skills

Edit `src/components/Skills.jsx` (lines 8-60):
- Add or remove skill categories
- Update skill proficiency levels
- Modify descriptions

### Projects

Edit `src/components/Projects.jsx` (lines 10-115):
- Replace with your projects
- Update images, descriptions, tech stacks
- Add demo and GitHub links

### Contact and Social Links

Edit `src/components/Contact.jsx` (lines 47-82):
- Update social media URLs
- Change email and location (lines 208-235)

### Color Scheme

Edit `tailwind.config.js` to customize colors.

Edit `src/index.css` for global style modifications.

### CV File

Add your CV to `public/cv/` and update the link in `src/components/Hero.jsx` (line 73).

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to vercel.com
3. Import repository
4. Vercel auto-detects Vite settings
5. Deploy

### Netlify

1. Push code to GitHub
2. Go to netlify.com
3. Select "New site from Git"
4. Build command: `npm run build`
5. Publish directory: `dist`

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: "/repo-name/",
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Technologies

- React 18 - UI library
- Vite - Build tool
- Tailwind CSS - Styling framework
- Framer Motion - Animation library
- Plus Jakarta Sans - Typography

## Roadmap

Planned enhancements:
- Dark/light mode toggle
- Backend integration for contact form
- Performance optimizations (image lazy loading, WebP format)
- SEO improvements (meta tags, structured data)
- Analytics integration

## License

MIT License

## Contact

Muhammad Raihan Thaffan Hidayat
- Email: raihan.rahmat2019@gmail.com
- GitHub: github.com/Raihan9102

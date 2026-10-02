**Built with ❤️ using React + Vite**

# Interactive Portfolio Website 🚀

A modern, interactive portfolio website built with React + Vite, featuring glassmorphism design, smooth animations, and project filtering capabilities.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop)

## ✨ Features

### Completed Features

- **🎨 Glassmorphism Design**: Modern UI with frosted glass effects and elegant transparency
- **⚡ Smooth Animations**: Framer Motion powered animations for enhanced user experience
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🔍 Project Filtering**: Filter projects by category (All/Web/IoT)
- **💼 Project Modal**: Detailed project view with features, tech stack, and links
- **🎯 Active Navigation**: Highlight current section while scrolling
- **📊 Quick Stats**: Display key metrics in animated cards
- **🛠️ Skills Showcase**: Interactive tech stack with tooltips
- **📬 Contact Form**: Functional contact form with validation
- **🌊 Animated Background**: Floating gradient blobs for visual depth
- **⚡ Micro-interactions**: Hover effects, scale animations, and smooth transitions

### Main Sections

1. **Home/Hero** - Eye-catching introduction with CTA buttons
2. **About** - Background, stats cards, and value proposition
3. **Skills** - Categorized tech stack with level indicators
4. **Projects** - Filterable project showcase (Web/IoT)
5. **Contact** - Contact form and social media links

## 🚀 Quick Start

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

1. **Clone or download the project files**

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open browser**
   - Navigate to `http://localhost:3000`
   - The site should automatically open in your default browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
interactive-portfolio/
├── public/
│   └── cv_english.pdf          # Your CV file (add your own)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with active section tracking
│   │   ├── Hero.jsx            # Hero section with CTA
│   │   ├── About.jsx           # About section with stats
│   │   ├── Skills.jsx          # Skills with tooltips
│   │   ├── Projects.jsx        # Projects with filter & modal
│   │   ├── Contact.jsx         # Contact form & social links
│   │   └── BackgroundBlobs.jsx # Animated background
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Customization Guide

### 1. Personal Information

**Hero Section** (`src/components/Hero.jsx`):

```javascript
// Line 36 - Update your name
<span className="gradient-text">Your Name</span>

// Line 42-44 - Update your title and focus
A passionate Telecommunication Engineering student
specializing in Web Development and Internet of Things (IoT)
```

**About Section** (`src/components/About.jsx`):

- Update stats (lines 10-15)
- Modify description paragraphs (lines 51-68)

### 2. Skills

Edit `src/components/Skills.jsx` (lines 8-60):

```javascript
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: "Advanced", description: "..." },
      // Add/remove skills here
    ],
  },
  // Add more categories
];
```

### 3. Projects

Edit `src/components/Projects.jsx` (lines 10-115):

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project",
    category: "Web", // or 'IoT'
    description: "Short description",
    fullDescription: "Detailed description",
    image: "https://your-image-url.com",
    tech: ["React", "Node.js"],
    demoLink: "https://demo.com",
    githubLink: "https://github.com/...",
    features: ["Feature 1", "Feature 2"],
  },
];
```

### 4. Contact & Social Links

Edit `src/components/Contact.jsx` (lines 47-82):

```javascript
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    // ...
  },
];
```

Update email and location (lines 208-235).

### 5. Color Scheme

Edit `tailwind.config.js` to change colors:

```javascript
extend: {
  colors: {
    'glass': 'rgba(255, 255, 255, 0.1)',
    // Add custom colors
  },
}
```

Or modify gradient colors in `src/index.css` (line 28).

### 6. CV File

1. Add your CV to `public/cv_english.pdf`
2. Or update the link in `src/components/Hero.jsx` (line 73)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite settings
5. Click "Deploy"

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. "New site from Git"
4. Build command: `npm run build`
5. Publish directory: `dist`

### Deploy to GitHub Pages

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

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Inter Font** - Modern typography

## 📝 Features Not Yet Implemented

- Dark/Light mode toggle
- Multi-language support (English/Indonesian)
- Blog section
- Experience/Timeline section
- Certificate gallery
- Testimonials section
- Backend integration for contact form
- Search functionality for projects
- Tag-based project filtering

## 🎯 Recommended Next Steps

1. **Add Real Content**
   - Replace placeholder images with your actual project screenshots
   - Add your real CV file
   - Update all social media links

2. **Enhance SEO**
   - Add meta tags and Open Graph images
   - Create sitemap.xml
   - Add structured data (JSON-LD)

3. **Add Analytics**
   - Integrate Google Analytics
   - Set up conversion tracking

4. **Performance Optimization**
   - Optimize images (use WebP format)
   - Implement lazy loading for images
   - Add service worker for PWA

5. **Additional Features**
   - Add dark mode toggle
   - Implement blog section
   - Add testimonials slider

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or support:

- Email: your.email@example.com
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Built with ❤️ using React + Vite**

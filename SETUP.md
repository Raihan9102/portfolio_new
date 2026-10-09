# Quick Setup Guide

## Installation Steps

1. Install Dependencies
   ```bash
   npm install
   ```

2. Start Development Server
   ```bash
   npm run dev
   ```

3. Open in Browser
   The app will open at `http://localhost:3000`

## First Steps to Customize

### 1. Update Personal Info (5 minutes)

Hero Section - `src/components/Hero.jsx`:
- Line 36: Change name
- Line 42-44: Update title and specialization

### 2. Add Your Projects (10 minutes)

Projects Section - `src/components/Projects.jsx`:
- Lines 10-115: Replace sample projects with your real ones
- Update: title, description, tech stack, image URLs, and links

### 3. Update Skills (5 minutes)

Skills Section - `src/components/Skills.jsx`:
- Lines 8-60: Add or remove skills based on your expertise
- Update skill levels (Beginner, Intermediate, Advanced)

### 4. Add Contact Info (3 minutes)

Contact Section - `src/components/Contact.jsx`:
- Lines 47-82: Update social media URLs
- Lines 208-235: Change email and location

### 5. Replace CV (1 minute)

Add your CV PDF to `public/cv/`

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## Deploy

See README.md for detailed deployment instructions for Vercel, Netlify, or GitHub Pages.

## Need Help?

Check the main README.md for detailed documentation.

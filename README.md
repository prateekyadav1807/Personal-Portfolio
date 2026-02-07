# Prateek Yadav - Portfolio Website

A modern, professional portfolio website for Prateek Yadav, Full Stack Developer.

## Features

- ✨ Dark/Light Mode Toggle
- 📱 Fully Responsive Design
- 🎨 Modern UI with Tailwind CSS
- 🔄 Smooth Scrolling Navigation
- 💼 Portfolio Showcase
- 📧 Contact Form
- 🎯 Clean Component Structure

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (Icons)

## Installation

1. Clone the repository or extract the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Build for Production

```bash
npm run build
```

The build files will be in the `dist` folder.

## Project Structure

```
prateek-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Update Personal Information

1. **Contact Details** - Edit `src/components/Contact.jsx`
2. **Projects** - Update project array in `src/components/Projects.jsx`
3. **Skills** - Modify skills object in `src/components/Skills.jsx`
4. **Profile Image** - Replace the User icon in `src/components/Hero.jsx` with an actual image

### Change Colors

The color scheme uses Tailwind's blue-600 and purple-600. To change:
- Edit the gradient classes in components (e.g., `from-blue-600 to-purple-600`)

## License

© 2025 Prateek Yadav. All rights reserved.

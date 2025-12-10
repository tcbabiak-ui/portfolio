# Portfolio Website

A modern, professional portfolio website showcasing expertise as a Technical Account Manager with 10+ years of experience in AI-driven and cloud solutions.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and responsive layout
- **Tech-Savvy**: Built with React and Vite, demonstrating technical proficiency
- **Professional Sections**:
  - Hero section with compelling introduction
  - About section highlighting experience and achievements
  - Experience timeline showcasing career progression
  - Skills section with proficiency indicators
  - Contact form for potential employers

## Tech Stack

- **React 18** - Modern UI framework
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with animations and gradients
- **Responsive Design** - Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to any static hosting service.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Contact Information**: Edit `src/components/Contact.jsx` to update email, phone, and LinkedIn links
2. **Experience**: Modify the `experiences` array in `src/components/Experience.jsx` with your actual work history
3. **Skills**: Update skill levels and categories in `src/components/Skills.jsx`
4. **About Section**: Customize the content in `src/components/About.jsx`

### Styling

- Color scheme can be modified in `src/index.css` under `:root` variables
- Component-specific styles are in each component's CSS file

## Deployment

This portfolio can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `dist` folder contents
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.


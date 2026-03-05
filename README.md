# Shehan Chrishmika Portfolio

A modern, animated developer portfolio built with **React 19**, **Vite**, **Tailwind CSS v4**, and **React Three Fiber**.

This project showcases:

- A 3D hero section (astronaut + motion-based camera rig)
- Interactive project listing with hover previews and expandable details
- About section with animated cards, globe visualization, and tech framework orbit
- Contact form integrated with **EmailJS**
- Responsive navigation and polished UI transitions

---

## Live Sections

- `Home` (`#home`)
- `About` (`#about`)
- `Projects` (`#projects`)
- `Contact` (`#contact`)

> `Experience` and `Testimonial` sections are implemented but currently commented out in `src/App.jsx`.

---

## Tech Stack

### Core

- React 19
- Vite 7
- Tailwind CSS 4

### UI / Animation

- Motion (`motion/react`)
- `react-responsive`
- `clsx` + `tailwind-merge`

### 3D / Visual Effects

- `@react-three/fiber`
- `@react-three/drei`
- `three`
- `maath`
- `cobe`

### Services

- `@emailjs/browser` (contact form email delivery)

### Tooling

- ESLint 9

---

## Project Structure

```text
Portfolio/
├─ public/
│  └─ assets/
│     ├─ logos/
│     ├─ projects/
│     └─ socials/
├─ src/
│  ├─ components/        # Reusable UI + animation + 3D components
│  ├─ constants/         # Portfolio data (projects, socials, etc.)
│  ├─ sections/          # Page sections (Hero, About, Projects, Contact...)
│  ├─ App.jsx            # Section composition
│  ├─ index.css          # Tailwind theme tokens + global utility classes
│  └─ main.jsx           # App entry point
├─ index.html
├─ vite.config.js
├─ tailwind.config.js
└─ eslint.config.js
```

---

## Getting Started

### Prerequisites

- Node.js `>= 18`
- npm (comes with Node)

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Available Scripts

| Script            | Description                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Starts the Vite dev server with HMR           |
| `npm run build`   | Creates optimized production build in `dist/` |
| `npm run preview` | Serves the built app locally                  |
| `npm run lint`    | Runs ESLint across the project                |

---

## Customization Guide

### 1) Update Portfolio Content

Edit `src/constants/index.js`:

- `myProjects` → project cards and details
- `mySocials` → footer/social links
- `experiences` and `reviews` → data for optional sections

### 2) Update Personal Copy

- Hero text: `src/components/HeroText.jsx`
- About section profile and labels: `src/sections/About.jsx`
- Navbar brand text: `src/sections/Navbar.jsx`
- Footer copyright: `src/sections/Footer.jsx`

### 3) Update Assets

- Place project thumbnails in `public/assets/projects/`
- Place logos in `public/assets/logos/`
- Place social icons in `public/assets/socials/`

### 4) Theme & Styling

- Theme tokens and custom utility classes live in `src/index.css`
- Tailwind plugin config lives in `tailwind.config.js`

---

## Contact Form (EmailJS)

The contact form in `src/sections/Contact.jsx` currently uses direct EmailJS identifiers in code.

Current required values:

- `serviceId`
- `templateId`
- `publicKey`

### Recommended (Secure) Setup

Move EmailJS values into environment variables.

Create `.env`:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=you@example.com
VITE_CONTACT_TO_NAME=Your Name
```

Then use in `Contact.jsx`:

```js
await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  {
    from_name: formData.name,
    to_name: import.meta.env.VITE_CONTACT_TO_NAME,
    from_email: formData.email,
    to_email: import.meta.env.VITE_CONTACT_TO_EMAIL,
    message: formData.message,
  },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
);
```

> Do not commit real secrets. Add `.env` to `.gitignore` if needed.

---

## Deployment

This app is static and can be deployed easily on:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

General flow:

1. Push repository to GitHub
2. Connect repository in your hosting platform
3. Set build command to `npm run build`
4. Set output directory to `dist`
5. Add required environment variables (if using EmailJS via `.env`)

---

## Notes

- `Experience` and `Testimonial` sections are ready but disabled in `src/App.jsx`.
- 3D rendering uses `@react-three/fiber` + `three`; lower-powered devices may have reduced frame rate.
- If a model/asset path changes, update import/path references accordingly.

---

## Future Improvements (Optional)

- Move all hardcoded contact details into environment variables
- Add form validation and anti-spam controls (e.g., honeypot or rate limit)
- Add SEO metadata and Open Graph tags
- Add analytics and performance monitoring

---

## License

This project is for personal portfolio use. Add your preferred license if you plan to distribute it.

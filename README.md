# Wretched Man Woodworking

Single-page marketing website for **Wretched Man Woodworking**. Custom handmade
furniture (tables, cutting boards, and one-of-a-kind pieces) milled, dried, and
built in northeast Indiana, serving the Fort Wayne area.

Current live site (Squarespace): https://www.wmwoodworking.com

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (scroll animations)
- [lucide-react](https://lucide.dev/) (icons)
- Build-time **prerendering** so all content ships in the static HTML (SEO)
- Contact form via **Netlify Forms**

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # prerendered production build into dist/
npm run preview  # preview the production build
```

## Structure (one page)

```
public/                images: logo.webp, hero.webp, work-1..6.webp
src/
  App.jsx              section order
  index.css            Tailwind + base styles
  components/
    Header.jsx         sticky nav + top "Get a Free Quote" CTA
    Hero.jsx           headline + top CTAs
    Process.jsx        "From Tree to Treasured Furniture" (3 steps)
    Services.jsx       What We Build (4 cards)
    Gallery.jsx        Our Work (photo grid)
    About.jsx          brand story
    CtaBand.jsx        bottom call-to-action band
    Quote.jsx          contact details + Netlify quote form (bottom CTA)
    Footer.jsx
index.html             SEO head, fonts, LocalBusiness JSON-LD, hidden Netlify form
tailwind.config.js     coffee/walnut brand palette + fonts
netlify.toml           build + SPA redirect
```

## Editing content

- **Services / prices:** the `services` array in `src/components/Services.jsx`
- **Contact info / hours:** `src/components/Quote.jsx` and `src/components/Footer.jsx`
- **Photos:** replace files in `public/` (keep the same names, or update the refs)

## Quote form (Netlify Forms)

The form is named **`quote`**. A hidden static copy lives in `index.html` so
Netlify detects it at deploy time; the React form submits via AJAX. After
deploying, add an email notification in Netlify (**Forms → Form notifications →
Email notification → dhostetler@wmwoodworking.com**) so submissions are emailed.

## Brand

| Token         | Value     |
| ------------- | --------- |
| primary       | `#6f4e37` |
| primary-dark  | `#4a3528` |
| primary-light | `#a07d5a` |
| cream         | `#f7f1e8` |
| espresso      | `#2a2018` |

Fonts: Fraunces (display) + Inter (body), via Google Fonts.

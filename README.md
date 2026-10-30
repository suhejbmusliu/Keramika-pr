# Keramika (first version)

The first website for KERAMIKA D.O.O., a marble and granite company from
Bustran, Preševo. Plain HTML, CSS and JavaScript with jQuery, no build step.

This version is replaced by the React + TypeScript site in the `keramika`
repository.

---

## What's inside

- Navbar with a CSS-only mobile menu (checkbox toggle) and smooth scroll
- Language switch: **English**, **Albanian**, **Serbian** (texts in the
  `translations` object in `script.js`)
- Banner slider that moves every 3 seconds, with arrows and dots
- About, services
- Gallery with filters (latest work / ceramics, using Isotope) and a
  lightbox
- Contact details and an embedded Google Map
- Sections fade in on scroll

> [!NOTE]
> In the contact section the phone and email **text** is correct, but the
> `tel:` and `mailto:` links still point to placeholder values.

---

## Files

| File | What |
|---|---|
| `index.html` | All page content |
| `index.css`, `style/*.css` | Global styles + one file per section (nav, banner, about, service, gallery, contact, map, text) |
| `script.js` | Menu, slider, scroll reveal, gallery filter, translations, lightbox |
| `assets/images/`, `assets/gallery-img/` | Logo, banner, service and gallery photos |

Loaded from CDNs: jQuery (twice: 3.5.1 in the `<head>` and 3.6.3 at the
end of the page), jQuery Isotope and Font Awesome 5. `script.js` also calls
`$.localScroll`, but that plugin is never loaded.

---

## Run locally

Open `index.html` in a browser (the CDN scripts need an internet
connection).

---

## Deployment

Any static host works (GitHub Pages, Netlify, Vercel): upload the folder
as it is.

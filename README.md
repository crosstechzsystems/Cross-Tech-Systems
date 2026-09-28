# Cross Tech Systems Website

Professional, modern website for Cross Tech Systems — IT Support & Technology Solutions, located in Cape Town, South Africa.

## 📋 Overview

This site showcases refurbished laptop and PC bundles, in-store services, and the team behind them. Design direction: a deep navy tech background with a single electric-blue accent (matching the brand's own marketing flyers and storefront branding).

## 🎨 Design

### Color Scheme
- **Navy Deep** `#060b17` — page background
- **Navy Panel** `#101d38` — section/card background
- **Accent Blue** `#00a8ff` — primary accent, CTAs, links
- **Blue Light** `#5fd0ff` — headings/eyebrow highlights
- **Ice White** `#eaf4ff` — body text on dark sections

### Typography
- **Sora** — headings, buttons, labels
- **Inter** — body copy

### Sections
1. Sticky nav with mobile hamburger menu
2. Hero — headline, CTAs, stats, brand emblem
3. Products — 5 laptop/PC bundle cards pulled from current flyers
4. Services — repairs, CCTV, IPTV, accessories, etc.
5. About — staff photo + shop story
6. Storefront banner photo
7. Contact — info + working front-end form
8. Footer

## 📁 File Structure

```
.
├── index.html        # Main HTML structure
├── styles.css         # Primary stylesheet (colors, layout, components)
├── responsive.css     # Mobile & tablet breakpoints
├── script.js          # Nav toggle, scroll-to-top, form handling
├── README.md          # This file
└── assets/
    ├── logo.jpg                    # Circular Cross Tech Systems emblem
    ├── deal-hp-elitebook.jpg       # HP EliteBook 14" flyer
    ├── deal-dell-vostro.jpg        # Dell Vostro 15 5590 flyer
    ├── deal-asus-zenbook.jpg       # ASUS Zenbook Flip S flyer
    ├── deal-bundle-5laptops.jpg    # 5-laptop office bundle flyer
    ├── deal-bulk-7pc.jpg           # 7-PC + laptop bulk offer flyer
    ├── about-staff.jpg             # Staff photo, in-store
    └── about-storefront-night.jpg  # Storefront photo, night
```

## 🚀 Quick Start

1. Keep `assets/` in the same folder as `index.html`.
2. Open `index.html` directly in a browser to preview locally, or upload the whole folder to your web host.
3. Wire up the contact form: `script.js` currently validates and shows a confirmation message only. Point it at your form backend (e.g. Formspree, a serverless function, or your own endpoint) to actually receive submissions.

## ⚙️ Customization

Colors and type live as CSS custom properties at the top of `styles.css`:
```css
:root {
  --blue: #00a8ff;
  --navy-deep: #060b17;
  --font-display: 'Sora', 'Inter', sans-serif;
}
```

### Contact Information
- **Phone**: 081 379 8480
- **Email**: info@crosstechz.co.za
- **Website**: www.crosstechz.co.za
- **Location**: Shop 5, Westgate Shopping Centre, Cape Town

## 📱 Responsive Breakpoints
- Desktop: 1025px+
- Tablet: 641px – 1024px
- Mobile: ≤ 640px
- Landscape phones: short-height override

## 🆘 Troubleshooting

**Images not loading** — confirm the `assets` folder sits next to `index.html` and filenames match exactly (case-sensitive on most hosts).

**Mobile menu not opening** — check that `script.js` is loading (view page source, browser console for errors).

**Form shows a success message but you never get the email** — that's expected until a real backend endpoint is connected; see Quick Start above.

---

**Last Updated**: 2026-09-28
**Version**: 2.0.0
**Status**: Ready for deployment

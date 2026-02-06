# Civil Engineering Design Inputs

A static website for sharing civil engineering design reference images with engineers in India.

## Overview

This GitHub Pages site organizes design reference images into categorized galleries for easy access and review by civil engineering teams.

## Categories

- **Basement** - Foundation, waterproofing, and structural elements (16 images)
- **Doors** - Door designs, materials, frames, and installations (37 images)
- **Steps** - Staircase designs, materials, and safety features (13 images)
- **Water** - Plumbing, drainage, and water systems (3 images)
- **Windows** - Window styles, frames, and installations (22 images + 21 categorized images in subcategories)

## Structure

```
IndiaOffice/
├── index.html              # Homepage with category cards
├── css/
│   └── styles.css         # Styling for entire site
├── js/
│   ├── script.js          # Homepage functionality
│   └── category-detail.js # Category page functionality
├── data/
│   ├── categories-data.js # Category definitions
│   └── images-data.js     # Image file listings
├── categories/
│   ├── basement/
│   ├── doors/
│   ├── steps/
│   ├── water/
│   └── windows/
│       └── index.html     # Category detail pages
└── Office/
    └── images/
        ├── basement/
        ├── doors/
        ├── Steps/
        ├── water/
        └── windows/
```

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Image Galleries** - Grid layout with hover effects
- **Modal Viewer** - Click any image to view full-size
- **Clean Navigation** - Easy access between categories
- **Keyboard Support** - ESC key to close modal
- **Subcategories** - Windows category includes organized subcategories for Primary Windows, Utility/Bathroom, and Excluded items

## Deployment

This site is designed for GitHub Pages deployment:

1. Push the repository to GitHub
2. Enable GitHub Pages in repository settings
3. Select main branch as source
4. Site will be available at: `https://[username].github.io/[repo-name]/`

## Adding New Images

1. Add image files to `Office/images/[category]/`
2. Update `data/images-data.js` with new filenames
3. Update image count in `data/categories-data.js`
4. Commit and push changes

## Adding New Categories

1. Create new folder in `Office/images/[new-category]/`
2. Add entry to `data/categories-data.js`
3. Add image list to `data/images-data.js`
4. Create `categories/[new-category]/index.html` (copy from existing)
5. Update the category ID in the inline script

## Windows Subcategories

The Windows category includes additional subcategorization for better organization:

### Primary Windows (Actual Windows)
- **Type A - Standard Wide Grill**: Standard wide rectangular grill window (5 images)
- **Type B - Medium Wide Grill**: Medium wide / near-square grill window (5 images)
- **Type C - Extra-Wide Grill**: Extra-wide grill window (1 image)
- **Designer Grill**: Feature window with different designer grill pattern (1 image)

### Utility / Bathroom
- **Tall Narrow Ventilator**: For bathroom or utility spaces (2 images)
- **Small Horizontal Ventilator**: For toilet or service areas (2 images)

### Excluded (Not Windows)
- **Non-Window Openings**: Niches / service openings / not for window ordering (5 images)

Each subcategory displays its images in a separate gallery section on the Windows page.

## Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- No build process required
- All paths relative for GitHub Pages compatibility
- Minimal dependencies for fast loading

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Last Updated:** February 2026

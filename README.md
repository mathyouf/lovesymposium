# Love Symposium

This repository contains the website files for both the 2024 and 2025 Love Symposium events.

## File Structure & Dependencies

### index.html (2024 Site - Last Year's Event)
**Main file:** `index.html`

**Dependencies:**
- **CSS Files:**
  - `reset.css` - CSS reset styles
  - `styles.css` - Main stylesheet
  - External: Font Awesome, Google Fonts, Adobe Typekit

- **JavaScript Files:**
  - `blogList.js` - Blog list functionality
  - `faq.html` - FAQ content (loaded dynamically)

- **Images & Media:**
  - `logo2.png` - Favicon
  - `imgs/` folder:
    - `ann.jpg` - Co-host Ann Pierce
    - `christine.jpg`, `eric.jpg`, `lydia.jpg`, `piper.jpg`, `rachel2.jpg`, `sukhmai.jpg`, `suzie.jpg` - Guest photos
    - `author1.png`, `founder1.png`, `programmer3.png`, `research1.png`, `scientist1.png`, `design3.png`, `psychologist1.png`, `you1.png`, `pi.png` - Category icons
    - `new1.jpg`, `new2.jpg`, `new3.jpg`, `new4.jpg` - Topic section images
    - `lh1.jpg` through `lh7.jpg` - Lighthaven venue photos
    - `lhroom.jpg`, `lighthavencampusmap.jpg` - Housing/venue info
  - `imgs/papersc/` folder:
    - `1.jpg`, `14.jpg`, `20.jpg`, `55.jpg`, `56.jpg`, `58.jpg`, `59.jpg`, `62.jpg`, `67.jpg`, `68.jpg` - Research paper covers
  - `speakers/` folder:
    - `matthewfisher.jpg`, `andrewcutler.jpg`, `aella.jpg`, `ava.jpg`, `chase.jpg`, `damon.jpg`, `eneasz.jpg`, `jakek.jpg`, `jeyk.jpg`, `malcolm.jpg`, `mark.jpg`, `shreeda.jpg` - Speaker photos

- **Data Files:**
  - `blogs.csv` - Blog/writing data
  - `speakers.csv` - Speaker information

### index2.html (2025 Site - This Year's Event)
**Main file:** `index2.html`

**Dependencies:**
- **CSS/Styling:**
  - Tailwind CSS (loaded via CDN)
  - Google Fonts (Cormorant, Caveat)
  - Inline styles for custom animations and layout

- **Images & Media:**
  - `symv2imgs/` folder (primary image source):
    - `img.jpg` - Hero background image
    - `ann.jpg`, `matt.jpg` - Host photos
    - `1.png` through `8.png` - Various event images
    - `defenseeros.jpg`, `defenseeros.png`, `erospsyche.png`, `run.png`, `download.png` - Additional graphics
    - `2024-1.jpg` through `2024-10.jpg` - Photo gallery from 2024 event (referenced in JS)

- **Data Files:**
  - `symv2imgs/speakers.csv` - Speaker data for 2025
  - `symv2imgs/schedule.csv` - Event schedule data
  - External Google Sheets (primary data source with local CSV fallbacks)

- **JavaScript:**
  - All JavaScript is inline within the HTML file
  - Fetches data from Google Sheets with local CSV fallbacks
  - Handles dynamic content population and animations

### Shared/Common Files
- `CNAME` - GitHub Pages domain configuration
- `manifest.css` - Web app manifest styles
- `modal.js` - Modal functionality (may be legacy)

### Unused/Legacy Files
These files appear to be from the original site but may not be actively used:
- `img.jpg` - Possibly replaced by symv2imgs/img.jpg
- `logo.png`, `logowhite.jpg` - Alternative logos
- `index2.html` uses different logo approach

## File Usage Analysis

**Actually Used Files:**
- `img.jpg` - **NOT USED** (only `symv2imgs/img.jpg` is used by index2.html)
- `logo.png`, `logowhite.jpg` - **NOT USED** (no references found)
- `manifest.css` - **NOT USED** (no references found)  
- `modal.js` - **NOT USED** (no references found)

**Cross-Site Dependencies:**
- No cross-references found between 2024 and 2025 sites
- Each site is self-contained with its own assets

## Proposed Folder Structure

```
lovesymposium/
├── README.md
├── CNAME
├── 2024/
│   ├── index.html (renamed from root index.html)
│   ├── assets/
│   │   ├── css/
│   │   │   ├── reset.css
│   │   │   └── styles.css
│   │   ├── js/
│   │   │   ├── blogList.js
│   │   │   └── modal.js (if actually used)
│   │   ├── data/
│   │   │   ├── blogs.csv
│   │   │   ├── speakers.csv
│   │   │   └── faq.html
│   │   └── images/
│   │       ├── logo2.png
│   │       ├── imgs/ (all current imgs/ contents)
│   │       ├── speakers/ (all current speakers/ contents)
│   │       └── papers/ (move imgs/papersc/ here)
│   └── manifest.css (if actually used)
├── 2025/
│   ├── index.html (renamed from index2.html)
│   └── assets/
│       ├── images/
│       │   ├── hero/
│       │   │   └── img.jpg (from symv2imgs/)
│       │   ├── hosts/
│       │   │   ├── ann.jpg
│       │   │   └── matt.jpg
│       │   ├── gallery/
│       │   │   └── 2024-*.jpg (photos from 2024 event)
│       │   └── graphics/
│       │       ├── 1.png - 8.png
│       │       ├── defenseeros.jpg/png
│       │       ├── erospsyche.png
│       │       └── run.png, download.png
│       └── data/
│           ├── speakers.csv
│           └── schedule.csv
└── archive/
    ├── img.jpg (unused root file)
    ├── logo.png (unused)
    └── logowhite.jpg (unused)
```

## Migration Plan

### Phase 1: Create Structure
1. Create `2024/`, `2025/`, and `archive/` directories
2. Create subdirectories: `assets/css/`, `assets/js/`, `assets/data/`, `assets/images/`

### Phase 2: Move 2024 Files
1. Move `index.html` → `2024/index.html`
2. Move CSS files → `2024/assets/css/`
3. Move JS files → `2024/assets/js/`
4. Move data files → `2024/assets/data/`
5. Move image folders → `2024/assets/images/`
6. Update all paths in `2024/index.html`

### Phase 3: Move 2025 Files  
1. Move `index2.html` → `2025/index.html`
2. Reorganize `symv2imgs/` contents into logical subfolders
3. Update all paths in `2025/index.html`

### Phase 4: Archive Unused Files
1. Move unused files to `archive/`
2. Test both sites work correctly
3. Clean up root directory

### Phase 5: Setup Redirects (Optional)
1. Create root `index.html` that redirects to current year (2025)
2. Add navigation between years

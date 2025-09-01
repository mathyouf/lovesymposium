# Love Symposium

This repository contains the website files for both the 2024 and 2025 Love Symposium events, now cleanly organized by year.

## Project Structure

```
lovesymposium/
├── README.md
├── CNAME                    # GitHub Pages domain configuration
├── index.html              # Root redirect page (auto-redirects to 2025)
├── 2024/                   # Complete 2024 Love Symposium site
│   ├── index.html
│   └── assets/
│       ├── css/
│       │   ├── reset.css
│       │   └── styles.css
│       ├── js/
│       │   └── blogList.js
│       ├── data/
│       │   ├── blogs.csv
│       │   ├── speakers.csv
│       │   └── faq.html
│       └── images/
│           ├── logo2.png
│           ├── imgs/        # All venue, guest, and topic images
│           ├── speakers/    # Speaker headshots
│           └── papers/      # Research paper covers
├── 2025/                   # Complete 2025 Love Symposium site
│   ├── index.html
│   └── assets/
│       ├── images/
│       │   ├── hero/
│       │   │   └── img.jpg
│       │   ├── hosts/
│       │   │   ├── ann.jpg
│       │   │   └── matt.jpg
│       │   ├── gallery/
│       │   │   └── 2024-*.jpg  # Photos from 2024 event
│       │   └── graphics/
│       │       ├── 1.png - 8.png
│       │       ├── defenseeros.jpg/png
│       │       ├── erospsyche.png
│       │       └── run.png, download.png
│       └── data/
│           ├── speakers.csv
│           └── schedule.csv
└── archive/                # Unused/legacy files
    ├── img.jpg
    ├── logo.png
    ├── logowhite.jpg
    ├── manifest.css
    └── modal.js
```

## Site Details

### 2024 Love Symposium
- **Technology Stack**: Custom CSS, vanilla JavaScript
- **Location**: Berkeley, CA (Lighthaven)
- **Date**: November 15-17, 2024
- **Features**: 
  - Blog/writing showcase with dynamic filtering
  - Speaker gallery with confirmed attendees
  - Research paper gallery
  - FAQ system with dynamic loading
  - Venue information and booking integration

### 2025 Love Symposium  
- **Technology Stack**: Tailwind CSS, vanilla JavaScript
- **Location**: San Francisco, CA (The Commons)
- **Date**: November 14-16, 2025
- **Features**:
  - Modern responsive design with animations
  - Dynamic speaker loading from Google Sheets
  - Scrolling photo galleries and reviews
  - Ticket purchasing system
  - Interactive schedule display
  - Themed speaker sections (Industry, Psychometrics, Philosophy)

## Development

### Local Development
```bash
# Serve 2024 site
cd 2024 && python3 -m http.server 8000

# Serve 2025 site  
cd 2025 && python3 -m http.server 8001

# Serve root (with redirect)
python3 -m http.server 8002
```

### GitHub Pages Configuration

The site is configured for GitHub Pages with smart routing:

**Configuring Default Year:**
1. Edit `index.html` and change `const DEFAULT_YEAR = '2025'` to your preferred default
2. Or edit `_config.yml` and change `default_year: "2025"` 

**URL Routing:**
- `yoursite.com/` → Redirects to default year after 5 seconds
- `yoursite.com/2024/` → Direct access to 2024 site
- `yoursite.com/2025/` → Direct access to 2025 site
- `yoursite.com/2024` or `/2025` → 404.html handles redirect to proper folder

**Files for GitHub Pages:**
- `index.html` - Root redirect page with configurable default
- `404.html` - Handles missing pages and URL routing
- `_config.yml` - Jekyll configuration for GitHub Pages
- `CNAME` - Custom domain configuration (if using custom domain)

### Data Sources
- **2024**: Static CSV files and HTML content
- **2025**: Google Sheets integration with local CSV fallbacks

## Key Improvements Made

✅ **Clean Separation**: Each year's content is completely self-contained  
✅ **Logical Organization**: Assets organized by type and purpose  
✅ **Path Updates**: All file references updated to new structure  
✅ **Legacy Cleanup**: Unused files moved to archive  
✅ **Navigation**: Root redirect page for easy year selection  
✅ **Maintainability**: Clear structure for future years

## Adding Future Years

To add a new year (e.g., 2026):
1. Create `2026/` directory with `assets/` subdirectories
2. Copy and modify the most recent year's `index.html`
3. Update asset paths and content
4. Update root `index.html` redirect to point to new year
5. Add navigation link to previous years

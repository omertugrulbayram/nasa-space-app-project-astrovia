# AstroVia Brand Assets

This directory contains the brand assets for AstroVia.

## Required Files

### Logo Files
- `astrovia-logo.webp` - Main horizontal logo (256×64 or 512×128 recommended)
- `astrovia-mark.webp` - Square icon for favicon/OG (512×512 recommended)

### OG Image
- `../og/og-image.jpg` - Open Graph image (1200×630 recommended)

## File Specifications

### astrovia-logo.webp
- **Dimensions**: 256×64 or 512×128 pixels
- **Format**: WebP
- **Usage**: Navbar, footer, hero section
- **Content**: Horizontal logo with meteor+planet design

### astrovia-mark.webp  
- **Dimensions**: 512×512 pixels
- **Format**: WebP
- **Usage**: Favicon, app icons, social media
- **Content**: Square icon version of the logo

### og-image.jpg
- **Dimensions**: 1200×630 pixels
- **Format**: JPEG
- **Usage**: Social media previews, Open Graph
- **Content**: AstroVia branding with space theme

## Implementation Notes

The logo integration is already implemented in the HTML/CSS:
- Navbar: Uses `astrovia-logo.webp` with fallback to text
- Footer: Uses `astrovia-logo.webp` 
- Favicon: Uses `astrovia-mark.webp`
- OG: Uses `og-image.jpg`

All images include proper alt text, width/height attributes, and lazy loading for performance.

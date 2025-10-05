// ================================================
//    AstroVia Brand Configuration
//    NASA Space Apps Challenge 2025
// ================================================

export const brand = {
  name: "AstroVia",
  logo: "/brand/astrovia-logo.webp",   // main logo - leave empty to show only text
  mark: "/brand/astrovia-mark.webp",   // square icon for favicon/og
  alt: "AstroVia planetary defense logo",
  description: "AI-powered asteroid detection and impact simulation system",
  themeColor: "#0b1220",
  backgroundColor: "#0b1220"
};

// Brand component for HTML usage
export function createBrandHTML(withText = true, className = "") {
  const hasLogo = !!brand.logo;
  
  if (hasLogo) {
    return `
      <div class="brand-container ${className}">
        <img 
          src="${brand.logo}" 
          alt="${brand.alt}" 
          width="128" 
          height="32" 
          loading="lazy" 
          decoding="async" 
          class="brand-logo"
        />
        ${withText ? `<span class="sr-only">${brand.name}</span>` : ''}
      </div>
    `;
  } else {
    return `
      <div class="brand-container ${className}">
        <span class="brand-text">${brand.name}</span>
      </div>
    `;
  }
}

// Brand mark for favicon/og usage
export function createBrandMarkHTML(className = "") {
  return `
    <img 
      src="${brand.mark}" 
      alt="${brand.alt}" 
      width="512" 
      height="512" 
      loading="lazy" 
      decoding="async" 
      class="brand-mark ${className}"
    />
  `;
}

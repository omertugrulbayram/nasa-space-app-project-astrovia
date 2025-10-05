// Slide veri yapısı
export const SLIDES = [
  { 
    id: 1, 
    title: "1. Giriş ve Konsept", 
    hrefJpg: "/slides/1-giris-konsept.jpg", 
    hrefPng: "/slides/1-giris-konsept.png" 
  },
  { 
    id: 2, 
    title: "2. Teknoloji Altyapısı", 
    hrefJpg: "/slides/2-teknoloji-altyapisi.jpg", 
    hrefPng: "/slides/2-teknoloji-altyapisi.png" 
  },
  { 
    id: 3, 
    title: "3. Blink Analiz Sistemi", 
    hrefJpg: "/slides/3-blink-analiz-sistemi.jpg", 
    hrefPng: "/slides/3-blink-analiz-sistemi.png" 
  },
  { 
    id: 4, 
    title: "4. Etki Simülasyonu", 
    hrefJpg: "/slides/4-etki-simulasyonu.jpg", 
    hrefPng: "/slides/4-etki-simulasyonu.png" 
  },
  { 
    id: 5, 
    title: "5. Veri Kaynakları", 
    hrefJpg: "/slides/5-veri-kaynaklari.jpg", 
    hrefPng: "/slides/5-veri-kaynaklari.png" 
  },
  { 
    id: 6, 
    title: "6. Gelecek Planları", 
    hrefJpg: "/slides/6-gelecek-planlari.jpg", 
    hrefPng: "/slides/6-gelecek-planlari.png" 
  },
  { 
    id: 7, 
    title: "7. Sonuç ve Öneriler", 
    hrefJpg: "/slides/7-sonuc-oneriler.jpg", 
    hrefPng: "/slides/7-sonuc-oneriler.png" 
  }
];

// Fallback URL çözümleyici
export function resolveHref(jpg, png) {
  return jpg || png || "#";
}

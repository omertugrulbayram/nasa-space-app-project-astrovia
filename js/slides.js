// Slides sistemi - Vanilla JavaScript (ES6 modules olmadan)
const SLIDES = [
  { id: 1, title: "1. Giriş ve Konsept", hrefJpg: "/slides/1-giris-konsept.jpg", hrefPng: "/slides/1-giris-konsept.png" },
  { id: 2, title: "2. Teknoloji Altyapısı", hrefJpg: "/slides/2-teknoloji-altyapisi.jpg", hrefPng: "/slides/2-teknoloji-altyapisi.png" },
  { id: 3, title: "3. Blink Analiz Sistemi", hrefJpg: "/slides/3-blink-analiz-sistemi.jpg", hrefPng: "/slides/3-blink-analiz-sistemi.png" },
  { id: 4, title: "4. Etki Simülasyonu", hrefJpg: "/slides/4-etki-simulasyonu.jpg", hrefPng: "/slides/4-etki-simulasyonu.png" },
  { id: 5, title: "5. Veri Kaynakları", hrefJpg: "/slides/5-veri-kaynaklari.jpg", hrefPng: "/slides/5-veri-kaynaklari.png" },
  { id: 6, title: "6. Gelecek Planları", hrefJpg: "/slides/6-gelecek-planlari.jpg", hrefPng: "/slides/6-gelecek-planlari.png" },
  { id: 7, title: "7. Sonuç ve Öneriler", hrefJpg: "/slides/7-sonuc-oneriler.jpg", hrefPng: "/slides/7-sonuc-oneriler.png" }
];

function resolveHref(jpg, png) {
  return jpg || png || "#";
}

class SlidesManager {
  constructor() {
    this.container = null;
    this.init();
  }

  init() {
    // DOM yüklendiğinde çalıştır
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.render());
    } else {
      this.render();
    }
  }

  render() {
    this.container = document.getElementById('slides-container');
    if (!this.container) {
      console.warn('Slides container not found');
      return;
    }

    console.log('🔥 Slides container bulundu, slides yükleniyor...');

    // Mevcut içeriği temizle
    this.container.innerHTML = '';

    // Her slide için HTML oluştur
    SLIDES.forEach(slide => {
      const slideElement = this.createSlideElement(slide);
      this.container.appendChild(slideElement);
    });

    console.log('🔥 Slides yüklendi:', SLIDES.length);
  }

  createSlideElement(slide) {
    const href = resolveHref(slide.hrefJpg, slide.hrefPng);
    
    const slideDiv = document.createElement('div');
    slideDiv.className = 'slide-item';
    slideDiv.innerHTML = `
      <div class="slide-content">
        <a 
          href="${href}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="slide-link"
          aria-label="${slide.title} slaytını yeni sekmede aç"
        >
          <div class="slide-info">
            <span class="slide-title">${slide.title}</span>
            <span class="slide-format">.jpg</span>
          </div>
        </a>
        
        <button 
          type="button" 
          class="slide-preview-btn"
          aria-label="${slide.title} önizleme"
          data-src="${href}"
        >
          Önizle (lightbox)
        </button>
      </div>
    `;

    // Preview buton event listener
    const previewBtn = slideDiv.querySelector('.slide-preview-btn');
    previewBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const src = previewBtn.getAttribute('data-src');
      console.log('🔥 Lightbox açılıyor:', src);
      if (window.lightbox) {
        window.lightbox.show(src);
      } else {
        console.warn('Lightbox not available');
      }
    });

    return slideDiv;
  }
}

// Slides manager'ı başlat
console.log('🔥 Slides script yüklendi');
new SlidesManager();

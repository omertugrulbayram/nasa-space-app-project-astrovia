// Lightbox bileşeni - Vanilla JavaScript
class Lightbox {
  constructor() {
    this.dialog = null;
    this.currentSrc = null;
    this.init();
  }

  init() {
    console.log('🔥 Lightbox başlatılıyor...');
    
    // Dialog elementini oluştur
    this.dialog = document.createElement('dialog');
    this.dialog.className = 'lightbox-dialog';
    this.dialog.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Kapat">✕</button>
        <img class="lightbox-image" alt="Slide önizleme" loading="eager" decoding="async">
      </div>
    `;
    
    // CSS stillerini ekle
    this.addStyles();
    
    // Event listener'ları ekle
    this.setupEventListeners();
    
    // Body'ye ekle
    document.body.appendChild(this.dialog);
    
    console.log('🔥 Lightbox hazır!');
  }

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .lightbox-dialog {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        border: none;
        padding: 0;
        margin: 0;
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        background: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
      }

      .lightbox-close {
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(0, 0, 0, 0.6);
        color: white;
        border: none;
        border-radius: 4px;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 16px;
        z-index: 10;
        transition: background 0.2s;
      }

      .lightbox-close:hover {
        background: rgba(0, 0, 0, 0.8);
      }

      .lightbox-image {
        max-width: 100%;
        max-height: 85vh;
        width: auto;
        height: auto;
        display: block;
        object-fit: contain;
      }

      .lightbox-dialog::backdrop {
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(2px);
      }
    `;
    document.head.appendChild(style);
  }

  setupEventListeners() {
    // Kapat butonu
    this.dialog.querySelector('.lightbox-close').addEventListener('click', () => {
      this.close();
    });

    // ESC tuşu
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.dialog.open) {
        this.close();
      }
    });

    // Overlay tıklama
    this.dialog.addEventListener('click', (e) => {
      if (e.target === this.dialog) {
        this.close();
      }
    });
  }

  show(src) {
    this.currentSrc = src;
    const img = this.dialog.querySelector('.lightbox-image');
    img.src = src;
    this.dialog.showModal();
  }

  close() {
    this.dialog.close();
    this.currentSrc = null;
  }

  destroy() {
    if (this.dialog && this.dialog.parentNode) {
      this.dialog.parentNode.removeChild(this.dialog);
    }
  }
}

// Global lightbox instance
window.lightbox = new Lightbox();

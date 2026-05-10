import createElement from '../../assets/lib/create-element.js';

// export default class Carousel {
//   constructor(slides) {
//     this.slides = slides;
//     this.elem = this.render();
//   }
//
//   render() {
//     return createElement(`
//       <div class="carousel">
//
//         <div class="carousel__arrow carousel__arrow_right">
//           <img src="/assets/images/icons/angle-icon.svg" alt="icon">
//         </div>
//         <div class="carousel__arrow carousel__arrow_left">
//           <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
//         </div>
//
//         <div class="carousel__inner">
//         </div>
//       </div>
//     `);
//   }
//
//   carouselSlides() {
//     let slideMarkup = this.slides.map(slide => {
//       return createElement(`
//         <div class="carousel__slide" data-id="penang-shrimp">
//           <img src="/assets/images/carousel/penang_shrimp.png" class="carousel__img" alt="slide">
//           <div class="carousel__caption">
//             <span class="carousel__price">€16.00</span>
//             <div class="carousel__title">Penang shrimp</div>
//             <button type="button" class="carousel__button">
//               <img src="/assets/images/icons/plus-icon.svg" alt="icon">
//             </button>
//           </div>
//         </div>
//       `);
//     });
//   }
// }

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0;
    this.elem = this.render();

    this.carouselInner = this.elem.querySelector('.carousel__inner');
    this.arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    this.arrowRight = this.elem.querySelector('.carousel__arrow_right');

    this.initCarousel();
    this.initProductAdd();
  }

  render() {
    const slidesMarkup = this.slides.map((slide) => `
      <div class="carousel__slide" data-id="${slide.id}">
        <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${slide.price.toFixed(2)}</span>
          <div class="carousel__title">${slide.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
    `).join('');

    return createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner">
          ${slidesMarkup}
        </div>
      </div>
    `);
  }

  initCarousel() {
    this.updateArrows();

    this.arrowRight.addEventListener('click', () => {
      this.currentSlide += 1;
      this.updatePosition();
      this.updateArrows();
    });

    this.arrowLeft.addEventListener('click', () => {
      this.currentSlide -= 1;
      this.updatePosition();
      this.updateArrows();
    });
  }

  updatePosition() {
    const slideWidth = this.elem.offsetWidth;
    const offset = slideWidth * this.currentSlide;

    this.carouselInner.style.transform = `translateX(-${offset}px)`;
  }

  updateArrows() {
    this.arrowLeft.style.display = this.currentSlide === 0 ? 'none' : '';
    this.arrowRight.style.display = this.currentSlide === this.slides.length - 1 ? 'none' : '';
  }

  initProductAdd() {
    this.elem.addEventListener('click', (event) => {
      const button = event.target.closest('.carousel__button');

      if (!button) {
        return;
      }

      const slide = button.closest('.carousel__slide');

      this.elem.dispatchEvent(new CustomEvent('product-add', {
        detail: slide.dataset.id,
        bubbles: true
      }));
    });
  }
}

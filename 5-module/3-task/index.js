function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselInnerWidth = carouselInner.offsetWidth;
  const carouselSlides = document.querySelectorAll('.carousel__slide');

  const btnPrev = document.querySelector('.carousel__arrow_left');
  const btnNext = document.querySelector('.carousel__arrow_right');

  let currentTranslateX = 0;
  let currentSlideIndex = 0;

  if (currentSlideIndex === 0) {
    btnPrev.style.display = 'none';
  }

  function carouselSliderSwipe () {
    carouselInner.style.transform = `translateX(${currentTranslateX}px)`;
  }

  function hiddenCarouselButtonsPrev() {
    if (currentSlideIndex === 0) {
      btnPrev.style.display = 'none';

    } else if (currentSlideIndex === carouselSlides.length - 2) {
      btnNext.style.display = 'flex';
    }
  }

  function hiddenCarouselButtonsNext() {
    btnPrev.style.display = 'flex';

    if (currentSlideIndex === carouselSlides.length - 1) {
      btnNext.style.display = 'none';
    }
  }

  btnPrev.addEventListener('click', () => {
    currentTranslateX += carouselInnerWidth;
    carouselSliderSwipe();
    currentSlideIndex--;
    hiddenCarouselButtonsPrev();
  });

  btnNext.addEventListener('click', () => {
    currentTranslateX -= carouselInnerWidth;
    carouselSliderSwipe();
    currentSlideIndex++;
    hiddenCarouselButtonsNext();
  });
}

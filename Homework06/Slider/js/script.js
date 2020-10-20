'use strict'
/**
 * @method _init - инициализирует слайдеры и управление ими
 * @method setButtonLeft - устанавливает левую стрелку
 * @method setButtonRight - устанавливает правую стрелку
 * @method showImage - показывает слайдер
 * @class Slider 
 */
class Slider {
  constructor() {
    this.divSlider = document.querySelector('.slider');
    this.buttonLeft = document.createElement('button');
    this.buttonRight = document.createElement('button');
    this.slides = [];
    this.currentIndex = 0;
    this._init();
  }

  _init() {
    this.setButtonLeft();
    this.setButtonRight();
    this.showImage();
  }

  setButtonLeft() {
    this.buttonLeft.classList.add('arrow_left');
    this.divSlider.appendChild(this.buttonLeft);
  }

  setButtonRight() {
    this.buttonRight.classList.add('arrow_right');
    this.divSlider.appendChild(this.buttonRight);
  }

  showImage() {
    this.slides = document.querySelectorAll('.slider_item');
    this.slides[this.currentIndex].classList.remove('hidden-slide');
    this.buttonLeft.addEventListener('click', event => this.showEarlyImages()
    )

    this.buttonRight.addEventListener('click', event => this.showNextImages()
    )
  }

  showEarlyImages() {
    this.slides.forEach(function (slider) {
      if (slider.classList.contains('animate__fadeInRight') || slider.classList.contains('animate__fadeInLeft')) {
        slider.classList.remove('animate__fadeInLeft', 'animate__fadeInRight');
      }

      if (!slider.classList.contains('hidden-slide')) {
        slider.classList.add('hidden-slide');
      }
    })

    if (this.currentIndex == 0) {
      this.currentIndex = this.slides.length - 1;

    } else {
      this.currentIndex--;

    }
    this.slides[this.currentIndex].classList.remove('hidden-slide');
    this.slides[this.currentIndex].classList.add('animate__fadeInRight');
  }


  showNextImages() {
    this.slides.forEach(function (slider) {
      if (slider.classList.contains('animate__fadeInRight') || slider.classList.contains('animate__fadeInLeft'))  {
        slider.classList.remove('animate__fadeInLeft', 'animate__fadeInRight');
      }

      if (!slider.classList.contains('hidden-slide')) {
        slider.classList.add('hidden-slide');
      }
    })

    if (this.currentIndex == this.slides.length - 1) {
      this.currentIndex = 0;

    } else {
      this.currentIndex++;

    }
    this.slides[this.currentIndex].classList.remove('hidden-slide');
    this.slides[this.currentIndex].classList.add('animate__fadeInLeft');
  }

  

}

let slider = new Slider();
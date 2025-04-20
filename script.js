const menuOpenButton = document.querySelector('#menu-open-button')
const menuCloseButton = document.querySelector('#menu-close-button')

menuOpenButton.addEventListener('click', () => {
  //Toggle mobile menu visibility//
  document.body.classList.toggle('show-mobile-menu')
})

//close menu when the closed button is clicked
menuCloseButton.addEventListener('click', () => menuOpenButton.click())

/*Initialize Swiper styling*/
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive Breakpoints
  breakpoints: {
    0: {
      slidesPerview: 1,
    },

    768: {
      slidesPerview: 2,
    },

    1024: {
      slidesPerview: 3,
    },
  },
})
//whatsapp floating

window.addEventListener('scroll', function () {
  const whatsappIcon = document.querySelector('.whatsapp-float')
  if (window.scrollY > 500) {
    whatsappIcon.classList.add('show')
  } else {
    whatsappIcon.classList.remove('show')
  }
})

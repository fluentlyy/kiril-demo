/* function handleMediaChange() {
  if (window.innerWidth <= 885) {
  } else {
  }
}

handleMediaChange();

window.addEventListener("resize", handleMediaChange); */

let swiper = new Swiper(".mySwiper", {
  initialSlide: Number(localStorage.getItem("currentSlide") || 0),
  spaceBetween: 20,
  slidesPerView: "auto",

  on: {
    slideChange: function () {
      localStorage.setItem("currentSlide", this.activeIndex);
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  breakpoints: {
    1420: {
      centeredSlides: false,
    },
    730: {
      centeredSlides: true,
    },
    320: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

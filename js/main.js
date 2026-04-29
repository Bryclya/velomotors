//burger

(function () {
  document.addEventListener("click", burgerInit);

  function burgerInit(e) {
    const burgerIcon = e.target.closest(".burger-icon");
    const burgerNavLink = e.target.closest(".nav__link");

    if (!burgerIcon && !burgerNavLink) {
      if (document.body.classList.contains("body--opened-menu") && !e.target.closest(".nav")) {
        document.body.classList.remove("body--opened-menu");
      }
      return;
    }

    e.preventDefault();

    if (!document.body.classList.contains("body--opened-menu")) {
      document.body.classList.add("body--opened-menu");
    } else {
      document.body.classList.remove("body--opened-menu");
    }
  }
})();


//swiper-hero

const swiper = new Swiper(".hero-slider", {
  direction: "horizontal",
  loop: true,
  speed: 2500,
  // centerInsufficientSlides: true,
  pagination: {
    el: ".hero-pagination",
    type: "bullets",
  },
  slidesPerView: 1,
  spaceBetween: 0,

  autoplay: {
    delay: 6000,
  },
});

//swiper-about

new Swiper(".about-slider", {
  loop: true,
  navigation: {
    nextEl: ".about-button-next",
    prevEl: ".about-button-prev",
  },
});

//swiper-brands

new Swiper(".brands-slider", {
  direction: "horizontal",
  loop: true,
  speed: 2500,
  slidesPerView: 5,
  autoplay: {
    delay: 10,
  },
  allowTouchMove: false,
  simulateTouch: false,
  resistanceRatio: 0.85,
  longSwipesRatio: 0.1,
  shortSwipes: true,

  threshold: 5,

  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.8,
    momentumVelocityRatio: 0.8,
  },
});

//swiper-achievements

new Swiper(".achievements-slider", {
  direction: "horizontal",
  loop: true,
  speed: 6500,
  slidesPerView: 5.6,
  autoplay: {
    delay: 50,
  },
  spaceBetween: 20,

  breakpoints: {
    200: {
      spaceBetween: 2,
    },
    320: {
      spaceBetween: 5,
    },
    480: {
      spaceBetween: 10,
    },
    640: {
      spaceBetween: 20,
    },
  },
});

//tabs

const tabControls = document.querySelector(".products-wrapper");

tabControls.addEventListener("click", toggleTab);

function toggleTab(e) {
  const tabControl = e.target.closest(".products-tab-link");
  if (!tabControls) return;
  e.preventDefault();
  if (tabControls.classList.contains("products-tab-link--active")) return;

  const tabContentID = tabControl.getAttribute("href");
  const tabContent = document.querySelector(tabContentID);
  const activeControl = document.querySelector(".products-tab-link--active");
  const activeContent = document.querySelector(".products-tab-content--show");

  if (activeControl) {
    activeControl.classList.remove("products-tab-link--active");
  }
  if (activeContent) {
    activeContent.classList.remove("products-tab-content--show");
  }

  activeControl.classList.remove("products-tab-link--active");
  activeContent.classList.remove("products-tab-content--show");

  tabControl.classList.add("products-tab-link--active");
  tabContent.classList.add("products-tab-content--show");
}

//products-swiper-velo

new Swiper(".products-swiper-velo", {
  direction: "horizontal",
  speed: 2500,
  slidesPerView: 3.5,
  spaceBetween: 100,
  navigation: {
    nextEl: ".products-button-next-velo",
    prevEl: ".products-button-prev-velo",
  },

  breakpoints: {
    200: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 50,
    },
    800: {
      spaceBetween: 70,
    },
  },
});

//products-swiper-electrovel

new Swiper(".products-swiper-electrovel", {
  direction: "horizontal",
  speed: 2500,
  slidesPerView: 3.5,
  spaceBetween: 100,
  navigation: {
    nextEl: ".products-button-next-electrovel",
    prevEl: ".products-button-prev-electrovel",
  },

  breakpoints: {
    200: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 50,
    },
    800: {
      spaceBetween: 70,
    },
  },
});

//products-swiper-samokat

new Swiper(".products-swiper-samokat", {
  direction: "horizontal",
  speed: 2500,
  slidesPerView: 3.5,
  spaceBetween: 100,
  navigation: {
    nextEl: ".products-button-next-samokat",
    prevEl: ".products-button-prev-samokat",
  },

  breakpoints: {
    200: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 50,
    },
    800: {
      spaceBetween: 70,
    },
  },
});

//products-swiper-scooter

new Swiper(".products-swiper-scooter", {
  direction: "horizontal",
  speed: 2500,
  slidesPerView: 3.5,
  spaceBetween: 100,
  navigation: {
    nextEl: ".products-button-next-scooter",
    prevEl: ".products-button-prev-scooter",
  },

  breakpoints: {
    200: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 50,
    },
    800: {
      spaceBetween: 70,
    },
  },
});

//products-swiper-tricycle

new Swiper(".products-swiper-tricycle", {
  direction: "horizontal",
  speed: 2500,
  slidesPerView: 3.5,
  spaceBetween: 100,
  navigation: {
    nextEl: ".products-button-next-tricycle",
    prevEl: ".products-button-prev-tricycle",
  },

  breakpoints: {
    200: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 50,
    },
    800: {
      spaceBetween: 70,
    },
  },
});

//products-swiper-toys

new Swiper(".products-swiper-toys", {
  direction: "horizontal",
  speed: 2500,
  slidesPerView: 3.5,
  spaceBetween: 100,
  navigation: {
    nextEl: ".products-button-next-toys",
    prevEl: ".products-button-prev-toys",
  },

  breakpoints: {
    200: {
      spaceBetween: 40,
    },
    480: {
      spaceBetween: 50,
    },
    800: {
      spaceBetween: 70,
    },
  },
});

//tabs servise

const tabControlsServise = document.querySelector(".servise-wrapper");

tabControlsServise.addEventListener("click", toggleTab2);

function toggleTab2(e) {
  const tabControl = e.target.closest(".servise-item");

  if (!tabControls) return;
  if (tabControls.classList.contains("servise-item--active")) return;

  const activeControl = document.querySelector(".servise-item--active");

  if (activeControl) {
    activeControl.classList.remove("servise-item--active");
  }

  tabControl.classList.add("servise-item--active");
}

//toggle text servise

const lists = document.querySelectorAll(".servise-item-ulist");

lists.forEach((list) => {
  list.addEventListener("click", handleTabClick);
});

function handleTabClick(e) {
  const link = e.target.closest(".servise-item-link");
  if (!link) return;

  e.preventDefault();

  const item = e.target.closest(".servise-item");
  if (!item) return;

  const desc = item.querySelector(".servise-desc-paragraph");
  const price = item.querySelector(".servise-desc-price");

  if (!desc || !price) return;

  desc.textContent = link.dataset.desc;
  price.textContent = link.dataset.price;

  item.querySelectorAll(".servise-item-link").forEach((el) => {
    el.classList.remove("active");
  });

  link.classList.add("active");
}

//swiper-delivery

new Swiper(".swiper-delivery", {
  direction: "vertical",
  mousewheel: true,
  slidesPerView: 7,
  spaceBetween: 10,
  navigation: {
    nextEl: ".delivery-button-next",
    prevEl: ".delivery-button-prev",
  },
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.8,
    momentumVelocityRatio: 0.8,
  },
});

//toggle-delivery

const tabControlsDelivery = document.querySelector(".swiper-delivery");

tabControlsDelivery.addEventListener("click", toggleTab3);

function toggleTab3(e) {
  const tabControl = e.target.closest(".delivery-slide");

  // Проверяем, что клик был по элементу .delivery-slide
  if (!tabControl) return;

  // Проверяем, не является ли элемент уже активным
  if (tabControl.classList.contains("delivery-slide--active")) return;

  // Убираем класс у текущего активного элемента
  const activeControl = document.querySelector(".delivery-slide--active");
  if (activeControl) {
    activeControl.classList.remove("delivery-slide--active");
  }

  // Добавляем класс новому активному элементу
  tabControl.classList.add("delivery-slide--active");

  // Обновляем цену
  const price = document.querySelector(".delivery-map-price-num");
  if (price && tabControl.dataset.deliveryprice) {
    price.textContent = tabControl.dataset.deliveryprice;
  }
}

//accordion FAQ

const accordionLists = document.querySelectorAll(".accordion-list");

accordionLists.forEach((el) => {
  el.addEventListener("click", (e) => {
    const accordionControl = e.target.closest(".accordion-list__control");
    if (!accordionControl) return;
    e.preventDefault();

    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    document
      .querySelectorAll(".accordion-list__item--opened")
      .forEach((openItem) => {
        if (openItem !== accordionItem) {
          openItem.classList.remove("accordion-list__item--opened");
          const content = openItem.querySelector(".accordion-list__content");
          if (content) {
            content.style.maxHeight = null;
          }
        }
      });

    accordionItem.classList.toggle("accordion-list__item--opened");

    if (accordionItem.classList.contains("accordion-list__item--opened")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    } else {
      accordionContent.style.maxHeight = null;
    }
  });
});

//modal

const btn = document.querySelector(".about-gallery-modal");
const close = document.querySelector(".modal__cancel");
const modal = document.querySelector(".modal");
const body = document.body;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.add("body--opened-modal");
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.remove("body--opened-modal");
});

modal.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    (e.target && e.target.classList.contains("modal")) ||
    e.target.classList.contains("modal__cancel")
  ) {
    body.classList.remove("body--opened-modal");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && body.classList.contains("body--opened-modal")) {
    body.classList.remove("body--opened-modal");
  }
});

//modal 2

const btn2 = document.querySelector(".testimonials-button-link");
const close2 = document.querySelector(".modal__cancel2");
const modal2 = document.querySelector(".modal2");

btn2.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.add("body--opened-modal2");
});

close2.addEventListener("click", (e) => {
  e.preventDefault();
  body.classList.remove("body--opened-modal2");
});

modal2.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    (e.target && e.target.classList.contains("modal2")) ||
    e.target.classList.contains("modal__cancel2")
  ) {
    body.classList.remove("body--opened-modal2");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && body.classList.contains("body--opened-modal2")) {
    body.classList.remove("body--opened-modal2");
  }
});

class CommentRating {
  constructor() {
    this.currentRating = 0;
    this.stars = document.querySelectorAll(".star");
    this.ratingValue = document.getElementById("current-rating");
    this.init();
  }

  init() {
    // Обработчики для наведения курсора
    this.stars.forEach((star) => {
      star.addEventListener("mouseover", () =>
        this.highlightStars(parseInt(star.dataset.value)),
      );
      star.addEventListener("mouseout", () => this.resetHighlight());
      star.addEventListener("click", () =>
        this.setRating(parseInt(star.dataset.value)),
      );
    });
  }

  // Подсветка звёзд при наведении
  highlightStars(rating) {
    this.stars.forEach((star, index) => {
      if (index < rating) {
        star.style.color = "#FF0004";
      } else {
        star.style.color = "#333";
      }
    });
  }

  // Сброс подсветки
  resetHighlight() {
    this.stars.forEach((star, index) => {
      if (index < this.currentRating) {
        star.style.color = "#FF0004";
      } else {
        star.style.color = "#333";
      }
    });
  }

  // Установка оценки
  setRating(rating) {
    this.currentRating = rating;
    this.ratingValue.textContent = rating;

    // Обновляем классы для активных звёзд
    this.stars.forEach((star, index) => {
      if (index < rating) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });

    // Сохраняем оценку (можно отправить на сервер)
    this.saveRating(rating);
  }

  // Сохранение оценки (заглушка для отправки на сервер)
  saveRating(rating) {
    console.log(`Оценка сохранена: ${rating}/5`);
    // Здесь можно добавить AJAX-запрос для сохранения на сервере
  }
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  new CommentRating();
});





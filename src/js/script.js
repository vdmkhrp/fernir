document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    let scrollHeigh = window.scrollY;

    let navbar = document.querySelector(".header");

    if (scrollHeigh > 0 && !navbar.classList.contains("navbar-scroll")) {
      navbar.classList.add("navbar-scroll");
    } else if (
      scrollHeigh === 0 &&
      navbar.classList.contains("navbar-scroll")
    ) {
      navbar.classList.remove("navbar-scroll");
    }
  });

  // Это чтобы после отправки формы, появился thk-overlay
  const contactForm = document.querySelector("#contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      const thkOverlay = document.querySelector(".thk-overlay");

      if (!thkOverlay) {
        return;
      }

      event.preventDefault();
      thkOverlay.classList.add("thk-overlay--active");
    });
  }

  // бургер меню
  const burgerBtn = document.querySelector(".burger-button");
  const headerMenu = document.querySelector(".header__menu");

  function closeMenu() {
    burgerBtn.classList.remove("burger-button--active");
    headerMenu.classList.remove("header__menu--active");
  }

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger-button--active");
    headerMenu.classList.toggle("header__menu--active");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1179) {
      closeMenu();
    }
  });

  //details component
  const detailsElements = document.querySelectorAll(".main-details");

  detailsElements.forEach((details) => {
    details.addEventListener("toggle", () => {
      if (details.open) {
        details.classList.add("main-details--open");
      } else {
        details.classList.remove("main-details--open");
      }
    });
  });
});

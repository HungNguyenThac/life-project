const menu = document.querySelector(".header__menu");

menu.addEventListener("click", handleClickToggleMenu);

function handleClickToggleMenu() {
  const toggleMenu = document.querySelector(".toggle__menuList");
  const menuCircle = document.querySelector(".page1__menu-circle");
  const backgroundCircle = document.querySelector(
    ".container__background-circle"
  );
  const headerMenu = document.querySelector(".header__menu");

  toggleMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  menuCircle.classList.toggle("active");
  backgroundCircle.classList.toggle("active");
}

document
  .querySelector(".footer__logo")
  .addEventListener("click", handleClickLogoToTop);
function handleClickLogoToTop() {
  document.documentElement.scrollTop = 0;
}



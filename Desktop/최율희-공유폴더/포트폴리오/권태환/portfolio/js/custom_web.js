$(function () {
  /* 햄버거 메뉴 */
  const navToggle = document.querySelector("ul.nav_move li i");
  const menu = document.querySelector("#menu.menu");
  const overlay = document.querySelector(".overlay");
  const menuClose = document.querySelector("#menu.menu ul>li.close i");

  navToggle.addEventListener("click", function() {
    menu.classList.toggle("show");
    overlay.classList.toggle("show");
  });

  menuClose.addEventListener("click", function() {
    menu.classList.remove("show");
    overlay.classList.remove("show");
  });
});
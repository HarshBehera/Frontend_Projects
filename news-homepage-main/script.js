const navbar = document.querySelector("nav");
const container = document.querySelector(".container");
const logo_id = document.querySelector(".logo");
const attributes = document.querySelector(".attribution");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");

openMenu.addEventListener("click", () => {
    console.log("open working");
    console.log(logo_id)
  navbar.classList.add("navbar-items");
  container.style.filter="brightness(50%)";
  logo_id.style.filter="brightness(50%)";
  attributes.style.filter="brightness(50%)";
});

closeMenu.addEventListener("click", () => {
    console.log("close working");

  navbar.classList.remove("navbar-items");
  container.style.filter="brightness(100%)";
  logo_id.style.filter="brightness(100%)";
  attributes.style.filter="brightness(100%)";
});
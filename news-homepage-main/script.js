const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu-button");
const closeMenu = document.getElementById("menu-close");

openMenu.addEventListener("click", () => {
    console.log("open working");
  navbar.classList.add("navbar-items");
});

closeMenu.addEventListener("click", () => {
    console.log("close working");

  navbar.classList.remove("navbar-items");
});
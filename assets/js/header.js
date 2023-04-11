const menu = document.querySelector(".menu ul");
const menuBar = document.querySelector(".menu-bar");
const menuClose = document.querySelector(".menu-close");
const navbar = document.querySelector(".navbar");

const mobileMenuToggle = () => {
  menu.classList.toggle("menu-show");

  //   Button Toggle
  if (menu.classList.contains("menu-show")) {
    menuBar.style.display = "none";
    menuClose.style.display = "block";
    navbar.style.borderRadius = "30px 30px 0px 0px";
  } else {
    menuBar.style.display = "block";
    menuClose.style.display = "none";
    navbar.style.borderRadius = "40px";
  }
};

// Dropdown Menu Toggle
const dropdownBtn = document.querySelectorAll(".dropdownBtn");
const dropdownMenu = document.getElementsByClassName("dropdown-menu");

for (let x = 0; x < dropdownBtn.length; x++) {
  dropdownBtn[x].addEventListener("click", () => {
    dropdownMenu[x].classList.toggle("dropdownMenu-show");
  });
}

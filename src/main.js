import "./style.css";

document.querySelector("#nav-btn").addEventListener("click", () => {
  const navigation = document.querySelector("#navigation");
  const menuImg = document.querySelector("#mobile-menu-img");
  navigation.classList.toggle("translate-x-0");
  if (navigation.classList.contains("translate-x-0")) {
    menuImg.src = "src/images/icon-close.svg";
  } else {
    menuImg.src = "src/images/icon-hamburger.svg";
  }
});

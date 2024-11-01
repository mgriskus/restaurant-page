import "./style.css";
import displayHome from "./home";
import displayAbout from "./about";
import displayMenu from "./menu"

let homeButton = document.querySelector(".home-button");
let menuButtonHeader = document.querySelector(".menu-button-header");
let aboutButton = document.querySelector(".about-button");

displayHome();

homeButton.addEventListener("click", displayHome);
menuButtonHeader.addEventListener("click", displayMenu);
aboutButton.addEventListener("click", displayAbout);
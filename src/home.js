import burgerImage from "./img/burger.jpg";
import displayMenu from "./menu";

export default function displayHome() {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let description = document.createElement("div");
    description.className = "description";
    content.append(description);
    let header = document.createElement("h1");
    header.append(document.createTextNode("True Burgers"));
    description.append(header);
    let paragraph = document.createElement("p");
    paragraph.append(document.createTextNode("Producing the highest quality burgers from 100% natural ingredients!"));
    description.append(paragraph);
    let menuButton = document.createElement("button");
    menuButton.className = "menu-button-home";
    menuButton.append(document.createTextNode("Menu"));
    description.append(menuButton);
    let image = document.createElement("img");
    image.className += "burger-image";
    image.alt = "Burger";
    image.src = burgerImage;
    content.append(image);

    menuButton.addEventListener("click", displayMenu);
}
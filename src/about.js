export default function displayAbout() {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let p = document.createElement("p");
    p.textContent = "You can contact us at fakeemail@fakeemail.com";
    content.append(p);
}
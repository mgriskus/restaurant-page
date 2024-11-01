export default function displayMenu() {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    let table = document.createElement("table");

    let descriptiveRow = document.createElement("tr");
    let itemTh = document.createElement("th");
    itemTh.textContent = "Item";
    let priceTh = document.createElement("th");
    priceTh.textContent = "Price";
    descriptiveRow.append(itemTh, priceTh);

    let burgerRow = document.createElement("tr");
    let burgerTd = document.createElement("td");
    burgerTd.textContent = "Burger";
    let burgerPriceTd = document.createElement("td");
    burgerPriceTd.textContent = "$4";
    burgerRow.append(burgerTd, burgerPriceTd);

    let friesRow = document.createElement("tr");
    let friesTd = document.createElement("td");
    friesTd.textContent = "Fries";
    let friesPriceTd = document.createElement("td");
    friesPriceTd.textContent = "$2";
    friesRow.append(friesTd, friesPriceTd);

    let juiceRow = document.createElement("tr");
    let juiceTd = document.createElement("td");
    juiceTd.textContent = "Juie";
    let juicePriceTd = document.createElement("td");
    juicePriceTd.textContent = "$2";
    juiceRow.append(juiceTd, juicePriceTd);

    table.append(descriptiveRow, burgerRow, friesRow, juiceRow);

    content.append(table);
}
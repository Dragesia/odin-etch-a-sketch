const container = document.querySelector("#container");

const upButton = document.querySelector(".triangle-up");
const downButton = document.querySelector(".triangle-down");
const size = document.querySelector("#size");
const colorPicker = document.querySelector("#color-picker");
const randomColor = document.querySelector("#random-color");
const grayer = document.querySelector("#grayer");

let divs = 1;

const div = document.createElement("div");
div.classList.add("divClass");
container.appendChild(div);

let currentColor = "black";
colorPicker.addEventListener("mouseout", () => {
    currentColor = colorPicker.value;
})

div.addEventListener("mouseover", () => {
    div.style.backgroundColor = currentColor;
});

upButton.addEventListener("click", () => {
    if(divs == 100) {
        return;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    divs++;
    size.textContent = divs;
    for(let i=0; i<divs*divs; i++) {
        container.appendChild(div.cloneNode(true));
    }
});

downButton.addEventListener("click", () => {
    if(divs == 1) {
        return;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    divs--;
    size.textContent = divs;
    for(let i=0; i<divs*divs; i++) {
        container.appendChild(div.cloneNode(true));
    }
});
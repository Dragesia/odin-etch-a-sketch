const container = document.querySelector("#container");

const upButton = document.querySelector(".triangle-up");
const downButton = document.querySelector(".triangle-down");
const size = document.querySelector("#size");
const colorPicker = document.querySelector("#color-picker");
const randomColor = document.querySelector("#random-color");
const grayer = document.querySelector("#grayer");

let divs = 1;

upButton.addEventListener("click", () => {
    if (divs == 50) {
        return;
    }
    divs++;
    size.textContent = divs;
});

downButton.addEventListener("click", () => {
    if (divs == 1) {
        return;
    }
    divs--;
    size.textContent = divs;
});
const container = document.querySelector("#container");

const upButton = document.querySelector(".triangle-up");
const downButton = document.querySelector(".triangle-down");
const size = document.querySelector("#size");
const colorPicker = document.querySelector("#color-picker");
const randomColor = document.querySelector("#random-color");
const grayer = document.querySelector("#grayer");

let divs = 1;

const div = document.createElement("div");
container.appendChild(div);

let childDivs = document.querySelectorAll("#container div");

let currentColor = "black";

colorPicker.addEventListener("mouseout", () => {
    currentColor = colorPicker.value;
});

childDivs[0].addEventListener("mouseover", () => {
    childDivs[0].style.backgroundColor = currentColor;
});

upButton.addEventListener("click", () => {
    if (divs == 50) {
        return;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    divs++;
    size.textContent = divs;
    for(let i=0; i<divs*divs; i++) {
        container.appendChild(div.cloneNode());
    }
    childDivs = document.querySelectorAll("#container div");
    childDivs.forEach(ch => {
        ch.style.backgroundColor = "white";
        ch.addEventListener("mouseover", () => {
            ch.style.backgroundColor = currentColor;
        });
    });
});

downButton.addEventListener("click", () => {
    if (divs == 1) {
        return;
    }
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    divs--;
    size.textContent = divs;
    for(let i=0; i<divs*divs; i++) {
        container.appendChild(div.cloneNode());
    }
    childDivs = document.querySelectorAll("#container div");
    childDivs.forEach(ch => {
        ch.style.backgroundColor = "white";
        ch.addEventListener("mouseover", () => {
            ch.style.backgroundColor = currentColor;
        });
    });
});
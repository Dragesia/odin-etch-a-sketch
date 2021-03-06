const container = document.querySelector("#container");

const upButton = document.querySelector(".triangle-up");
const downButton = document.querySelector(".triangle-down");
const size = document.querySelector("#size");
const colorPicker = document.querySelector("#color-picker");
const randomColor = document.querySelector("#random-color");
const grayer = document.querySelector("#grayer");
const clear = document.querySelector("#clear");

let divs = 1;

const div = document.createElement("div");
container.appendChild(div);

let childDivs = document.querySelectorAll("#container div");

let currentColor = "black";

colorPicker.addEventListener("mouseout", () => {
    currentColor = colorPicker.value;
    childDivs = document.querySelectorAll("#container div");
    childDivs.forEach(ch => {
        ch.addEventListener("mouseout", () => {
            currentColor = colorPicker.value;
        });
    });
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
    container.style.gridTemplateRows = `repeat(${divs}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${divs}, 1fr)`;
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
    container.style.gridTemplateRows = `repeat(${divs}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${divs}, 1fr)`;
});

clear.addEventListener("click", () => {
    childDivs = document.querySelectorAll("#container div");
    childDivs.forEach(ch => {
        ch.style.backgroundColor = "white";
    });
});

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

randomColor.addEventListener("click", () => {
    currentColor = generateRandomColor();
    childDivs = document.querySelectorAll("#container div");
    childDivs.forEach(ch => {
        ch.addEventListener("mouseout", () => {
            currentColor = generateRandomColor();
        });
    });
});


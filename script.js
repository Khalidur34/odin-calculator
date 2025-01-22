const calcGrid = document.querySelector(".calc");
const display = document.querySelector(".display");

let num = document.createElement("p");
num.classList.add("num");
num.textContent = '0';
display.appendChild(num);
for(i = 0 ; i < 20 ; i++) {
    let button = document.createElement("button");
    button.classList.add("button")
    button.textContent = '0';
    calcGrid.appendChild(button);
}
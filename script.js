const displayNum = document.querySelector(".num");
const clearButton = document.querySelector(".clear");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

let number = 0;
let operator = "";

numButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        update(displayNum.textContent + button.textContent);
    })
});


operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        number = parseInt(displayNum.textContent);
        operator = button.textContent;
        displayNum.textContent = '';
    })
})

clearButton.addEventListener('click', function() {
    clear();
});


equalButton.addEventListener('click', function() {
    if(operator === '') update(number);
    if(displayNum.textContent != '' || displayNum.textContent != null) {
        console.log(number + " " + parseInt(displayNum.textContent) + " " + operator);    
        let result = operation(number, parseInt(displayNum.textContent), operator);
        number = result;
        operator = '';
        update(result);
    }
});

function division(numerator, denominator) {
    return numerator/denominator;
}

function multiplication(multiplicand, multiplier) {
    return multiplicand * multiplier;
}

function addition(numOne, numTwo) {
    return numOne + numTwo;
}

function subtraction(numOne, numTwo) {
    return numOne - numTwo;
}

function operation (numOne, numTwo, operator) {
    switch(operator){
        case "+":
            return addition(number, numTwo);
        case "-":
            return subtraction(number, numTwo);
        case "*":
            return multiplication(number, numTwo);
        case "/":
            return division(number, numTwo);
    }
    
}

function clear() {
    numberOne = "";
    operator = "";
    displayNum.textContent = "";
}

function update(displayNumber) {
    console.log(displayNumber);
    displayNum.textContent = displayNumber;
}

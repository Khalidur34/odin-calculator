const displayNum = document.querySelector(".num");
const clearButton = document.querySelector(".clear");
const numButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const decimalButton = document.querySelector(".decimal");
const backButton = document.querySelector(".backspace");

let number = 0;
let operator = "";

numButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        update(displayNum.textContent + button.textContent);
    })
});

decimalButton.addEventListener('click', function(){
    update(displayNum.textContent + decimalButton.textContent);
});

backButton.addEventListener('click', function(){
    update(displayNum.textContent.substring(0, displayNum.textContent.length - 1));
})


operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if(operator != "") {
            let result = operation(number, parseFloat(displayNum.textContent), operator);
            number = result;
            operator = '';
            update(result);
        }
        else {
            tempNum = parseFloat(displayNum.textContent);
            if(isNaN(tempNum)) {
                number = 0;
            }
            else {
                number = tempNum;
            }
            console.log(number);
            operator = button.textContent;
            displayNum.textContent = '';
        }
    })
})

clearButton.addEventListener('click', function() {
    clear();
});


equalButton.addEventListener('click', function() {
    if(operator === '') update(number);
    else if(displayNum.textContent != '' || displayNum.textContent != null) {    
        console.log(number + " " + parseFloat(displayNum.textContent) + " " + operator)
        let result = operation(number, parseFloat(displayNum.textContent), operator);
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
    displayNum.textContent = displayNumber;
}

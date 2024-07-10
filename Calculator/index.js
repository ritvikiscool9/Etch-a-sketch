let numOne;
let numTwo;
let operation;

const buttons = document.querySelectorAll("button");



function addition(numOne,numTwo){
    return numOne + numTwo;
}

function subtraction(numOne,numTwo){
    return numOne - numTwo;
}

function multiplication(numOne,numTwo){
    return numOne * numTwo;
}

function division(numOne,numTwo){
    return numOne/numTwo;
}

function operate(numOne,numTwo,operation){
    switch(operation){
        case "+":
            addition(numOne,numTwo);
            break;
        case "-":
            subtraction(numOne,numTwo);
            break;
        case "x":
            multiplication(numOne,numTwo);
            break;
        case "÷":
            division(numOne,numTwo);
            break;
    }
}

buttons.forEach((button)=> {
    button.addEventListener("click", () => {
        console.log("button was pressed");
    })
}); 
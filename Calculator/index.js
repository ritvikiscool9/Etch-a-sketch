let numOne = 0;
let numTwo = 0;
let operation = null;
let display = " ";
let result = null;

const buttons = document.querySelectorAll("button");
const displayElement = document.querySelector("#display");
const clear = document.querySelector("#clear");

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

function operate(operation,numOne,numTwo){
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
        default:
            return 0;
    }
}

function fillDisplay(numOne){
    const nums = document.createElement("h1");
    nums.textContent = numOne;
    displayElement.appendChild(nums);
    displayElement.style.display = 'flex'
    displayElement.style.flexDirection = 'row';
    displayElement.style.justifyContent = 'flex-end';
}



buttons.forEach((button)=> {
    button.addEventListener("click", (event) => {
        const buttonText = event.target.textContent;
        
        if(/^\d+$/.test(buttonText)){
            if(!operation){
                numOne += buttonText;
                fillDisplay(numOne);
            }else{
                numTwo += buttonText;
                fillDisplay(numTwo);
            }
        }else if(["+", "-", "x", "÷"].includes(buttonText)){
            operation = buttonText;
            if(firstNumber && secondNumber){
                result = operate(operation,numOne,numTwo)
                numOne = result.toString();
                secondNumber = '';
                fillDisplay(result);
            }
        }else if(buttonText === "=") {
            if (firstNumber && secondNumber && operation) {
                result = operate(operation, firstNumber, secondNumber);
                fillDisplay(result);
                // Reset for next calculation
                firstNumber = result.toString();
                secondNumber = '';
                operation = null;
            }
        }
    });
}); 


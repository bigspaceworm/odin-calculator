let firstNumber = NaN;
let secondNumber = NaN;
let operator;
let displayNumber = "";
let newNumberOnScreen = false;

// DOM Elements
const calculatorScreen = document.querySelector(".screen");
// Buttons
const bttnsNumbers = document.querySelector(".numbers").querySelectorAll("button");
const bttnClear = document.querySelector("#clear");
const bttnsOperations = document.querySelector(".operations").querySelectorAll("button");

function add(a, b) {
	return a + b;
}

function substract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	if(b != 0){
		return a / b;
	} else {
		return NaN;
	}
}

function operate(operator, a, b) {
	switch(operator){
		case "add":
			return add(a, b);
		case "substract":
			return substract(a, b);
		case "multiply":
			return multiply(a, b);
		case "divide":
			return divide(a, b);
	}
}

// Buttons EventListener
// Get Number pressed
bttnsNumbers.forEach((button) => {
	button.addEventListener("click", () => {
		if(!newNumberOnScreen){
			// Check if already has a dot
			if(button.textContent === "."){
				if(!(displayNumber.includes(".")) ) {
				displayNumber += button.textContent;
				}
			} else {
				displayNumber += button.textContent;
			}
		} else {
			displayNumber = button.textContent;
			newNumberOnScreen = false;
		}
		calculatorScreen.textContent = displayNumber;
	});
});

// Clear Screen
bttnClear.addEventListener("click", () =>{
	displayNumber = "";
	firstNumber = NaN;
	secondNumber = NaN;
	calculatorScreen.textContent = "0";
});

bttnsOperations.forEach((button) => {
	button.addEventListener("click", () => {
		if(button.id != "calculate") {
			if(Number.isNaN(firstNumber)){
				firstNumber = Number(calculatorScreen.textContent);
				operator = button.id;
			} else {
				if(operator != "calculate"){
					secondNumber = Number(calculatorScreen.textContent);
					firstNumber = operate(operator, firstNumber, secondNumber);
					operator = button.id;
				} else {
					firstNumber = Number(calculatorScreen.textContent);
					operator = button.id;
				}
			}
		} else {
			if(!(Number.isNaN(firstNumber))){
				secondNumber = Number(calculatorScreen.textContent);
				firstNumber = operate(operator, firstNumber, secondNumber);
				calculatorScreen.textContent = firstNumber;
				operator = button.id;
			}
		}
		newNumberOnScreen = true;
	});
});

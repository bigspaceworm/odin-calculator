let firstNumber;
let secondNumber;
let operator;
let displayNumber;

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
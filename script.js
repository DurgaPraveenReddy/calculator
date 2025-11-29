const operand1 = 0;
const operand2 = 0;
const operator = '';

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function operate(operand1, operator, operand2) {
    let result = 0;
    if (operator === '+') {
        result = addition(operand1, operand2);
    }
    else if (operator === '-') {
        result = subtraction(operand1, operand2);
    }
    else if (operator === '*') {
        result = multiplication(operand1, operand2);
    }
    else {
        result = division(operand1, operand2);
    }
    return result;
}

console.log(operate(3, '/', 2));
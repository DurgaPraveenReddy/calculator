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


const display = document.querySelector('#display');
const decimalBtn = document.querySelector('#decimal');
const delBtn = document.querySelector('#del');
let opString = '';
let shouldResetDisplay = false; // Flag to handle post-calculation input

// Centralized Input Handler
function handleInput(input) {
    if (input === '=' || input === 'Enter') {
        // storing the calculation result for further operations on the result
        opString = handleopString(opString);
        shouldResetDisplay = true; // Set flag
        decimalBtn.disabled = false; // Reset for next calculation
        delBtn.disabled = true; // to prevent incorrect calculations
    } 
    else if (input === 'clr' || input === 'Escape') {
        opString = '';
        display.textContent = '';
        decimalBtn.disabled = false;
        delBtn.disabled = false;
    }
    else if (input === 'del' || input === 'Backspace') {
        // If we are deleting a decimal, re-enable the button
        if (opString.endsWith('.')) decimalBtn.disabled = false;
        opString = opString.slice(0, -1);
        display.textContent = display.textContent.slice(0, -1);
    } // If an operator is clicked, re-enable decimal for the next number
    else if (['+', '-', '*', '/'].includes(input)) {
        decimalBtn.disabled = false;
        shouldResetDisplay = false;
        opString += input;
        display.textContent += input;
        delBtn.disabled = false;
    }
    else if (input === '.') {
        if (!decimalBtn.disabled) {
            opString += input;
            display.textContent += input;
            decimalBtn.disabled = true;
            shouldResetDisplay = false;
        }
    }
    else if (!isNaN(input) && input !== ' ') {
        // If a number is clicked after a calculation, start fresh
        if (shouldResetDisplay) {
            opString = '';
            display.textContent = '';
            // To prevent reset when making the result a decimal value for a new calculation
            shouldResetDisplay = false;
        }
        opString += input;
        display.textContent += input;
        delBtn.disabled = false;
    }
}

// Click Event Listener
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Use the text content of the button (e.g., "5", "+", "del")
        handleInput(e.target.textContent);
    });
});

// Keyboard Event Listener
window.addEventListener('keydown', (e) => {
    // Preventing default browser behavior for certain keys (like / or Enter)
    if (['/', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
    }
    handleInput(e.key);
});

// processing the operation string
function handleopString(opString) {
    const tokens = opString.split(/([-+*\/])/).filter(Boolean);
    const valueStack = [];
    const operatorStack = [];
    
    // Defining precedence: * and / are evaluated before + and -
    const precedence = { '*': 2, '/': 2, '+': 1, '-': 1 };

    tokens.forEach(token => {
        if (!isNaN(token)) {
            // Push numbers directly to the value stack
            valueStack.push(parseFloat(token));
        } else {
            // While the operator on top of stack has >= precedence, calculate
            while (
                operatorStack.length > 0 &&
                precedence[operatorStack[operatorStack.length - 1]] >= precedence[token]
            ) {
                const op = operatorStack.pop();
                const num2 = valueStack.pop();
                const num1 = valueStack.pop();
                valueStack.push(operate(num1, op, num2));
            }
            operatorStack.push(token);
        }
    });

    // Processing remaining operators in the stack
    while (operatorStack.length > 0) {
        const op = operatorStack.pop();
        const num2 = valueStack.pop();
        const num1 = valueStack.pop();
        valueStack.push(operate(num1, op, num2));
    }

    // Final result is the only item left in the valueStack
    const finalResult = valueStack.pop();
    display.textContent = finalResult;
    return finalResult;
}

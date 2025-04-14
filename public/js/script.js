let counterValue = 0;

// DOM manipulation
function createCounter() {
    const container = document.createElement('div');
    container.className = 'counter-container';

    const counterDisplay = document.createElement('div');
    counterDisplay.id = 'counter-display';
    counterDisplay.className = 'counter-display';
    counterDisplay.textContent = counterValue;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const decrementButton = createButton('-', decrementCounter);
    const incrementButton = createButton('+', incrementCounter);

    buttonContainer.appendChild(decrementButton);
    buttonContainer.appendChild(incrementButton);
    container.appendChild(counterDisplay);
    container.appendChild(buttonContainer);

    document.body.appendChild(container);
}

function createButton(text, clickHandler) {
    const button = document.createElement('button');
    button.className = 'counter-button';
    button.textContent = text;
    button.addEventListener('click', clickHandler);
    return button;
}

// Logic functions
function updateDisplay() {
    const counterDisplay = document.getElementById('counter-display');
    counterDisplay.textContent = counterValue;
}

function incrementCounter() {
    counterValue++;
    updateDisplay();
}

function decrementCounter() {
    counterValue--;
    updateDisplay();
}

document.addEventListener('DOMContentLoaded', createCounter);
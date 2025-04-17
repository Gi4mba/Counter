let counterValue = 0;

// DOM manipulation
function createCounter() {

    const main = document.createElement('main');
    main.className = 'main';
    const body = document.querySelector('body');
    const footer = document.querySelector('footer');
    body.insertBefore(main, footer);

    const container = document.createElement('div');
    container.className = 'counter-container';

    const counterDisplay = document.createElement('div');
    counterDisplay.id = 'counter-display';
    counterDisplay.className = 'counter-display';
    counterDisplay.textContent = counterValue;

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const decrementButton = createButton('-', 'decrement');
    const incrementButton = createButton('+', 'increment');
    const resetButton = createButton ('🔄', 'reset')

    buttonContainer.appendChild(decrementButton);
    buttonContainer.appendChild(incrementButton);
    buttonContainer.appendChild(resetButton);

    buttonContainer.addEventListener('click', function (e) {
        const target = e.target;
        if (!target.matches ('button.counter-button')) return;

        const action = target.dataset.action;

        switch (action) {
            case 'increment':
                incrementCounter();
                break;
            case 'decrement':
                decrementCounter();
                break;
            case 'reset':
                counterValue = 0;
                updateDisplay();
                break;
            default:
                console.warn(`Unknown Action for: ${action}`);
        }
    });

    container.appendChild(counterDisplay);
    container.appendChild(buttonContainer);
    main.appendChild(container);
}

function createButton(text, action) {
    const button = document.createElement('button');
    button.className = 'counter-button';
    button.textContent = text;
    button.setAttribute('data-action', action);
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
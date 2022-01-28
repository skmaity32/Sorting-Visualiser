const sizeRange = document.querySelector('#arr_size');
const speedRange = document.querySelector('#algo_speed');
const genArrBtn = document.querySelector('#arr_generate');
const container = document.querySelector('#array_container');
const algoButtons = document.querySelectorAll('.algos button');
const sizeLabel = document.querySelector('#size_label');
const speedLabel = document.querySelector('#speed_label');

let arraySize = sizeRange.value;
let divHeights = [];
let divs = [];
let marginSize;

let speed = 1000;
let delayTime = 10000 / speed;
let currDelay = 0;

const initialColor = 'darkslateblue';
const misplaceColor = 'red';
const compareColor = 'yellow';
const sortedColor = 'green';

const enableButtons = function() {
    setTimeout(() => {
        for (let button of algoButtons) {
            button.disabled = false;
        }
        sizeRange.disabled = false;
        speedRange.disabled = false;
    }, currDelay)
}

const disableButtons = function() {
    for (let button of algoButtons) {
        button.disabled = true;
    }
    sizeRange.disabled = true;
    speedRange.disabled = true;
}

window.onload = updateArraySize();
genArrBtn.addEventListener('click', generateArray);
sizeRange.addEventListener('input', updateArraySize);

function generateArray() {
    currDelay = 0;
    enableButtons();
    container.innerHTML = "";
    for(let i = 0; i < arraySize; i++) {
        divHeights[i] = Math.floor(Math.random() * 0.8 * (sizeRange.max - sizeRange.min) ) + 10;
        divs[i] = document.createElement("div");
        container.append(divs[i]);
        marginSize = 0.1;
        divs[i].style=`margin: ${marginSize}%; background-color: ${initialColor}; width: ${(100/arraySize - (2*marginSize))}%; height: ${(divHeights[i])}%;`;
    }
}

function updateArraySize() {
    arraySize = sizeRange.value;
    sizeLabel.textContent = `Array Size : ${arraySize}`;
    generateArray();
}

for (let button of algoButtons) {
    button.addEventListener('click', runAlgo);
}

function runAlgo() {
    disableButtons();

    switch(this.innerText) {
        case 'Bubble Sort':
            bubbleSort();
            break;
        case 'Selection Sort':
            selectionSort();
            break;
        case 'Insertion Sort':
            insertionSort();
            break;
        case 'Merge Sort':
            mergeSort();
            break;
        case 'Quick Sort':
            quickSort();
            break;
        case 'Heap Sort':
            heapSort();
            break;
    }
}
const sizeRange = document.querySelector('#arr_size');
const speedRange = document.querySelector('#algo_speed');
const genArrBtn = document.querySelector('#arr_generate');
const container = document.querySelector('#array_container');
const algoButtons = document.querySelectorAll('.algos button');

let arraySize = sizeRange.value;
let divHeights = [];
let divs = [];
let marginSize;

window.onload = updateArraySize();
genArrBtn.addEventListener('click', generateArray);
sizeRange.addEventListener('input', updateArraySize);

function generateArray() {
    container.innerHTML = "";
    for(let i = 0; i < arraySize; i++) {
        divHeights[i] = Math.floor(Math.random() * 0.6 * (sizeRange.max - sizeRange.min) ) + 10;
        divs[i] = document.createElement("div");
        container.append(divs[i]);
        marginSize = 0.1;
        divs[i].style=" margin:" + marginSize + "%; background-color: darkslateblue; width:" + (100/arraySize - (2*marginSize)) + "%; height:" + (divHeights[i]) + "%;";
    }
}

function updateArraySize() {
    arraySize = sizeRange.value;
    generateArray();
}

for (let button of algoButtons) {
    button.addEventListener('click', runAlgo);
}

function runAlgo() {
    switch(this.innerText) {
        case 'Bubble Sort':
            bubbleSort();
            break;
        case 'Selection Sort':
            // bubbleSort();
            break;
        case 'Insertion Sort':
            // bubbleSort();
            break;
        case 'Merge Sort':
            // bubbleSort();
            break;
        
    }
}
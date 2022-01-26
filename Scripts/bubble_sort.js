const bubbleSort = function() {
    currDelay = 0;
    // console.log('bubble sort started!');

    for (let i = 0; i < arraySize - 1; i++) {
        let j = 0;
        for (; j < arraySize - 1 - i; j++) {
            divVisualise(divs[j], divs[j+1], 'yellow');         // compare visualise
            
            if (divHeights[j] > divHeights[j+1]) {
                divVisualise(divs[j], divs[j+1], 'red');        // misplace visualise

                // swapping two divHeights
                [divHeights[j], divHeights[j+1]] = [divHeights[j+1], divHeights[j]];

                heightUpdate(divs[j], divHeights[j], divs[j+1], divHeights[j+1]);   // height update
            }
            
            divVisualise(divs[j], divs[j+1], 'darkslateblue');  // reset color
        }
        divVisualise(divs[j], divs[j], 'green');                // color update
    }
    divVisualise(divs[0], divs[0], 'green');
}
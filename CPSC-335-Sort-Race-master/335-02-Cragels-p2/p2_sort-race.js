
// Project 2: Sort-Race
// Authors: Junji Bressan, Armon Rahimi, Cindy Quach
// Email: Junjib@csu.fullerton.edu
//        cindyquach@csu.fullerton.edu
//        armon16@csu.fullerton.edu

// Description:
// A sorting race between Mergesort, Quicksort, and Gold's Poresort

// Global Variable declaration
var g_canvas = { cell_size: 20, wid: 36, hgt: 40 }; // JS Global var, w canvas size info.
var inputArr;
var mergeArr = []; var quickArr = []; var goldArr = [];
var finishQuick; var quickInterval;

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas(width, height);  // Make a P5 canvas.
    draw_grid(20, 50, "white");
    selectInput();
    console.log(inputArr);
    for (let i = 0; i < inputArr.length; i++) {
        mergeArr[i] = inputArr[i];
        quickArr[i] = inputArr[i];
        goldArr[i] = inputArr[i];
    }
    quickObj = new Quicksort(quickArr);
}

function draw() {
    // RaceManager() called here it will run through each algorithm one at a time.
    // When all Algorithms are finished (i.e. return 0) then we are done.
    raceManager();
}

function selectInput() {
    let inputVal = Math.floor(Math.random() * 24) + 1;

    if (inputVal == 1) {
        inputArr = ['0', '5', 'A', '6', '2', '7', 'B', '2', 'B', '6', '0', '3'];
    }
    else if (inputVal == 2) {
        inputArr = ['0', '6', '5', '6', '6', '7', '1', '0', '4', '0', 'B', 'A'];
    }
    else if (inputVal == 3) {
        inputArr = ['0', '6', '8', '4', 'B', '8', '9', '3', '5', '7', '5', '4'];
    }
    else if (inputVal == 4) {
        inputArr = ['0', '7', '9', 'A', '2', '1', '8', '3', '4', 'B', '6', '5'];
    }
    else if (inputVal == 5) {
        inputArr = ['0', '9', '4', '8', '7', '8', '6', '2', '2', '6', '1', '6'];
    }
    else if (inputVal == 6) {
        inputArr = ['1', 'A', 'B', '3', '4', '7', '9', '0', '5', '2', '8', '6'];
    }
    else if (inputVal == 7) {
        inputArr = ['2', '8', '6', '1', '0', '3', '4', '2', '7', '8', '5', '9'];
    }
    else if (inputVal == 8) {
        inputArr = ['3', '0', '5', '3', '0', '4', '7', '8', '6', 'A', '2', '1'];
    }
    else if (inputVal == 9) {
        inputArr = ['3', '2', '8', '4', '7', '6', '5', '1', '8', '9', '8', '5'];
    }
    else if (inputVal == 10) {
        inputArr = ['3', '4', '2', '7', '5', '6', '1', '8', '9', '0', 'B', 'A'];
    }
    else if (inputVal == 11) {
        inputArr = ['4', '1', 'B', '3', '8', '2', '6', '2', '1', '9', '8', '5'];
    }
    else if (inputVal == 12) {
        inputArr = ['4', '6', '3', '7', '9', '0', '1', '5', 'B', '8', 'A', '2'];
    }
    else if (inputVal == 13) {
        inputArr = ['5', '3', '5', '1', 'A', '3', '3', 'A', '9', '9', 'B', 'B'];
    }
    else if (inputVal == 14) {
        inputArr = ['5', '9', '3', '4', '7', '9', '0', '8', '8', 'A', '1', '5'];
    }
    else if (inputVal == 15) {
        inputArr = ['5', '9', 'A', '2', '2', 'A', '4', '4', 'A', '3', '9', '4'];
    }
    else if (inputVal == 16) {
        inputArr = ['7', '1', '9', '2', '0', '6', '8', 'B', '3', '4', '5', 'A'];
    }
    else if (inputVal == 17) {
        inputArr = ['7', '2', 'B', '3', 'A', '5', '4', '1', '6', '9', '8', '0'];
    }
    else if (inputVal == 18) {
        inputArr = ['8', '1', 'A', '3', '9', '2', '0', '1', '0', 'A', '9', '1'];
    }
    else if (inputVal == 19) {
        inputArr = ['8', '9', '4', '0', 'A', '5', '2', 'B', '1', '6', '3', '7'];
    }
    else if (inputVal == 20) {
        inputArr = ['A', '6', '9', '3', '5', '4', '2', 'B', '7', '0', '1', '8'];
    }
    else if (inputVal == 21) {
        inputArr = ['A', '9', '4', '2', '5', 'B', '1', '6', '8', '7', '3', '0'];
    }
    else if (inputVal == 22) {
        inputArr = ['A', 'A', '0', '2', '3', 'B', '7', '2', '3', '5', '6', '4'];
    }
    else if (inputVal == 23) {
        inputArr = ['B', '4', '0', '1', '6', '3', '8', 'A', '2', '9', '7', '5'];
    }
    else if (inputVal == 24) {
        inputArr = ['B', '5', '8', '6', '1', '7', '9', '2', 'A', '4', '0', '3'];
    }
}

function Golds() {
    var sort;
    sort = 1;
    //the array we want to sort
    while (sort == 1) {
        //even pairing
        if (goldArr[0] > goldArr[1]) {
            x = goldArr[0];
            y = goldArr[1];
            goldArr[0] = y;
            goldArr[1] = x;
        }
        if (goldArr[2] > goldArr[3]) {
            x = goldArr[2];
            y = goldArr[3];
            goldArr[2] = y;
            goldArr[3] = x;
        }
        if (array[4] > array[5]) {
            x = goldArr[4];
            y = goldArr[5];
            goldArr[4] = y;
            goldArr[5] = x;
        }
        if (goldArr[6] > goldArr[7]) {
            x = goldArr[6];
            y = goldArr[7];
            goldArr[6] = y;
            goldArr[7] = x;
        }
        if (goldArr[8] > goldArr[9]) {
            x = goldArr[8];
            y = goldArr[9];
            goldArr[8] = y;
            goldArr[9] = x;
        }
        if (goldArr[10] > goldArr[11]) {
            x = goldArr[10];
            y = goldArr[11];
            goldArr[10] = y;
            goldArr[11] = x;
        }
        //odd pairing
        if (goldArr[1] > goldArr[2]) {
            x = goldArr[1];
            y = goldArr[2];
            goldArr[1] = y;
            goldArr[2] = x;
        }
        if (goldArr[3] > goldArr[4]) {
            x = goldArr[3];
            y = goldArr[4];
            goldArr[3] = y;
            goldArr[4] = x;
        }
        if (goldArr[5] > goldArr[6]) {
            x = goldArr[5];
            y = goldArr[6];
            goldArr[5] = y;
            goldArr[6] = x;
        }
        if (goldArr[7] > goldArr[8]) {
            x = goldArr[7];
            y = Golds[8];
            goldArr[7] = y;
            goldArr[8] = x;
        }
        if (goldArr[9] > goldArr[10]) {
            x = goldArr[9];
            y = goldArr[10];
            goldArr[9] = y;
            goldArr[10] = x;
        }
    }
    for (var i = 0; i < 12; i += 2)
        if (goldArr[i] > goldArr[i + 1])
            var count = 0;
    count++;
    if (count == 12) {
        sort = 0;
        return 0;
    }
}

function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }
    // Get the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // Dividing the array into left and right
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}

function merge(leftArr, rightArr) {
    var i = 0;
    var j = 0;
    var results = [];

    while (i < leftArr.length || j < rightArr.length) {
        if (i === leftArr.length) {
            // j is the only index leftArr
            results.push(rightArr[j]);
            j++;
        }
        else if (j === rightArr.length || leftArr[i] <= rightArr[j]) {
            results.push(leftArr[i]);
            i++;

        } else {
            results.push(rightArr[j]);
            j++;
        }
    }
    return results
        .concat(leftArr.slice(i))
        .concat(rightArr.slice(j));
}


function quickStep() {
    finishQuick = quickObj.step();

    if (finishQuick == 1) {
        //insert code to update the grid on the HTML page
    }

    if (finishQuick == 0) {
        clearInterval(quickInterval);
    }
}

function raceManager() {
    //Insert functions concerning Mergesort here



    //Insert functions concerning Quicksort here
    quickInterval = setInterval(quickStep, 200);



    //Insert functions concerning Gold's Poresort here



}
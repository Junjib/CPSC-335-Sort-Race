// Project 2: Sort-Race
// Authors: Junji Bressan, Armon Rahimi, Cindy Quach
// Email: Junjib@csu.fullerton.edu
//        cindyquach@csu.fullerton.edu
//        armon16@csu.fullerton.edu

// Description:
// A sorting race between Mergesort, Quicksort, and Gold's Poresort

var g_canvas = { cell_size:20, wid:36, hgt:40 }; // JS Global var, w canvas size info.

function setup() // P5 Setup Fcn
{
    let sz = g_canvas.cell_size;
    let width = sz * g_canvas.wid;  // Our 'canvas' uses cells of given size, not 1x1 pixels.
    let height = sz * g_canvas.hgt;
    createCanvas( width, height );  // Make a P5 canvas.
    draw_grid( 20, 50, "white" );
}

function draw()
{
}

function Golds() {
    var sort;
    sort = 1;
    var array = ['4', '5', 'A', '6', '2', '7', 'B', '2', 'B', '6', '1', '4'];
    //the array we want to sort
    while (sort == 1) {
        //even pairing
        if (array[0] > array[1]) { 
            x = array[0];
            y = array[1];
            array[0] = y;
            array[1] = x;
        }
        if (array[2] > array[3]) {
            x = array[2];
            y = array[3];
            array[2] = y;
            array[3] = x;
        }
        if (array[4] > array[5]) {
            x = array[4];
            y = array[5];
            array[4] = y;
            array[5] = x;
        }
        if (array[6] > array[7]) {
            x = array[6];
            y = array[7];
            array[6] = y;
            array[7] = x;
        }
        if (array[8] > array[9]) {
            x = array[8];
            y = array[9];
            array[8] = y;
            array[9] = x;
        }
        if (array[10] > array[11]) {
            x = array[10];
            y = array[11];
            array[10] = y;
            array[11] = x;
        }
        //odd pairing
        if (array[1] > array[2]) {
            x = array[1];
            y = array[2];
            array[1] = y;
            array[2] = x;
        }
        if (array[3] > array[4]) {
            x = array[3];
            y = array[4];
            array[3] = y;
            array[4] = x;
        }
        if (array[5] > array[6]) {
            x = array[5];
            y = array[6];
            array[5] = y;
            array[6] = x;
        }
        if (array[7] > array[8]) {
            x = array[7];
            y = array[8];
            array[7] = y;
            array[8] = x;
        }
        if (array[9] > array[10]) {
            x = array[9];
            y = array[10];
            array[9] = y;
            array[10] = x;
        }
        for (var i = 0; i < 12; i+=2)
        if (array[i] > array[i + 1])
            var count = 0;
            count++;
        if (count == 12)
            sort = 1;
        return 0;
    }

    function mergeSort (unsortedArray) {
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

    function merge(leftArr,rightArr) 
    {
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

}
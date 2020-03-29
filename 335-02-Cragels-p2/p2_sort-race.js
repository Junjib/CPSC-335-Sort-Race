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
    int sort;
    sort = 0;
    //the array we want to sort
    char array[];
    while (sort == 0) {
        //even pairing
        if (array[0] < array[1]) { 
            x = array[0]
            y = array[1]
            array[0] = y
            array[1] = x
        }
        if (array[2] < array[3]) {
            x = array[2]
            y = array[3]
            array[2] = y
            array[3] = x
        }
        if (array[4] < array[5]) {
            x = array[4]
            y = array[5]
            array[4] = y
            array[5] = x
        }
        if (array[6] < array[7]) {
            x = array[6]
            y = array[7]
            array[6] = y
            array[7] = x
        }
        if (array[8] < array[9]) {
            x = array[8]
            y = array[9]
            array[8] = y
            array[9] = x
        }
        if (array[10] < array[11]) {
            x = array[10]
            y = array[11]
            array[10] = y
            array[11] = x
        }
        //odd pairing
        if (array[1] < array[2]) {
            x = array[1]
            y = array[2]
            array[1] = y
            array[2] = x
        }
        if (array[3] < array[4]) {
            x = array[3]
            y = array[4]
            array[3] = y
            array[4] = x
        }
        if (array[5] < array[6]) {
            x = array[5]
            y = array[6]
            array[5] = y
            array[6] = x
        }
        if (array[7] < array[8]) {
            x = array[7]
            y = array[8]
            array[7] = y
            array[8] = x
        }
        if (array[9] < array[10]) {
            x = array[9]
            y = array[10]
            array[9] = y
            array[10] = x
        }
        for (int i = 0; i < 12; i+=2)
        if (array[i] > array[i + 1])
            int count = 0;
            count++;
        if (count == 12)
            sort = 1;
        return 1;
    }
}
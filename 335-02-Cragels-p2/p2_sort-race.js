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

    char array[];

    if (array[0] < array[1])
        x = array[0]
    y = array[1]
    array[0] = y
    array[1] = x
    so on for the entire array for evens and odds

for (int i = 0; i < 16(length of array); i++
    if (array[i] > array[i + 1])
        int count = 0;
    count++;
    if (count == 16)
        done = 1;
    return 1;
}
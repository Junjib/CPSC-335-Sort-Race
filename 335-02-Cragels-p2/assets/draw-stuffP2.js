// Draw stuff, with P5  // CF p5js.org/reference
// Time-stamp: <2020-02-02 14:46:00 Chuck Siska>
// ------------------------------------------------------------

// =====================================================  draw_grid ====
// Draw a fancy grid with major & minor lines 
// & major row/col numbers.

var divLine = 11;
var newStroke = 'orange';
var count = 0;
function draw_grid( rminor, rmajor, rstroke ) 
{
    stroke(rstroke);
    let sz = g_canvas.cell_size;
    let width = g_canvas.wid*sz;
    let height = g_canvas.hgt*sz
    for ( var ix = 0; ix < width; ix += rminor )
    {
        let big_linep = (ix % rmajor == 0);
        let line_wgt = 1.5;
        if (big_linep)
        {
            strokeWeight( line_wgt );
        }
        if(count == 12 || count == 24)
        {
            stroke(newStroke);
        }
        else
        {
            stroke(rstroke);
        }
        line( ix, 0, ix, height );
        count++;
        //strokeWeight( 1.5 );
        //if ( ix % rmajor == 0 ) { text( ix, ix, 10 ); }
    }
    count = 0;
    stroke( rstroke );
    for ( var iy = 0; iy < height; iy += rminor )
    {
        let big_linep = (iy % rmajor == 0);
        let line_wgt = 1.5;
        if (big_linep)
        {
            strokeWeight( line_wgt );
        }
        line( 0, iy, width, iy );
        //strokeWeight( 1.5 );
        //if ( iy % rmajor == 0 ) { text( iy, 0, iy + 10 ); }
    }
}

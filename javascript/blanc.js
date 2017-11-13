'use strict';

const X = 4, Y = 4;


var board = new Array(X);
var printRow = "";

for (var i = 0; i < X; i++) {
  board[i] = new Array(Y);
}

// Set all grid values to 0
for(var x=0;x< X;x++)
{
    for(var y=0;y<Y;y++)
    {
        board[x][y] = 0;
    }
}


board[0][1] = 4;
board[1][2] = 3;

for(var x=0;x< X;x++)
{
    for(var y=0;y<Y;y++)
    {
        printRow += board[x][y];
    }
    console.log(printRow);
}

console.log(...board);



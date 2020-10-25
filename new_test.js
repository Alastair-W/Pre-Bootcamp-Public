var childHeight = 1
function displayIfChildIsAbleToRideTheRollerCoaster(childHeight) {
    if (childHeight > 52) {
        console.log("Get on that ride, kiddo!");
    }   else {
        console.log("Sorry kiddo. Maybe next year.");
    }
}

displayIfChildIsAbleToRideTheRollerCoaster(childHeight)

var x = 8;
var y = 10;

function getRndInteger(x, y) {
    return Math.floor(Math.random() * (y - x) ) + 1;
    
}

//console.log(getRndInteger(x,y));

var world = [];

var worldDict = {
    0: 'wall',
    1: 'blank',
    2: 'sushi',
    3: 'onigiri'
}
//console.log(Object.keys(worldDict).length);

var pointsDict = {
    0: 0,
    1: 0,
    2: 10,
    3: 5
}

function createWorld() {
    
    var max_rows = Math.floor(Math.random() * 10) + 5;
    var max_cols = Math.floor(Math.random() * 10) + 5;
    var data = [];
    for (var rows = 0; rows < max_rows; rows++) {
        world.push([]);
        for (var i = 0; i < max_cols; i++) {
            data = Math.floor(Math.random() * (Object.keys(worldDict).length));
            data[0] = 0;
            world[rows].push(data);
        }   
    
    }
var maxRowsIndex = max_rows -1;
for (var t = 0; t < max_cols;t++) {
    world[0][t] = 0; 
    world[maxRowsIndex][t] = 0;
}
var maxColsIndex = max_cols -1;
for (var u = 0; u < max_rows; u++) {
    world[u][0] = 0;
    world[u][maxColsIndex] = 0;
}


console.log("Rows: "+max_rows);
console.log("Cols: "+max_cols);
console.log(world);

}
//createWorld()



//test
var world = [
    [0,0,0,0],
    [0,0,1,0],
    [0,0,0,0],
    [0,2,1,0],
    [0,0,0,0]
];

//Checks any cell and, if less than one of the adjacent cells is not a wall it will replace one of the wall items with an accesible item like a sushi or space
//Need to loop through every cell in the randomnly generated map, except the borders, and run this logic
//Once the function is run it should write the new cell value/item to the map
//This code doesn't work!!!!

// for (var worldRow = 1; worldRow < world.length-1; worldRow++) {
    
//     var blockArray = [];
//     for (var worldCol = 1; worldCol < world[worldRow].length-1; worldCol++) {
//         var sum = 0;
//         blockArray.push(world[worldRow][worldCol]);
//         cellContact = [world[worldRow][worldCol-1], world[worldRow][worldCol+1], world[worldRow-1][worldCol], world[worldRow+1][worldCol]];
//         console.log(cellContact);
//         console.log(world[worldRow][worldCol]);
//         for (var b = 0; b < cellContact.length; b++) {
//             if (cellContact[b] == 0) {
//                 sum += 1;
//                 console.log(sum);
//                 if (sum == 3) {
//                     for (var num = 0; num < cellContact.length; num++) {
//                         counterNew = 0;
//                         if (cellContact[num] == 0 && counterNew == 2) { //LEFT OF CELL
//                             world[worldRow][worldCol-1] = Math.floor(Math.random() * (Object.keys(worldDict).length));
//                             counterNew += 1;
//                         }
//                         else if (cellContact[num] == 0 && counterNew == 2) { //RIGHT OF CELL
//                             world[worldRow][worldCol+1] = Math.floor(Math.random() * (Object.keys(worldDict).length));
//                             counterNew += 1;
//                         }
//                         else if (cellContact[num] == 0 && counterNew == 2) { //UP OF CELL
//                             world[worldRow-1][worldCol] = Math.floor(Math.random() * (Object.keys(worldDict).length));
//                             counterNew += 1;
//                         }
//                         else if (cellContact[num] == 0 && counterNew == 2) { //DOWN OF CELL
//                             world[worldRow+1][worldCol] = Math.floor(Math.random() * (Object.keys(worldDict).length));
//                             counterNew += 1;
//                         }
//                     }
//                 }        
//             }            
//         }
//     }
// }

//onsole.log(world);

var num = 0;
var interval = setInterval('count()', 1000);
function count() {
    if ( Math.random ( ) > .5 ) {
    num = "Woo!";
    }
    else {
    num = "Yay!";
    }
console.log(num);
setTimeout(num = "", 500);
}


// var speed = setInterval(ghostMove(), 1000);

//         function ghostMove() {
//             var moveScore = Math.floor(Math.random() * 3);
//             console.log(moveScore);
//             if (moveScore == 0 && world[ghostLocation.y][ghostLocation.x-1] != 0) { //LEFT
//                 ghostLocation.x--;
//             }
//             else if (moveScore == 1 && world[ghostLocation.y][ghostLocation.x+1] != 0) { //RIGHT
//                 ghostLocation.x--;
//             }
//             else if (moveScore == 2 && world[ghostLocation.y+1][ghostLocation.x] != 0) { //DOWN
//                 ghostLocation.x--;
//             }
//             else if (moveScore == 3 && world[ghostLocation.y-1][ghostLocation.x] != 0) { //UP
//                 ghostLocation.x--;
//             }
//             else {
//                 ghostMove()
//             }
//         }

// ghostMove()

// if (ghostLocation == ninjamanLocation) {
//     document.getElementById('gameOver').innerHTML = "GAME OVER";
//     break;
// }
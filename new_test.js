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

var ghostLocation = {
    x: 1,
    y: 1
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
createWorld()



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

// var myVar = setInterval(myTimer, 1000);

// var d = Math.floor(Math.random() * 3);
// function myTimer() {
//     d += 1;
//     if (d == 20) {
//         clearInterval(myVar)
//     }
//     else {
//     console.log(d);
//     }
// }

var ghostMoveOptions = {
    moveLeft: "x-1",
    moveRight: "x+1",
    moveDown: "y+1",
    moveUp: "y-1"
}

var randomIndex = 0;
var ghostMovement = 0;
console.log(ghostLocation.x-1);
console.log(ghostLocation.x+1);
console.log(ghostLocation.y+1);
console.log(ghostLocation.y-1);
function ghostDirection(ghostLocation) {
    var newArray = [ghostLocation.x-1, ghostLocation.x+1, ghostLocation.y+1, ghostLocation.y-1];
    for (var f in newArray; f < newArray.length; f++) {
    }

    
    if (ghostLocation.x+1 ==0 && ghostLocation.x-1 == 0 && ghostLocation.y+1 == 0) { //CAN ONLY GO UP
        randomIndex = 3;
    }
    else if (ghostLocation.x+1 ==0 && ghostLocation.x-1 == 0 && ghostLocation.y-1 == 0) { //CAN ONLY GO DOWN
        randomIndex = 2;
    }
    else if (ghostLocation.x-1 ==0 && ghostLocation.y-1 == 0 && ghostLocation.y+1 == 0) { //CAN ONLY GO RIGHT
        randomIndex = 1;
    }
    else if (ghostLocation.x+1 ==0 && ghostLocation.y-1 == 0 && ghostLocation.y+1 == 0) { //CAN ONLY GO LEFT
        randomIndex = 0;
    }
    else if (ghostLocation.x-1 == 0 && ghostLocation.y+1 == 0) { //CAN'T GO LEFT OR DOWN
        var notLeftOrDown = [1,3];
        randomIndex = Math.floor(Math.random() * notLeftOrDown.length);
    }
    else if (ghostLocation.x-1 == 0 && ghostLocation.y-1 == 0) { //CAN'T GO LEFT OR UP
        var notLeftOrUp = [1,2];
        randomIndex = Math.floor(Math.random() * notLeftOrUp.length);
    }
    else if (ghostLocation.x+1 == 0 && ghostLocation.y+1 == 0) { //CAN'T GO RIGHT OR DOWN
        var notRightOrDown = [0,3];
        randomIndex = Math.floor(Math.random() * notRightOrDown.length);
    }
    else if (ghostLocation.x+1 == 0 && ghostLocation.y-1 == 0) { //CAN'T GO RIGHT OR UP
        var notRightOrUp = [0,2];
        randomIndex = Math.floor(Math.random() * notRightOrUp.length);
    }
    else if (ghostLocation.x-1 == 0 && ghostLocation.x+1 == 0) { //CAN'T GO LEFT OR RIGHT
        var notLeftOrRight = [2,3];
        randomIndex = Math.floor(Math.random() * notLeftOrRight.length);
    }
    else if (ghostLocation.y+1 == 0 && ghostLocation.y-1 == 0) { //CAN'T GO DOWN OR UP
        var notDownOrUp = [0,1];
        randomIndex = Math.floor(Math.random() * notDownOrUp.length);
    }
    else if (ghostLocation.x-1 == 0) { //CAN'T GO LEFT
        var notLeft = [1,2,3];
        randomIndex = Math.floor(Math.random() * notLeft.length);
    }
    else if (ghostLocation.x+1 == 0) { //CAN'T GO RIGHT
        var notRight = [0,2,3];
        randomIndex = Math.floor(Math.random() * notRight.length);
    }
    else if (ghostLocation.y+1 == 0) { //CAN'T GO DOWN
        var notDown = [0,1,3];
        randomIndex = Math.floor(Math.random() * notDown.length);
    }
    else if (ghostLocation.y-1 == 0) { //CAN'T GO UP
        notUp = [0,1,2];
        randomIndex = Math.floor(Math.random() * notUp.length);
    }
    ghostMovement = Object.values(ghostMoveOptions)[randomIndex];
console.log(randomIndex);
}

function ghostStep() {
    if (randomIndex == 0) {
        ghostLocation.x-1;
    }
    else if (randomIndex == 1) {
        ghostLocation.x+1;
    }
    else if (randomIndex == 2) {
        ghostLocation.y+1;
    }
    else if (randomIndex == 3) {
        ghostLocation.y-1;
    }
console.log(ghostMovement);
console.log(ghostLocation);
}
ghostDirection()
ghostStep()


//console.log(ghostLocation);
// console.log(world[ghostLocation.x][ghostLocation.y]);
// var speed = setInterval(ghostMove, 1000);
// function ghostMove() {
//     if (ghostLocation.x-1 = 0) { //CAN'T GO LEFT
//             ghostLocation.x--;)
//     }
//     else if (world[ghostLocation.y][ghostLocation.x+1] != 0) { //GO RIGHT
//             ghostLocation.x--;
//     }
//     else if (world[ghostLocation.y+1][ghostLocation.x] != 0) { //GO DOWN
//             ghostLocation.x--;
//     }
//     else if (world[ghostLocation.y-1][ghostLocation.x] != 0) { //GO UP
//             ghostLocation.x--;
//     }
//     else if (ghostLocation.x == ninjamanLocation.x && ghostLocation.y == ninjamanLocation.y) {
//         clearInterval(speed);
//     }
// }
// ghostLocation()

// if (ghostLocation == ninjamanLocation) {
//     document.getElementById('gameOver').innerHTML = "GAME OVER";
//     break;
// }
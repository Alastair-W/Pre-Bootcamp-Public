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
            data = Math.floor(Math.random() * (Object.keys(worldDict).length -1));
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

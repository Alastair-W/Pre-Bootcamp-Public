// result will not be published in the terminal without changing return to console.log()

//Challenge 1: Write a function that returns an array with all the numbers from 1 to 255. You may use the push() function
// for this exercise.

function get_array() {
    var arr =[];
    for (var i = 1; i<256; i++) {
        arr.push(i);
    }
    return arr
}

// Challenge 2: Write a function that would get the sum of all the even numbers from 1 to 1000. You may use a modulus
// operator for this exercise.

function sum_even_numbers(){
    var sum = 0;
    for (var n = 0; n<=1000; n++){
        if (n % 2 === 0) {
            sum += n;
        }
    }
    return sum;
}

//Challenge 3: Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999)

function sum_odd_5000() {
    var sum = 0;
    for (var n = 1; n<=5000; n++){
        if (n % 2 === 1)
        sum += n;

    }
    return sum;
}

// Challenge 4: Write a function that returns the sum of all the values within an array.
// (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14)

function iterArr(arr) {
    var sum = 0;
    for (var i = 0; i<arr.length; i++) {
        sum += arr[i]

    }
    return sum;
}

//Challenge 5: Given an array with multiple values, write a function that returns the 
// maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
arr = [100,4,6,2,1]
function findMax(arr) {
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }    
    }
    return max;
}

//Challenge 6: Given an array with multiple values, write a function that returns the average of the values
// in the array. (e.g. for [1,3,5,7,20] average is 7.2)
arr = [1,3,5,7,20];
function findAvg(arr) {
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length
    return avg;
}

// Challenge 7: Write a function that would return an array of all 
// the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddNumbers() {
    var arr = [];
    for (var i = 0; i <= 50; i++) {
        if (i % 2 == 1) {
            arr.push(i)
        }
    }
    return arr;
}

// Challenge 8: Given value of Y, write a function that takes an array and returns the 
// number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, 
// your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
var arr = [1,3,5,7]
var Y = 3
function greaterY(arr, Y) {
    var new_arr = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            new_arr.push(arr[i]);
        }
    }
    var count = new_arr.length
    return count;
}

// Challenge 9: Given an array with multiple values, write a function that replaces
// each value in the array with the product of the original value multiplied by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
var arr = [1,5,10,-2]
function squareVal(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i]* arr[i];
    }
    return arr;
}

// Challenge 10: Given an array with multiple values, write a function that replaces 
// any negative numbers within the array with the value of 0. When the program is done 
// the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
var arr = [1,5,10,-2]
function noNeg(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

// Challenge 11: Given an array with multiple values, write a function that returns a new array
// that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
var arr = [1,5,10,-2]
function maxMinAvg(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i]
        }
        var sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max, min, avg]
    return arrnew;
}


// Challenge 12: Write a function that will swap the first and last values of any given array. 
// The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
var arr = [1,5,10,-2]
function swap(arr) {
    if (arr => 2) {
        var len = arr.length
        var last = arr[(len -1)]
        var arrnew = []
        arrnew[0] = last
        
        for (var i = 1; i < (len - 1); i++) {
            arrnew.push(arr[i])
        }

    }   else {
            "Array not long enough!"
        }
        
    var first = arr[0]
        arrnew.push(first)

    return arrnew;
}

// Challenge 13: Write a function that takes an array of numbers and replaces any negative values 
// within the array with the string 'Dojo'. 
// For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
var arr = [-1,-3,2]
function numToStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(numToStr(arr));
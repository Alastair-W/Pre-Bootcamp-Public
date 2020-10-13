//Assessment 1

for(var x =1; x < 6; x++) {
    console.log(x);
}

//x = 3
//add 1 to x and log it to console until x is no longer < 8
//Answer = 3,4,5

//Assessment 2

var msg = 'codingdojo';
for(var x = 8; x < msg.length + 3; x++) {
    console.log(x);
}

//x = 8
//msg.length = 10
//add 1 to x and log it to console until x is no longer < (msg.length + 2) = 12
//Answer  = 8, 9, 10, 11

//Assessment 3

var x = 10;
if(x == 10) {
    console.log(x);
}
else {
    console.log('hello');
}
//x = 10
//If x is equal to 10 return x to console otherwise return 'hello' to console
//Answer = 10

//Assessment 4

var msg = 'dojo';
if(msg == 'dojo') {
    console.log('coding'+msg);
}
else {
    console.log('ninja'+msg);
}
//msg = 'dojo'
//If msg = 'dojo' return 'coding' + msg to console otherwise return 'ninja' + msg to console
//Answer = codingdojo

//Assesment 5

for(var x = 14; x > 6; x--) {
    console.log(x);
    break;
}

//x = 18
//Subtract 1 from x and return x to console if x is greater than 4
//Break (stop) the for loop once x has been returned to console
//Answer = 20

//Assessment 6

var msg = 'hello!';
for(var x = 21; x > msg.length + 6; x--){
    console.log(x);
}

//msg = 'hello!'
//x = 22
//msg.length + 8 = 14
//Subtract 1 from x and retrun x to console up until x remains greater than 14
//Answer = 22, 21, 20, 19, 18, 17, 16, 15

//Assessment 7

var msg = 'codingdojo';
for(var x = 2; x < (msg.length - 2); x++) {
    if (msg.length == 6) {
        for (var i = 1; i < 3; i++) {
            console.log(i);
        }
    }
    else {
        for (var i = msg.length; i > (msg.length - 2); i--) {
            console.log(i);
        }
    }
}

//msg = 'codingdojo'
//x = 2
//msg.length = 10
//msg.length -1 = 9
//Add 1 to x and, if msg.length is equal to 2, set i as equal to 2 and add 1 to i up until i is less than 1.
//Otherwise, set i as equal to 10, subtract i by 1 and return i to the console up until i is still gretaer than 7
//Answer = 10, 9, 8

//Assessment 8
//Create a function that returns the sum of all odd numbers from 7 to 19.
function sum_odd(){
    var sum = 0;
    for (var i = 7; i <= 19; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    return sum; 
 }

 console.log(sum_odd());
// Function
const firstName = 'chidimma';
const lastName = 'adimekwe';
const age = 27;
let middleName = 'ursula';
let maidenName = 'emeh';


// declare the function
function consoleName() {
    console.log(firstName);
}
// call or invoke the function
consoleName();
// function syntax
function name(params) {
    
}
// parameters
function consoleParams(fName, lName, age) {
    console.log(`my name is ${fName} ${lName}, i am ${age} years old`);
}

consoleParams(firstName, lastName, age)

// return
function otherNames(ngozi, emeh) {
    return `my middle name is ngozi and my mothers maiden's name is emeh`;
}

console.log(otherNames('ngozi'));

function multiplyValues(num1, num2, num3) {
    return num1*num2*num3;
}
// 2 ways to call/invoke it
console.log(multiplyValues(5,5,5));
// or 
const answer = multiplyValues(5,5,5);
console.log(answer);
console.log(multiplyValues(12,5,5));
console.log(multiplyValues(5,5,35));
console.log(multiplyValues(11,5,5));
console.log(multiplyValues(5,20,5));
console.log(multiplyValues(5,10,5));

// scope - you cant access anything declared as a vairable outside a block
let surname = 'adis ababa';
let people = 'nigerians';
let worstPresident = 'tinubu';
function checkTest() { 
    const typeOfCan = 'fanta';
    console.log(`my surmane is ${surname} and i like ${typeOfCan}`)
}

checkTest();
// you can't access typeOfCan outside the function checkTest 

// function exercise 1
let welcome = 'Hello World';
function helloWorld() {
    console.log(welcome);
}
helloWorld();

// function exercise 2
function quadrupler(sum) {
    return sum*4
}
console.log(quadrupler(15));
console.log(quadrupler(20));
console.log(quadrupler(25));

// another way 
function something(sum1) {
    console.log(sum1*4);
}
something(15);
something(11);
something(25);

// function exercise 3
function welcome2(secondName, thirdName) {
    console.log(`Hello ${secondName} ${thirdName}, this is pam`)
}
welcome2('dunden', 'mifflin');

// another way, get used to using return
function theOffice(bestCouple, worstCouple) {
    return `${bestCouple.toUpperCase()} are my faves, obviosuly, while ${worstCouple.toLowerCase()} are the complete worst!`
}
console.log(theOffice('pam and jim', 'kelly and ryan'));

// function exercise 4
function temperatureConverter(fahrenheit){
    return celsius=(fahrenheit-32)* 5/9
}
console.log(temperatureConverter(12));
console.log(temperatureConverter(28));
console.log(temperatureConverter(89));

// function exercise 5

// function exercise 6
function calculator(a, b, c) {
    if (typeof a !== 'number') {
        console.log(`error, please input a number`)
    } if (typeof c !== 'number'){
        console.log(`error, please input a number`)
        } else {
            console.log('this is a number')
        }
        if (typeof b !== 'string') {
            console.log('error, input string')
        } else {
            console.log('this is a string')
        }
        
        }

calculator(67, '+', 45);

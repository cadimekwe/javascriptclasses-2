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

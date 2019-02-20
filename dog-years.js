//my age
const myAge = 25;
// early years
let earlyYears = 2;

//earlyYears = earlyYears * 10.5;
earlyYears *= 10.5;

//laterYears is the product of myAge minus 2 
let laterYears = myAge - 2;

// calculating the result of laterYears times 4
//laterYears = laterYears * 4;
laterYears *= 4; 


//printing the result for early years and later years
//console.log(`early years: ${earlyYears} | later years ${laterYears}`);

//added to calculate my age in dog years
let myAgeInDogYears = earlyYears + laterYears;
//testing..
//console.log(myAgeInDogYears);

//variable myName returning in all lower case letters
let myName = "LiZzA".toLowerCase();
//testing..
//console.log(myName);

//statement that displays my name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

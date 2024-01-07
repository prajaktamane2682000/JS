//Outputting text in console

console.log("Hello world");
//console.log is the function used to display the text:"Hello world" 


//concatenating two strings

let firstname = "Prajakta";
let lastname = "Mane";

console.log(firstname + " " + lastname);


//mathematical calculations

console.log(5);
let radius = 5;
console.log(Math.PI * radius * radius);

//Boolean expression

console.log(true);
console.log(5 > 19);

//Printing array

let arr = ["apple", "banana", "Orange"];
console.log(arr);

//loosely handled language

let a = 10;
console.log(a);

a = "prajakta";
console.log(a);

a = true;
console.log(a);


//Data types

//1. String

let name1 = "Prajakta Bhikaji Mane";

console.log(name1);

console.log(typeof name1);



//Number

let b = 10;

console.log(b);

let c = 10.67;
console.log(c);
console.log(typeof c);


//boolean

let me = true;
console.log(me);
console.log(typeof me);

// null
let address = null;
console.log(address);


//The variable stores the null value,indicating the abscence of value.
//It is commonly used to represent an intentionally empty or non-existent value.

//undefined

let PhoneNumber;
console.log(PhoneNumber);

//undefined means variable is declared but value is not assigned


//Array

let abc = ["apple", "banana", "Orange"];
console.log(abc);
//Array is an ordered collection of an elements


//object
//It is a collection of key value pairs
let person = {
    name: "Prajakta",
    age: 23,
    hobbies: ["eat", "sleep", "repeat"],
    address: null,
    isEmployee: true,


}

//Date

let currentDate = new Date();
console.log(currentDate);

//Big Int

let lgNumber = 1234523456622333445555666n;
console.log(typeof lgNumber);

// n is used to denote that is big int literal

//Arithmetical Operation

//Addition

let sum = 10 + 5;
console.log(sum);

//Substraction

let diff = 10 - 5;
console.log(diff);

//Multiplication

let prod = 10 * 5;
console.log(prod);

//division

let div = 10 / 5;
console.log(div);

//Modulo operator

let rem = 10 % 5;

console.log(rem);

//Increament

let n = 5;
n++;
console.log(n);

//Decreament
let m = 5;
m--;
console.log(m);

//Expoenential operation
let res = 3 ** 2;
console.log(res);

console.log(5 + 5);
console.log("5" + "5");
console.log(5 + "5");
console.log("5" + 5);
console.log(5 + (+"5"));

//unary operator

let num = +"5";
console.log(typeof num);

//+ operator converts string into number

let name2 = +"Praju";
console.log(name2); //NaN- Not a Number

//Unary negation operator

let num2 = 4;
let num3 = -num2;
console.log(num3);

//conditionals

//If condition

// let x=10;
// if(x>5){
//     console.log("X is grater than 5");
// }

//If else condition
let x = 10;
if (x > 15) {
    console.log("X is grater than 15");
}
else {
    console.log("X is smaller than 15");
}


//If else if else statement

let score = 85;
if (score >= 90) {
    console.log("Excellent");

}
else if (score >= 70) {
    console.log("Good");
}
else {
    console.log("Average");
}

//Ternary operator

let isRaining = true;
let weather = isRaining ? "Take an umbrella" : "Take a dhoop!";
console.log(weather);

//Switch statement

let day = 3;
let dayname;

switch (day) {
    case 1:
        dayname = "monday";
        break;



    case 2:
        dayname = "Tuesday";
        break;

    case 3:
        dayname = "wednesday";
        break;
    case 4:
        dayname = "Thursday";
        break;
    case 5:
        dayname = "Friday";
        break;
    case 6:
        dayname = "saturday";
        break;

    case 7:
        dayname = "sunday";
        break;

    default:
        dayname="unknown input";
}

console.log(dayname);


//loops

//For loop

for(let i=0;i<10;i++){
    console.log(i);
}

//while loop
let aa=5;
while(aa--){
    console.log(aa);
}

















//Functions
function Greet(){
    console.log("Hello all, how are you doing");
    console.log("Today is a nice day");
}

Greet();

//Function Declaration

function function_name(parameter1, parameter2){
    //code to be executed

    console.log("Function with 2 parameters:" ,parameter1,parameter2);
}

//Function calling
//to execute a function and run the code inside it, you need to invoke or call a function.
//Its name followed by parenthesis

function_name("Prajakta", "Mane");
function_name("Prajakta", 24);

//Return statement
//A function can optionally return a value using a return statement

function sum(a,b){
    let res=a+b;
    return res;
}
console.log(sum(5,10));

//Function scope

function newFunction(){
    let x=10;
    console.log(x);
}

// console.log(x);//Reference error: x is not defined]
// newFunction();

//Function expression

let hello=function(){
    console.log("Hello");
};
hello();
hello();
hello();


//Anonymous fuction - function with no name
// function(){
//     console.log("Hello");
// };

//Arrow Functions

let hello2=()=>console.log("Hello World");
hello2();

//another syntax

//let hello3=()=>
// {console.log("Hello World");
//   };
// hello3();

let multiply=(a,b)=>a*b;
(console.log(multiply(5,2)));

//Array 

//1.Creating an array

let arr1=[];
//let arr2=["Apple","banana","Orange"];
let arr3=["Prajakta",7888227441,true, ["Dancing","Singing","Playing"]];


//Accessing an array elements
let arr2=["Apple","banana","Orange"];
console.log(arr2[1]);//It will print banana
console.log(arr2[2]);


//Modify an array
arr2[2]="Kiwi";
console.log(arr2[2]);

//Array Length
console.log(arr2.length);

//Array methods and operations
//1.Push 
//2.pop
//3 shift
//4.unshift
//5.concat

//1. Push
//It adds one or more elements at the last

arr2.push("Kiwi");
console.log(arr2);

//2.pop
//It will remove the last element from an array

arr2.pop();
console.log(arr2);


//3. shift

//Shift is used to remove the first element from an array

arr2.shift();
console.log(arr2);

//unshift
//unshift used to add the element at the beginning of the array
arr2.unshift("Apple");
console.log(arr2);

//concat
//It will concat two arrays 
let arr4=["Football","Cricket"];
arr2=arr2.concat(arr4);
console.log(arr2);



//difference bet var, let and const

//let a=3; //Using let
//var a=3; //Using var
//const a=3; //Using const


//           Reassigning        Hoisting      Scope
//let      | Yes          |      No          | Block
//var      | Yes          |      Yes         | Function
//const    | No           |      No          | Block


//We can reassign value in let and var but not in const as this is constant
//scope:
//Global scope: It is accessible at any point of code.
//function / Local scope: It is declared inside the function which is not accessible 
//outside that function.
//In function scope, variable is accessible by any function which is declared under the same function.

//Block scope
//It will accessible only where it is declared.


//Hoisting

console.log(Prajakta); // Error: Cannot access 'Prajakta' before initialization
var Prajakta="Pretty"; //Intialization + declaration
console.log(Prajakta);

//During compilation:
//  var Prajakta;
//  console.log(Prajakta);
//  Prajakta="Pretty";
//  console.log(Prajakta);


// Hoisting means it automatically initializes variable first and then declared.
//Only var has hoisting
//It will initialize variable to undefined

//Functions also can be hoisted at the top of the code
greet();
function greet(){
    console.log("Welcome");
}














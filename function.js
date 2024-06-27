// Write Reusable code with functions
function callingname() {
    // console.log("heeyyy, world");
}

callingname();

function returnvalue() {
    // console.log("Live long life");
}

returnvalue();

// Passing Values to Fuctions With Arguments
function returnArgumentsWithParam(a, b){
    console.log(a + b); // output 14
}
// returnArgumentsWithParam(10, 4);

// Global Scope and Functions

var myGlobal = 10;

function fun1(){
    ooopsGlobal =5;
}

function fun2() {
    var output= "";
    if(typeof myGlobal != "undefined"){
        output += "My Global: " + myGlobal;
    }
    if(typeof ooopsGlobal != "undefined"){
        output += "oopsGlobal: " + ooopsGlobal;
    }
    console.log(output)
}
// fun1();
// fun2();

// local scope and functions
function myLocal(){
    var local = 4;
    console.log(local);
}

// myLocal();

// Global Vs. Local Scope in Function.
var outerWare = "T-shert";

function ware(){
    var outerWare = "shoose";
    return outerWare;
}
// console.log(ware())
// console.log(outerWare)


// Return a Value from a funciton with return.
function operator(num) {
    return num * 14;
}
// console.log(operator(4));

// Understanding Undefined Value Returned from a function
var nums = 7;
function command(sum){
    sum += 3;
}
// console.log(command()); // the out put is undefinedn

// Assignment with a Returned value
var changed = 0;

function change(num){
    return(num * 3)/2;
}

changed = change(8);
// console.log(changed);

// stand in line

function math(arr, item){
    arr.push(item);
    return arr.shift();
}
newArray = [1, 2, 3, 4, 5];

console.log("Before " + JSON.stringify(newArray));
console.log(math(newArray, 6));
console.log("Afeter " + JSON.stringify(newArray));

// Boolean Values.
function booleanValu(){
    return false;
}



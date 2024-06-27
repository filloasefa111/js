// nested or multi dimentional array
var x = [["name", 12], ["name", 55]]

// access array data with indexes
var y = [40, 50, 60];
var x = y[0]; //  value 40
console.log(x) 

// Modify Array data with indexs
var a = [40, 50, 60];
a[0] = 55; // the value of `a` is now [55, 50, 60];
console.log(a)

// Access multi-dimentional array with indexs;
var myArray = [[1,2,3], [4,5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];// this is 3 layer deep array
var result = myArray[3][0][1];
console.log(result);

// Manipulate Arrays with Push() - add new array to array, being nested array(multi-dimentional array)
var xyz = ["name", "mr"];
xyz.push(["miss", "doc"]);
console.log(xyz);

// Manipulate Arrays with pop() - remove the last element of the value in array
var zzz = [10, 10, ["live", "life"], [100, 1]];
var x = zzz.pop();
console.log(zzz);

// Manipulate Arrays with shift()- remove the first element of the value in array.
var Myarray = [ [1, 2], [3, 4]];
var remove_ = Myarray.shift();
console.log(remove_);
console.log(Myarray);

// Manipulate Arrays with Unshigt()
var temp = [[1.2, 3, 5], ["hello", "bye"]];
temp.unshift(["dame", "love"]);
console.log(temp);

// Shopping List Arrays
//(nested arrays)

var list = [["banana", 3], ["orange", 4], ["milk", 2], ["juice", 3], ["eggs", 10]] // those all are shopping arrays




 

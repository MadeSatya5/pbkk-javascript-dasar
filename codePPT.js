// Variable
function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // print 2
  }

  console.log(x); // print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // print 2
  }

  console.log(x); // print 1
}

const pi = 3.14;
console.log(pi); // print 3.14


// Tipe Data Primitif
let teks = "hello world"; //String
let x = 10; // Number
let bigInt = 12345678901234567890n // Bigint
let isOpen = true; // Boolean
let none; // Undefined
let cat = null; // null
let uniqueId = Symbol("Halo"); // Symbol

//Tipe Data Non Primitif
let user = {
  name: "Budi",
  age: 20,
}
let numbers = [1, 2, 3, 4, 5];
function sayHello() {
  return "Hello World";
}


// Percabangan
// if else
let nilai = 80;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B");
} else {
  console.log("C");
}

// Ternary Operator
const number = 20;
const result = number > 10 ? "Number is bigger than 10" : "Number is smaller than 10"
console.log(result); // Print "Number is bigger than 10"

// Switch
let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple!"); // Print
    break;
  case "banana":
    console.log("It's a banana!");
    break;
  default:
    console.log("Unknown fruit.");
}


//Perulangan
for (let i = 1; i <= 5; i++) {
  console.log("Iterasi " + i);
}

let i = 1;
while (i <= 3) {
  console.log("Number " + i);
  i++;
}

// Array Method
// Map
const values = [1, 2, 3, 4, 5];
const result1 = values.map((value) => value * 2); 
console.log(result1) // print [2, 4, 6, 8, 10]

// Filter
const ages = [10, 20, 30, 40, 50];
const adult = ages.filter((age) => age >= 20);
console.log(adult); // print [20, 30, 40, 50]

// Reduce
const numberss = [5, 6, 1, 4, 3];
const total = numberss.reduce((acc, number) => acc + number , 0);
console.log(total); // print 19



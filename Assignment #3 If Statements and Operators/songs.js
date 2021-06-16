
var men = ["Amani", "Joseph", "Socrates", "Pirple", "Richie", "Alpha"];
var areAllMenMortal = true;



if (areAllMenMortal) {
  console.log("All men are mortal");

  // Checking if Socrates is a man
  for (i = 0; i < men.length; i++) {
    if (men[i] == "Socrates") {
      console.log("Socrates is a man");
      console.log("Therefore, Socrates is mortal");
    } else {
      console.log(men[i] + " is not Socrates but is mortal");
    }
  }
};



//todo Extra Credit:


var cakes = ["vanilla", "chocolate"];

var cake = "vanilla";

if (cake === cakes[0] || cake === cakes[1]) {
  if (cake !== "chocolate") {
    console.log("The cake is :" + cake);
  }
}



























//PRACTICE
// var today = new Date();
// console.log(today);


// var year = today.getFullYear();
// console.log(year);

//?Assignment #2 Variables and Constants

//! Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution

// console.log(a);  //*response on console  undefined  meaning it has been declared but not initialized
// var a = 5;
//? let and const hoist but you cannot access them before the actual declaration is evaluated at runtime. So in case of let and const, you cannot access them before the declaration.


//* var The scope of a variable defined with the keyword “var” is limited to the “function” within which it is defined. If it is defined outside any function, the scope of the variable is global. Using var, variables are function-scoped because their visibility is limited to the function. When you try to use it outside of the function, you’ll get an error.

// function assignment() {
//   var pass = "100%";
//   console.log(pass);
// }
// assignment();
//! console.log(pass); Uncaught ReferenceError: pass is not defined 

//*console.log(pass);    Uncaught ReferenceError: pass is not defined    <anonymous> http://127.0.0.1:5500/songs.js:10


//*const: The scope of a variable defined with the keyword “const” is limited to the block defined by curly braces. However if a variable is defined with keyword const, it cannot be reassigned.
//* Creating my person object:
// const person = {
//   name: 'Joseph',
//   age: 33
// };
// //* Calling person 
// console.log(person);

// //* If I then redeclare the age attribute:
// person.age = 34;

// //* When I call it:
// console.log(person);


//? let: The scope of a variable defined with the keyword “let” or “const” is limited to the “block” defined by curly braces i.e. {} . “let” and “const” are“block scoped”.

// {
//  let a=10;
//  console.log(a);
// } 
//*block 1
{
  //!a++;// //?Uncaught ReferenceError: a is not defined
  //!console.log(a); Uncaught ReferenceError: a is not defined
} 
//?block 2/* Since we are using "let a=10", scope of "a" is limited to block 1 and "a" is not recognized in block 2 */











console.log(arrowTitle)
/* START CODE UNDER THIS LINE */
 //P.C
 //Q1
  /*
 
 Create a global variable myFavoriteFood and return its value in the function's local scope.

// make sure that the variable is in the global scope
const favoriteFood = function () {
  // TODO: Your code here
};

favoriteFood(); // => the value of `myFavoriteFood` variable
 

 */ 
let  myFavoriteFood = " big mac "

const favoriteFood = function (){


return (myFavoriteFood);

}
//Q2 
 /*
 
 Create a function updateFavoriteFood that updates the value of myFavoriteFood

const updateFavoriteFood = function (newValue) {
  // TODO: Your code here
};

updateFavoriteFood("Pizza");
favoriteFood(); // => "Pizza"
 
 
 */

console.clear()


let FavoriteFood = " big tasty"
console.log (FavoriteFood);
const updateFavoriteFood=function(newValue){

     FavoriteFood = newValue

  
}

//Q53
/*
Use the following closure function to create two separate counters

const createCounter = function () {
  let counter = 0;

  // this anonymous function is a closure function that has access to its own closure variable
  return function () {
    return ++counter;
  };
};
*/
const createCounter = function(){

let counter =0;



return  function(){


  return ++counter;

}
return ++counter;

}
const cuntw2 =  createCounter()




//Q4
/*
Modify createCounter to take a parameter that represents the starting point for the counter

// instead of counting from zero it will take count from the value provided
const createCounter = function (start) {
  // TODO: Your code here
};

*/
const createCounte2 = function (start){
let counter =start

const createCounte3 = function (){
  


}
return function(){
  return ++counter
}
return ++counter

}

const count6 =createCounte2(6);
 
// p
//Q1
/*
Predict the value of the following variables and explain why.

let age = 25;
if (true) {
  age = 30;
}
age; // ?  == 30

const myName = "John";
if (true) {
  const myName = "Jane";
}
myName; // ?
*/
let age = 25;
if (true) {
  age = 30;}
  console.log (age)

  const myName = "John";
if (true) {
  const myName = "Jane";}
  console.log ( myName)
//Q2 
/*
Predict the value of the following function invocations.

let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};

func1(); // 15

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};

func2(26); // ?



*/

let number = 10;
const func1 = function () {
  let number = 15;

  if (true) {
    let number = 24;
  }

  return number;
};
const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
  }

  return age;
};
//Q3
/*
Write a function countDown that returns a number representing a count down value. With each invocation the number should be lower by one and at zero it will no longer decrement and instead it will return "count down is over".

const countDown = function () {
  // TODO: Your code here
};

countDown(); // => 4
countDown(); // => 3
countDown(); // => 2
countDown(); // => 1
countDown(); // => 0
countDown(); // => "count down is over"*/


let counter3 = 6

const countDown = function (){

if(counter3 > 0 ){

 counter3 =counter3 - 1
  return counter3
}else {
  console.log ("count down is over")

}

}


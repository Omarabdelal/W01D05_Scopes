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
//Q5
/*Write a function countUp that should do the opposite of countDown. With every invocation the count value should be incremented by one.

const countUp = function () {
  // TODO: Your code here
};

countUp(); // => 4
countUp(); // => 5
countUp(); // => 6
countUp(); // => 7
countUp(); // => 8
*/

let conter5 = 7
const countUp = function (){

  
 
return ++conter5
return conter5


}
//Q5 
/*
Write a function resetCount that accepts a number argument start and updates the count variable to equal the starting value and return a string implying that.

const resetCount = function (start) {
  // TODO: Your code here
};

resetCount(0); // => "the count has been reset"
countUp(); // => 1
resetCount(10); // => "the count has been reset"
countUp(); // => 11

*/
const resetCount = function (start){

let coun= start;
console.log ( "the count has been reset")

return ++coun;
}
//Q6
/*Write a function addToList that accepts a string argument toDo and returns the current list as a string. Every time we invoke the function it should return the old toDo item plus the new one.

const addToList = function (toDo) {
  // TODO: Your code here
};

addToList("Eat"); // => 'Eat'
addToList("Play"); // => 'Eat Play'
addToList("Sleep"); // => 'Eat Play Sleep'
addToList("repeat"); // => 'Eat Play Sleep repeat'*/


let cc = "khaled"
const addToList = function (toDo) {

cc = toDo
 


cc = cc + toDo

return cc

}
//Q8
/*
Write a function deposit that accepts a number argument amount and returns the current account balance after depositing the amount.

const deposit = function (amount) {
  // TODO: Your code here
};

deposit(100); // => 100
deposit(50); // => 150
*/

let  depositw= 100
const deposit = function (amount){
 console.log ( depositw)
  console.log ("account balance after depositing the amount")
  depositw = depositw + amount

 
return depositw

}




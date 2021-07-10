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

    let FavoriteFood = newValue

    return (FavoriteFood);
}

//Q5
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

const createCounter2= function(){

if(counter <0){
  let counter = 1;
console.log ( counter)

}else{
  return ++counter;

}

}

return createCounter2()


}

//Q4
/*
Modify createCounter to take a parameter that represents the starting point for the counter

// instead of counting from zero it will take count from the value provided
const createCounter = function (start) {
  // TODO: Your code here
};

*/


const createCounter4 = function (start){
let counter = 0
const createCounter5 = function (){

if (counter === 0){

  let counter= start;
  return ++counter;

}else{

  console.log ("error")
}


}
return  createCounter5()
}

/*gsjgjggjffgjdfdjgfjfggjjggjdgjdjdffgjfdfgj
sgksddgkggk
gdfkgdfkggkffggkfgg
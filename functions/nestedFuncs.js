// nested funct
/*
// note : a variable or a function declared inside a funct can be accessed within the funct only. we can not access the var ouside the func
// scope of the inner func: we can only access with in the outer func only
// we can access the outer func anywhere in this file
function outer(){
    console.log("Outer started....");
    function inner(){
        console.log("inner executed");
    }
    inner();
    console.log("outer continue....")
}

outer();
*/

// clouser
function outer(x){
    function inner(y){
        return x+y;
    }
    return inner; // it will return the inner func
}

const outerReturned=outer(10) // outer(10) returns inner function where x=10 ==> inner(y){return 10+y}
console.log(outerReturned);
console.log(outerReturned(6))

//call back funtion : A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// when we want to execute 2 functions one after the other even if we call the functions one after the other the may not be executed in the required order
// to maintain the order of the func we use call back funcs

hello(goodbye);
function hello(callback){
    console.log("Hello");
    callback();
}
function goodbye(){
    console.log("Goodbye");
}

// Higher Order Function (HOF)
//1. it takes one or more functions as arguments
// 2. it may return a function

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

const outerReturned=outer(10) // outer(10) returns inner function
console.log(outerReturned);
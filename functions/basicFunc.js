// hoisting ==> process of moving function declaration to the top of the file. 
// in javascript we can declare the function any where (before or after function call) in case of function declaration. but incase of function assignment

/*
// basic function
function printme(){
    console.log("Hii")
}

printme();
*/


/*
// funct with parameters
function printThis(param){
    console.log(param);
}
printThis("parameter")
*/


/*
//another way (using func expression) 
// anonymous function assignment
const printing= function(){
    console.log('print');
}

// named function assignment
const printing= function print(){
    console.log('print');
}
printing();

const printingwithParem= function(a, b){
    console.log(a, b);
}
printingwithParem(2, 3)
*/


/* 
//function with return type
function sum(a, b){
    // let ans= a+b;
    // return ans
    return a+b;
}
// let ans= sum(5, 7);
// console.log(ans);
*/


// *************************************************************************//
// Arguments object==> it is a special object used in javascript that stores all the multiple arguments passed to the function
// in the below line of code we are passing more no of parameters are passed. all these will be stored in arguments object
function sum2(a, b){
    console.log(arguments)
    let total=0;
    for (let vals of arguments){
        total= total+vals;
    }
    return total;
}

let ans= sum2(2, 5, 7, 2, 7, 2, 8)



// default parameters
// for the above sum function we need 2 parameters. 
// if one of them is missing then NaN(not a Num) will be returned by the function since the second param is missing and considered as undefined
// console.log(sum(3));


//to avoid this we can use default parameters. 

//if b value is not passed then it will automatically consider it as 2. if passed then the passed value will be considered
function summ(a, b=2){
    return a+b;
}
// in below line we are sending only one parameter hence 2nd parameter will be the default value we assingned the function
console.log(summ(5));




// REST parameter
// rest param allows a func to accept infinite no of params in the form of an array
// the rest param shoud be the last parem a,d only one rest param is allowed in a func
function restParam(x, ...y){
    console.log(x);
    console.log(y);
}

// the first aurg (means 3) will be considered as x, and rest will be allocated to y. hereb y is considered as an array
restParam(3, 5, 3, 2,67 ,6 ,23,4);




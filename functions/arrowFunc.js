// normal function
const add= function (x){
    return x*x;
}
console.log(add(5))
// remove function key word and add arrow "=>"
const add1= (x)=>{
    return x*x;
}
console.log(add(5))
// since we have one line of code inside the function we can simply return without using "{}"
const add2=(x) => x*x;
console.log(add(5))


// since we have only one param we can ignore "()"
const add3= x => x*x;
console.log(add(5))

//summary : remove function keyword, if only one param then remove "()", if only one line of code inside function then remove "{}"



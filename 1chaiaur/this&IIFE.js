// THIS, ARROW FUNC, IIFE, TRUTHY AND FALSY, NULLISH COALESCING OPERATOR (??)


/*
const user={
    name:"hitesh",
    price: 999,
    msg:function(){
        console.log(`${this.name} ,welcome to website`); // this referes to current context
        console.log(this)  //entire obj will be printed
    }
}

user.msg()
user.name="sam"
user.msg()
console.log(this) // empty obj will be printed
*/

/*
function chai(){
    let username="hithesh"
    console.log(this)
}
chai()
*/

/*
// arrow function 
const chai=()=>{
    let username="hitesh"
}
const addtwo=(num1,num2)=>({username:"hitesh"})
console.log(addtwo(3,6))


// IIFE : to prevent popllution the global js scope 
(function cahi(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})();  // ";" is must

(()=>{
    console.log("arrow")
})();
passing arguments 
((name)=>{
    console.log(ram)
})("rama");
// limitatiopns: cannot use more than 1 TimeRanges, we cant access outside the scope
*/

// nullish coalescing operator (??): null undefined 
let val1, val3, val4
let val2
val1= 5 ?? 10           // 5 will be assigned
val2= null ?? 15           //15 will be assigned
val3= undefined ?? 25          //25 will be assigned
val4= null ?? 10 ?? 101          //10 will be assigned
console.log(val1, val2, val3,val4)


// falsy values 
//false, 0, -0, "",'',null, undefined, NaN, BigInt 0n

// truthy values 
//true, [], {},'0',"0",'false', " ",function(){},

const emptyobj={}
if (Object.keys(emptyobj).length === 0){
    console.log("object is empty")
}

// false==0, false=="", 0==""

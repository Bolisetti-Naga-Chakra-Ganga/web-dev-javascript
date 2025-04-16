/*
function mulBy5(num){
    return num*5
}
mulBy5.power=2  //// every element in js acts as an object
// console.log(mulBy5(5))
// console.log(mulBy5.power) 
// console.log(mulBy5.prototype) 


function createUser(username, score){
    this.username=username
    this.score=score
}
createUser.prototype.increment=function(){
    this.score++
    console.log(this.score)
}
createUser.prototype.printme=function(){
    console.log(`score is ${this.score}`)
}
const chai= new createUser("chai",25)
const tea= new createUser("tea",250)
chai.printme()
chai.increment()
// console.log(chai)
*/

/*
// prototype
let myname="hitesh     "
console.log(myname.truelength)
*/

/*
let myheroes=["thor","spiderman"]
let heropower={
    thor:"hammer",
    spiderman:"sling",
    getspiderpower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
//setting a function to all Objects this will be added to all strings and arrays too
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all objects `) 
}
Array.prototype.heyHitesh=function(){  // estting a function for all arrays
    console.log(`hitesh says hello`)
}
// heropower.hitesh()
// hitesh()
// myheroes.hitesh()
myheroes.heyHitesh()
// heropower.heyHitesh()  // throughs an error
*/

/*
const user={
    name:"ping-Pong",
    email:"pingpong@gmail.com"
}
const teacher ={
    make:true
}
const teachSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:'js',
    fullTime: true,
    __proto__:teachSupport  // TAsupport can access all the properties of teachsupport
}
teacher.__proto__=user // teacher can access all the properties of user

//modern syntax
Object.setPrototypeOf(teachSupport,teacher)// all the details of techer can be accessed by teachSupport
console.log(teachSupport.make)
*/


let another="ding-dong          "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}
another.trueLength()
"karthik".trueLength()
"kalyan      ".trueLength()
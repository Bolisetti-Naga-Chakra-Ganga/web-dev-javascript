//singleton
// Object.create

//object literals
// const mysym=Symbol("key1")

// const user={
//     name:"hitesh",
//     age:"jsipur",
//     [mysym]:"mykey", //correct way to use sybmbol in obj
//     email:"hitesh@google.com",
//     logindays:["mon","wed","thurs"]
// }

// accessing the obj keys


// console.log(user.name);
// console.log(user["name"]); // we can access values like this also user.name and user["name"] bothe are same
// console.log(user[mysym])

// Object.freeze(user) // deatiles of the object user will be locked. we cant change the properties anymore
// console.log(user)

// user.greeting=function(){
//     console.log(`hello JS user`);
// }
// user.greeting2=function(){
//     console.log(`hello JS user, ${this.name}`);
// }
// console.log(user)
// console.log(user.greeting())
// console.log(user.greeting2())

// we can use nested objects
// const reguser={
//     email:"abc@gmil.com",
//     fullname:{
//         username:{
//             firstname:"hitesh",
//             lastname:"choudhary"
//         }
//     }
// }

// merging objs

// console.log(reguser.fullname.username.firstname)
/*
const obj1={1:"b", 4:"t"};
const obj2={56:"6", 23:"u"};
const obj3={5:"6", 3:"u"};

// to concat objects using diff methoda
const obj4= {obj1, obj2}
console.log(obj4)
const obj5= Object.assign(obj1, obj2) //
console.log(obj5)
const obj6= Object.assign({},obj1, obj2,obj3)
console.log(obj6)
const obj7={...obj1,...obj2,...obj3}
console.log(obj7)
*/

// to access keys and values
// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))
// console.log(obj1.hasOwnProperty("isLoggedin")); // to check

// const users=[
//     {
//         id:1,
//         email:"abc@gmail.com"
//     },
//     {
//         id:1,
//         email:"abc@gmail.com"
//     },
//     {
//         id:1,
//         email:"abc@gmail.com"
//     }
// ]
// console.log(users[1].email)


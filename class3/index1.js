// Math function
console.log(Math.random());
console.log(Math.round(1.2));
console.log(Math.round(1.8));
console.log(Math.max(1, 6, 3, 5));
console.log(Math.min(1, 6, 3, 5));
console.log(Math.abs(-2.7));

// Strings 
// 2 types of stings ==> norml string , Object string

let lastname= "Dooong";
let firstname= new String ('Ding  ');
console.log(typeof firstname);
console.log(typeof lastname);
console.log(lastname.length)
console.log(lastname.includes('Do'))
console.log(lastname.startsWith("Do"))
console.log(lastname.endsWith("g"))
console.log(lastname.toLowerCase)
console.log(lastname.toUpperCase)
console.log(firstname.trim());
console.log(lastname.replace("ooo", 'o'));
// refer mdn 

let message="This is my first message";
let message2="This is my first message";
let words= message.split(' ');
console.log(words);
console.log(message2.replace("first", 'second'));
console.log(message2);

// escape sequence

let message4=
`this 
is 
my 
first
comment`;
console.log(message4);

// date 
let date=new Date();
console.log(date);
let date2=new Date('june 20 1996 07:15');
let date3=new Date(1978, 11, 20, 7);
console.log(date2);
// we can use getters and setters
date3. setFullYear(1998);
date3. setMonth(8);
let month=date2.getMonth();
let time=date2.getTime();
console.log(month);
console.log(date3);

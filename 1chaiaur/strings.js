// string interpolation
// const score=400;
// console.log(score)
// const bal=new Number(balance)
// console.log(bal.toString())
// console.log(bal.toFixed(2)) // adds to positions after a value ex: 100.00
// const n=123.674869
// console.log(n.toPrecision(4)); // it will give you a precised round up value by considering given presicision
// let p= 10000000
// console.log(p.toLocaleString())// us- standard is default standerd 
// console.log(p.toLocaleString('en-IN'))// to convert to indian standerds

  //******* Maths *********/
// console.log(Math.abs(-4)); // to convert a "-ve" value to '+ve' value
// console.log(Math.round(14.77)); // to round the values
// console.log(Math.ceil(14.77)); // round to next value
// console.log(Math.floor(14.77)); 
// console.log(Math.min(4,3,8,5)); 
// console.log(Math.max(46, 7,2, 778));

console.log(Math.random());
let min=2
let max=20
console.log(Math.floor(Math.random() *(max-min+1) +min))
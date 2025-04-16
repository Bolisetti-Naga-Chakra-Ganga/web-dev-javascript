// const arr1=[1,5,2,7,4]
// const arr2=[6,3,6,3]
// const arr3=[3,7,4,9,0]
// // to add 2 or more arrays
// const arr=[...arr1, ...arr2, ...arr3] // to add arrays
// console.log(arr)
// const arr6=[6,3,6,3,[3,7,4,9,0,[2,6,4,8]]]
// const arr7=arr6.flat(Infinity)
// console.log(arr7)

let arr4=[2, 575,7, 678, 45, 76]
arr4.push(6);
arr4.push(99);
console.log(arr4);
arr4.pop();
console.log(arr4);

let arr5=[2, 6, 3, 8, 45, 78]
// console.log(arr4);
// arr4.push(arr5); // arr5 will be pushed as an array into arr4
//  let concatedarr=arr4.concat(arr5);
//  console.log(concatedarr)

// preferred meth to concate arrays
const newarr=[...arr4, ...arr5]
console.log(newarr);


// console.log(Array.from("Hitesh")) // to cnvert into an array
let k=7
let p=9;
let d=13
// console.log(Array.of(k,p,d)) // creates an array 



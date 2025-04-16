/*const nums=[1,5,3,8,3,6,4]
// console.log(nums.shift());// removes 1st element, original array will be maipulated
// console.log(nums)
// let k=nums.splice(nums.length,0,5) // spilec can be used to add, delete an element too. syntax:splice(start index, num of elementes to be deleted, elements to be added)
// console.log(nums)
let p=nums.splice(2, 1, 4,7,6)
console.log(nums)
*/

// const months=["jan", "april", "june","sep","oct","nov"]
// let p= months.indexOf("sep") // returns index num if found, othe wise returns "-1"


//map: original wont be modified
const nums=[1,9,1,25,36,4]
/*
let newnums=nums.map((elem,index,arr)=>{
    return Math.sqrt(elem)
})
*/

/*
// to double and return the elements greater than 10 using chaining style
let arr=nums.map((elem)=>{
    return elem*2;
}).filter((elem)=>{
    return elem>10
})
console.log(arr)
console.log(nums)
*/


/*
// reduce method: to convert 2D or 3D array into 1D array
let arr2=[4, 6, 2, 8, 5,9];
let sum=arr2.reduce((accumulator,element,index,arr)=>{
    console.log(accumulator,element)
    return accumulator+=element
});
console.log(arr2)
console.log(sum)
*/

/*
// chaining of map,filter,reduce
let arr4=[4, 6, 2, 8, 5,9];
let arr5=arr4.map((elem)=> elem*2).filter((elem)=> elem>10).reduce((accumulator,element)=>accumulator+element)
console.log(arr5)
*/
  

// ******* strings ********//
// escape "\"
let bio=`i am vinod bahadur thapa vinod`
/*
let b1= ' i can\'t do it'
console.log(b1)

console.log(bio.indexOf("vinod", 8)) // searches in forward direction
console.log(bio.lastIndexOf("am", 8)) // serches in backwards direction
console.log(bio.search("thapa")) //it wont take 2nd arg
//slice extracts a part of a string and returns the extracted string
console.log(bio.slice(0,5))
console.log(bio.slice(7,-2))

//substring
console.log(bio.substring(0,5))
console.log(bio.substring(7,-2)) // it wont take "-ve" values. here it will print from index 0 to 6
*/
//substr
console.log(bio.substr(1,5))  // start and length. 
console.log(bio.replace("bahadur", "bahadhur"))// replaces only 1st match. case sensitive


//extracting string characters  // there are 3 methods 
console.log(bio.charAt(6))  // we can fined the caracter at a certain index
console.log(bio.charCodeAt(6)) // returns UTF-16 code
console.log(bio.split('')) //seperates each and every char
console.log(bio.split(' ')) //based on spaces exists in string


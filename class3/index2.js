// Arrays

/*
// insertion 
// end --> push
// middle --> splice
// beginning --> unshift
let nums=[1, 6, 3, 7, 2, 8]
console.log(nums);
nums.push(9);''
nums.unshift(556);
nums.splice(2, 0, 'a', 'b', 'c', 'd');
console.log(nums);
*/

//*****************************************************************//
/*
// searching
// array.indexOf(elem to be searched) ==> returns index if elem presents, returns -1 if elem not present
console.log(nums.indexOf(17)); // it returns -1 since 17 not present in nums
if (nums.indexOf(99) != -1){
    console.log("present");
}
else{
    console.log("not present");
}
console.log(nums.indexOf(2))
// 2nd way to search for an elem ==> includes function ==> returns true of false
console.log(nums.includes(2))
console.log(nums.includes(97))

//searching in array of objects
let students=[
    {no:1, fname:"ding", lname:"dong"},
    {no:2, fname:"ching", lname: " chong"}
];
console.log(students);
console.log(students.indexOf({no:1, fname:"ding", lname:"dong"})); //though thr obj is present it returns -1 
// Note: indexOf, includes won't work to search for an obj

// explanation for below: we are finding in students array(of objects) using a predicate function. 
// while searching in array we are naming each elem(obj) as stude and checking for required fname the function returns the obj if fname matches with required fname 
// returned obj will be stored in stud variable
// if no obj found with req fname then undefined will be returned
let stud= students.find(function(stude) {
    return stude.fname='ding' //returns the obj having fname = ding
})
console.log(stud);

// minimization of the above func
// arrow func
let studentObj= students.find(stud => stud.fname =='ding');
*/


/*
// Removing an elem from an array
let numsArr=[1, 6, 2, 7, 33, 7, 5, 988];
console.log(numsArr);
// removing end elem
numsArr.pop();
console.log(numsArr);
//removing 1st elem
numsArr.shift();
console.log(numsArr);
//removing elems at particular indexes
numsArr.splice(2, 1);
console.log(numsArr);
*/

/*
// empty
let nums2= numsArr;
// meth 1 (not suggestable)
//numsArr stores the base address of the array. in this method a new empty array is created and now it is named as numsArr means base add stored in numsArr now changed to new base address. but the array the prev base address is still not empty but j
// numsArr=[];

// meth2 
// numsArr.length=0;



// merh 3
numsArr.splice(0, numsArr.length)
console.log(numsArr);
console.log(nums2);



//meth4 using loop and pop function
*/

// ****************************************************************//
// combining and slicing arrays
let arr1=[1, 2, 3, 4]
let arr2=[5, 6, 7, 8]
// combining
// let combined= arr1.concat(arr2);

// spread operator
let combined= [...arr1, ...arr2];
console.log(combined);

// slicing ==> arr.slice(starting index, ending index). NOTE: starting indexed elem will be includedin sliced arr. but ending index will be excluded
let sliced= combined.slice(2,5);
console.log(sliced)
let fullsliced=combined.slice(); // complete arr will be copied
console.log(fullsliced)

// meth creating a copy 
let another=[...combined]



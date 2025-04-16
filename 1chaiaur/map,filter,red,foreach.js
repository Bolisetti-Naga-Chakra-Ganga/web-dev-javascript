/*
// map 
const map= new Map();
map.set("in", "india");
map.set("uk", "united kingdoms");
map.set("us", "united states");
// console.log(map);
for (const [key, value] of map){
    console.log(key, ":-", value);
}
*/

/*
const arr=["js", "ruby", "java", "python", "cpp"]
arr.forEach(function(elem,index,arr){
    console.log(index,elem)
})
arr.forEach((elem)=>{
    console.log(elem)
})

// passing function for forEach 
function printme(item){
    console.log(item)
}
arr.forEach(printme)

const mycoding=[
    {
        languageName:"java script",
        filename:"js"
    },
    {
        languageName:"java",
        filename:"java"
    },
    {
        languageName:"python",
        filename:"py"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName)
})
*/

/*
const nums=[1,2,3,4,5,6,7,8,9,10]
let newnums=nums.filter((num)=>num>4) // need a call back functions
console.log(newnums)

const books=[
    {title:"one", gener:"science", publish:2009, edition:2010},
    {title:"two", gener:"maths", publish:1997, edition:2020},
    {title:"three", gener:"history", publish:2004, edition:2034},
    {title:"four", gener:"science", publish:2009, edition:2009},
    {title:"five", gener:"history", publish:2001, edition:2011},
    {title:"six", gener:"science", publish:1999, edition:2022},
    {title:"seven", gener:"science", publish:1897, edition:2012},
    {title:"eight", gener:"history", publish:1927, edition:2014},
];
// const userbook=books.filter((bk)=> bk.gener==="history")
// const userbook= books.filter((bk)=> {return bk.publish >= 2000})
const userbook= books.filter((bk)=> {
    return bk.publish >= 2000 && bk.gener=== "science"
})
console.log(userbook)
*/

/*
const nums1=[1,2,3,4,5,6,7,8,9,10]
const nnums= nums1.map((num)=> num+10)
console.log(nnums)

tot=nums1.reduce((acc,curr)=>{
    acc+curr
}, 0)  // here we are passin 0 as accumulator

tot=nums1.reduce((acc,curr)=> acc+curr, 0)
console.log(tot)
*/


const course=[
    {
        languageName:"java script",
        course: 999
    },
    {
        languageName:"java",
        course: 999
    },
    {
        languageName:"python",
        course: 999
    }
]

const totprice=course.reduce((acc,item)=> acc+item.course, 0)
console.log(totprice)

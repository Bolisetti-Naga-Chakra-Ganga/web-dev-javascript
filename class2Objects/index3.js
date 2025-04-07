// cloning object
let src={
    a:10, 
    b:20,
    c: 30
}

// method 1 
let dest ={};       // creating an empty object
for (let key in src){
    dest[key]=src[key];
}
console.log(dest);

// ***********************
// method 2
console.log("method 2");

let dest2 = Object.assign({}, src);
console.log(dest2);

// ************************

// method 3
console.log("method 2");
let dest3={...src};
console.log(dest3);

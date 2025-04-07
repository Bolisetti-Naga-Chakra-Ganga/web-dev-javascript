// constructor function
function Rectangle(){
    this.length=1;
    this.breadth=2;
    this.draw= function(){
        console.log('drawing the rectangle');
    }
}

// creating an object using constructor function
let rectangleObj = new Rectangle();
console.log(rectangleObj)

// adding new props to created obj
rectangleObj.color='red';
console.log(rectangleObj);

delete rectangleObj.color;
console.log(rectangleObj);


// constructor property
console.log(rectangleObj.constructor); // returns the constructor used for cteating the obj rectangleObj

// finding if a property present or not


// **********************************//
// for in loop

let rectangle1= {
    length: 1, 
    breadth: 2,
};

for (let key in rectangle1){
    // keys are represented through key var
    // values are reflected through rectangle1[key]
    console.log(key, rectangle1[key]);
}

// for of loop
// allicable only on iterables
for (let key of Object.keys(rectangle1)){
    console.log(key);
}
for (let key of Object.entries(rectangle1)){
    console.log(key);
}

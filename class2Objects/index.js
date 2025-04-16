/*
console.log('hello');

// creating object - way1 (object literals)
let rectangle={
    // properties
    length:1, 
    breadth: 2, 
    // adding behaviour / methods
    draw: function(){
        console.log("drawing rectangle");
    }
}
// summary of the above obj: rectangle is an object having 2 properties and 1 function

// accessing obj properties and methods
console.log(rectangle);
rectangle.draw();
*/

// **********************//
/*
// factory fuction:used to create object. it creates and returns the object
function createRectangle(){
    let rectangle={
        length:1,
        breadth:2,

        draw: function(){
            console.log('drawing rectangle');
        }
    }
    return rectangle;
}
*/
// **********************//

// perameterized factory function
function createRectangle(len, brdt){
    let rectangle={
        length:len,
        breadth:brdt,

        draw: function(){
            console.log('drawing rectangle');
        }
    }
    return rectangle;
}

let rect1= createRectangle();
// perameterized 
let rect2= createRectangle(3, 6);
console.log(rect2);

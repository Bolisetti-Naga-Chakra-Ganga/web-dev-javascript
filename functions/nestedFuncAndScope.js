// nested funct
function outer(){
    console.log("Outer started....");
    function inner(){
        console.log("inner executed");
    }
    inner();
    console.log("outer continue....")
}

outer();
OBJECTS:  
object can be created 
1. directly (meth 1 in index.js file)
2. using factory function
whenever we want to create an obj we can simply call this factory function
it creates and returns the object 
3. using construcor function
constructor function follows Pascal Notation --> first letter of every word is a capital --> ex:NumberOfStudents
coonstructor function -> initializes/ defines the prop/methods
"this" keyword in constructor function==> refers to current obj
"new" keyword in object creation ==> refers a new object creation

****************************************************
OBJECT CLONING : (file name: index3.js)
there are 3 ways to clone an obj
1. Iteration
2. Assign  ==> let destination_Obj = Object.assign({}, source_obj)
3. Spread  ==> let destination_Obj= {....sourceObj}


*****************************************************
Garbage Collection:
1. runs automatically in background
2. we have no control over garbage collector
3. finds out the varioble and constants that are not in use and de-allocates its space


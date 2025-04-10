// getters are used to access the properties
// setters are used to change or update properties

let person={
    fname:'ding',
    lname: 'dong',
    get fullname(){
        return `${person.fname} ${person.lname}`;
    },
    set fullname(value){
        let parts= value.split(' ')
        this.fname= parts[0];
        this.lname= parts[1];
    }
};

console.log(person.fullname)

// try and catch
// we acn write a block of code inside a try block. if that code throws any error then the error will be catch by catch block
// in the above program we need to send a string to set the fname and lname. lets use try and catche to catch the error incase of string not passed to set fullname
let person2={
    fname:'ding',
    lname: 'dong',
    get fullname(){
        return `${person2.fname} ${person2.lname}`;
    },
    set fullname(value){
        if (typeof value != 'string'){
            throw new Error("you have not sent a string");
        }
        let parts= value.split(' ')
        this.fname= parts[0];
        this.lname= parts[1];
    }
};

try{
    person2.fullname=true;
}
catch(e){
    alert(e);
}

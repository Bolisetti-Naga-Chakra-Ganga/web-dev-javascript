// CALL, CLASS, CONSTRUCTOR, INHERITANCE


/*
function setUsername(username){
    this.username=username
    console.log("called",this.username)
}

// call 
function createuser(username,email,password){
    setUsername(this,username)
    this.email=email
    this.password=password

}
const chai= new createuser("chai", "chai@fb.com","123")
console.log(chai)
*/


// *************classes*************
/*
class user{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }
    encryption(){  //method
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("chai", "chai@gmail", "1323")
console.log(chai.encryption());
console.log(chai.changeUsername());
*/


/*
//behind the scene
function user(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
user.prototype.encryption= function(){  //method
    return `${this.password}abc`
}
user.prototype.changeUsername= function(){
    return `${this.username.toUpperCase()}`
}
const chai=new user("chai", "chai@gmail", "1323")
console.log(chai.encryption());
console.log(chai.changeUsername());
*/


//*********** inheritance************ */
//extends and super key word
class user{
    constructor(username){
        this.username=username
    }
    login(){
        console.log(`username is ${this.username}`)
    }
}
class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log("a new course was added")
    }
}
const chai1=new teacher("chai", "chai@gmail", "1323")
const chai2=new user("chai")
chai1.addcourse()
console.log(chai1 instanceof user)
console.log(chai2 instanceof user)
console.log(chai1 instanceof teacher)
console.log(chai2 instanceof teacher)

/*
class User{
    constructor(email, password){
        this.email =email;
        this.password=password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){  // method name shoud be same 
        this._email=value; // "_ " is neccessary 
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value;
    }
}
const hitesh= new User("hitesh","abc");
console.log(hitesh.password);
console.log(hitesh.email);

*/
/*
// old version method 

function User(email, password){
    this._email =email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email=value
        }
    })
}
const hitesh= new User("hitesh","abc");
console.log(hitesh.email);
*/

// using obj (old and rare)
const User3={
    _email:'h@hc.com',
    _password:"abc",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email =value
    }
}

const tea= Object.create(User3)
console.log(tea.email)

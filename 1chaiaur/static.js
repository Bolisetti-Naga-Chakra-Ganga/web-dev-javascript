class user{
    constructor(username){
        this.username=username
    }
    login(){
        console.log(`username is ${this.username}`)
    }
    static createID(){  
        return 123
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }
}

const hitesh= new user("hitesh")
// console.log(hitesh.createID)
const ph= new teacher("iphone", "i@phon.com", "iphone")
ph.login()
console.log(ph.createID())
class User{
    // #password
    constructor(name){
        this.username = name
    }
    signup(email,password){
        let isValidated = this.isValidated(email,password)
        if(isValidated){
            this.email = email
            this.password = password
            alert("SignUp Succesfull")            
        }else{
            alert('SignUp failed')
        }
    }
    isValidated(username,password){
        return this.#isUsernameValidated(username) && this.#isPasswordvalidated(password)
    }
    #isUsernameValidated(username){
        return true
    }
    #isPasswordvalidated(password){
        return true
    }
}
// student
class Student extends User{
    constructor(name,id){
        super(name)
        this.id = id
    }   
}
// admin
class Admin extends User{
    #admin_key='1234'
    constructor(name){
        super(name)
    }
    validateAdmin(key){
        return this.#admin_key == key
    }
}
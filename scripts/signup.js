var studentArr = JSON.parse(localStorage.getItem('studentUser')) || []
var adminArr = JSON.parse(localStorage.getItem('adminUser')) || []
document.querySelector('form').addEventListener('submit',()=>{
    adduser()
});

disableAdminKey = ()=>{ 
    let admin = document.getElementById('admin_key')
    let student = document.getElementById('student_id')
    let type = document.getElementById('user-type').value
    if(type=='admin'){
        admin.disabled = false
        student.disabled = true
    }else{
        admin.disabled = true
        student.disabled = false
    }
}


adduser = ()=>{
    event.preventDefault()
    let form = document.getElementById('user_data')
    let userType = document.getElementById('user-type').value
    let name = form.fullname.value
    let email = form.email.value
    let password = form.password.value  
    if(name==''||email==''||password==''||userType==''){
        alert('Invalid Details')
        return
    }
    if(userType=='student'){
        let id = form.student_id.value
        let student = new Student(name,id)
        if(!verfiedDuplicate(email)){
            return
        }
        student.signup(email,password)        
        studentArr.push(student)
        localStorage.setItem('studentUser',JSON.stringify(studentArr))
        // console.log(student)
        window.location.href='./login.html'
    }else{
        let admin_key = form.admin_key.value
        let admin = new Admin(name)
        if(!admin.validateAdmin(admin_key)) {
            alert('Invalid Admin Key')
            return
        }
        if(!verfiedDuplicate(email,)){
            return  
        }  
        admin.signup(email,password)            
        adminArr.push(admin)
        localStorage.setItem('adminUser',JSON.stringify(adminArr))
        // console.log(admin)
        window.location.href='./login.html'
    }
}
verfiedDuplicate=(email)=>{
    for(let ele of studentArr){
        let {email:useremail} = ele
        if(email==useremail){
            alert('User Details Already Exists') 
            return false
        }
       
    }
    for(let ele of adminArr){
        let {email:useremail,id} = ele
        if(email==useremail){
            alert('User Details Already Exists')  
            return false
        }
        
    }
    return true
}
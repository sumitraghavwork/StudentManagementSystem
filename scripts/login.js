var studentArr = JSON.parse(localStorage.getItem('studentUser')) || []
var adminArr = JSON.parse(localStorage.getItem('adminUser')) || []
let loginStatus = JSON.parse(localStorage.getItem('loggedUser')) || []
document.getElementById('user_data').addEventListener('submit',()=>{
    login()
});
login = ()=>{
    event.preventDefault()
    let form = document.getElementById('user_data')
    let userType = document.getElementById('user-type').value
    let useremail = form.email.value
    let userpassword = form.password.value  
    if(email==''||password==''||userType==''){
        alert('Invalid Details')
        return
    }
    if(userType=='student'){
        for(let ele of studentArr){
            let {email,password} = ele
            if(useremail==email && userpassword==password){
                let temp = [ele]
                localStorage.setItem('loggedUser',JSON.stringify(temp))
                alert('login succesful')
                window.location.href='./student/student.html'
                return
            }
        }
        alert('Invalid Details')
    }else{
        for(let ele of adminArr){
            let {email,password} = ele
            if(useremail==email && userpassword==password){
                let temp = [ele]
                localStorage.setItem('loggedUser',JSON.stringify(temp))
                alert('login succesful')
                window.location.href='./admin/admin.html'
                return
            }
        }
        alert('Invalid Details')
    }
}
let loginStatus = JSON.parse(localStorage.getItem('loggedUser')) || []
window.addEventListener('load',()=>{
    addUserDetails(loginStatus)
})
addUserDetails=(arr)=>{
    let user_name = document.getElementById('user-name')
    user_name.innerText = `${arr[0].username}`
}
logout=()=>{
    loginStatus.pop()
    localStorage.setItem('loggedUser',JSON.stringify(loginStatus))
    window.location.href='../login.html'
}

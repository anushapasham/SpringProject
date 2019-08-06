
function  verifyDetails(){
    var username = document.getElementById("loginUsername").value
    var password = document.getElementById("loginPassword").value
    if(username == null || username === ''){
        alert("username is empty")
    }
    if(password == null || password === ''){
        alert("Password is empty")
    }
    console.log("good to go")
}
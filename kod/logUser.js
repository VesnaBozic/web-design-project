
let users = JSON.parse(localStorage.getItem("users"));

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(i=0; i<users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
          let loggedUser = users[i];
          localStorage.setItem('loggedUser',JSON.stringify(loggedUser));
          window.location.replace("user.html");  
        }
    }
}








function getInfoAdmin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var objAdmins = JSON.parse(window.localStorage.getItem('admins'));
    for(i=0; i<objAdmins.length; i++) {
        if(username == objAdmins[i].username && password == objAdmins[i].password) {
          window.location.replace("adminLog.html");  
        }
    }
}







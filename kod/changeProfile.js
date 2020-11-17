let users = JSON.parse(localStorage.getItem("users"));
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

function changeData(){
let newName =  document.getElementById('changed-user-name').value;
let newSurname =  document.getElementById('changed-user-surname').value;
let newUsername = document.getElementById('changed-user-username').value;
let newPass =  document.getElementById('changed-user-password').value;

    if (newName.trim()=="" || newSurname.trim()=="" || newUsername.trim() =="" || newPass.trim()=="" ) {
        alert("You need to complete all fields");
        return;
    }
    for(i=0; i<users.length; i++) {
        if(loggedUser.username == users[i].username && loggedUser.password == users[i].password){
          
          
         users[i].name = newName;
         users[i].surname = newSurname;
         users[i].username = newUsername;
         users[i].password =  newPass;
         localStorage.setItem("users", JSON.stringify(users));
         loggedUser.name = newName;
         loggedUser.surname = newSurname;
         loggedUser.username = newUsername;
         loggedUser.password = newPass;
         localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
         
         location.replace("myProfile.html")



}}}
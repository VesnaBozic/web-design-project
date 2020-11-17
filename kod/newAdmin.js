var objAdmins = JSON.parse(localStorage.getItem('admins'));


function addNewAdmin(){
    var newUsername = document.getElementById("username-new-admin").value;
    var newPassword = document.getElementById("password-new-admin").value;
    let newAdmin = {username: newUsername,
        password: newPassword}
    
    for(i=0; i<objAdmins.length; i++) {
        if(newUsername == objAdmins[i].username || newPassword == objAdmins[i].password) {
          alert("This admin already exist! Try again!") ;
          
          return; 
        }}
        
        objAdmins.push(newAdmin);
        localStorage.setItem('admins',JSON.stringify(objAdmins));
        
       
    }
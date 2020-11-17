let users = JSON.parse(localStorage.getItem("users"));



function register(){
    let name = document.getElementById('user-name').value;
    let surname = document.getElementById('user-surname').value;
    let username = document.getElementById('user-username').value;
    let password = document.getElementById('user-password').value;

    let newUser = {
        name: name,
        surname: surname,
        username: username,
        password: password,
        myMovies: [],
        money:0}
    if(name.trim()=="" || surname.trim()=="" || username.trim()=="" || password.trim()==""){
        alert("You need to complete all fields");
        return;
    }

    for(let i=0; i<users.length; i++) {
        if(users[i].username==username){
            alert("This user already exist!");
            return;
        }
    }

  
    
users.push(newUser);
localStorage.setItem("users", JSON.stringify(users));
location.replace('loging.html');
}



let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));


let name = document.getElementById('user-name').innerText = loggedUser.name;
let surname = document.getElementById('user-surname').innerText = loggedUser.surname;
let username = document.getElementById('user-username').innerText = loggedUser.username;
let pass = document.getElementById('user-pass').innerText = loggedUser.password;

function change(){
    window.location.replace('changeProfile.html');
}


let movies =JSON.parse(localStorage.getItem('movies'));
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
let users = JSON.parse(localStorage.getItem("users"));

let a = localStorage.getItem("counterR"); 

document.getElementById('movie-image').src = movies[a].src;
document.getElementById('movie-name').innerText =movies[a].name;
document.getElementById('buyer').innerText = loggedUser.name + " " + loggedUser.surname;
document.getElementById('price').innerText = movies[a].price;
let movieToReturn = movies[a].id;

document.getElementById('date').innerText = new Date().toISOString().slice(0, 10);


let btn = document.getElementById('btn');

function returnMovie(){
    for(let i=0; i< loggedUser.myMovies.length; i++){
        if(loggedUser.myMovies[i] == movieToReturn) {
            const index = loggedUser.myMovies.indexOf(loggedUser.myMovies[i]);
            if(index >-1) {
                loggedUser.myMovies.splice(index,1);
                localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
                for(a=0; a<users.length; a++) {
                    if(loggedUser.username == users[a].username && loggedUser.password == users[a].password){
                        users[a].myMovies = loggedUser.myMovies;
                        localStorage.setItem("users", JSON.stringify(users));
                        alert("You sucessfully returned movie!")
                        location.replace('myMovies.html');
                    }}
                      
                
            }
        }
    }
}

btn.onclick = returnMovie;
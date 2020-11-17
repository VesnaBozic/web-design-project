function fun1() {
let sMovie = document.querySelector('input').value;
window.localStorage.setItem('wordToSearch', sMovie);
if(sMovie.length >= 1) {
    window.location.replace("findMovies.html"); 
}
}



document.querySelector('button').onclick = fun1;



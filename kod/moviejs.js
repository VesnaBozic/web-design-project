let movies =JSON.parse(localStorage.getItem('movies'));

let a = localStorage.getItem("counterImg"); 
 
document.getElementById('movie-image').src = movies[a].src;
document.getElementById('movie-name').innerText =movies[a].name;
document.getElementById('movie-genre').innerText =movies[a].genre;
document.getElementById('movie-year').innerText =movies[a].year;
document.getElementById('movie-director').innerText =movies[a].director;
document.getElementById('movie-description').innerText =movies[a].description;









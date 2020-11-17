var movies = JSON.parse(localStorage.getItem('movies'));
var directors = JSON.parse(localStorage.getItem('directors'));

function addMovie(){
    var movieTitle = document.getElementById('new-movie-title').value;
    var movieGenre = document.getElementById('new-movie-genre').value;
    var movieYear = document.getElementById('new-movie-year').value;
    var movieDirector = document.getElementById('new-movie-director').value;
    var moviePrice = document.getElementById('new-movie-price').value;
    var movieDescription = document.getElementById('description-box').value;
    var movieImage = document.getElementById('new-movie-image').value;
    var directorImage =document.getElementById("new-director-pic").value;
    
    if (movieTitle.trim()=="" || movieGenre.trim()=="" || movieYear.trim() =="" ||
    movieDirector.trim()=="" || moviePrice.trim()=="" || movieDescription.trim()=="" || 
    movieImage.trim() =="") {
        alert("You need to complete all fields");
        return;
    }

    let newMovie = {
        id:movies.length,
        src: movieImage,
        name: movieTitle,
        genre: movieGenre,
        year:movieYear,
        director:movieDirector,
        price: moviePrice,
        description: movieDescription
    }

    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));
    let a=0;
    for(let i =0; i<directors.length; i++){
    if(movieDirector == directors[i].name) {
        a++;
        
    }}
    if(a ==0) {
        let newDirector = {
            name: movieDirector,
            src: directorImage
        }
        directors.push(newDirector);
    localStorage.setItem("directors", JSON.stringify(directors));
    }
    window.location.replace("adminLog.html");

}
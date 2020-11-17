var movies = JSON.parse(localStorage.getItem('movies'));

function changeMovieData(){
    var changeTitle = document.getElementById('change-movie-title').value;
    var changeGenre = document.getElementById('change-movie-genre').value;
    var changeYear = document.getElementById('change-movie-year').value;
    var changeDirector = document.getElementById('change-movie-director').value;
    var changePrice = document.getElementById('change-movie-price').value;
    var changeDescription = document.getElementById('description-box').value;
    var changeImage = document.getElementById('change-movie-image').value;
    
    if (changeTitle.trim()=="" || changeGenre.trim()=="" || changeYear.trim() =="" ||
    changeDirector.trim()=="" || changePrice.trim()=="" || changeDescription.trim()=="" || 
    changeImage.trim() =="") {
        alert("You need to complete all fields");
        return;
    }
    
    let i = localStorage.getItem('movieChange');
    movies[i].src = changeImage;
    movies[i].name = changeTitle;
    movies[i].genre = changeGenre;
    movies[i].year = changeYear;
    movies[i].director = changeDirector;
    movies[i].price = changePrice;
    movies[i].description = changeDescription;
    localStorage.setItem("movies", JSON.stringify(movies));
    location.reload();
}

let users = JSON.parse(localStorage.getItem("users"));
let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));

function addMovie() {
     
    let totalAmount =0;
    for(i=0; i<users.length; i++) {
        if(loggedUser.username == users[i].username && loggedUser.password == users[i].password){
          
          
        
         
         let movies = JSON.parse(localStorage.getItem("movies"));


        
         let counterMovie = 0;
         movies.forEach(movie => {
             let body = document.getElementsByTagName("body")[0];
             let divShowCaseLast;
             if(counterMovie%5==0){
                 let divShowCase = document.createElement("div");
                 divShowCase.id="showcase";
                 divShowCaseLast = divShowCase;
             }
             else{
                 divShowCaseLast = body.children[body.children.length-1];
             }
             for(let i=0; i< loggedUser.myMovies.length; i++) {
                 if(loggedUser.myMovies[i] == movie["id"]){
            
             let divsliderBox = document.createElement("div");
             divsliderBox.className = "slider-box";
             let pTime = document.createElement("p");
             pTime.className="time";
             pTime.innerHTML = movie["genre"];
             divsliderBox.appendChild(pTime);
             let imgBox = document.createElement("div");
             imgBox.className ="img-box";
             imgBox.id = movie["id"];
             let picLink =document.createElement("a");
             picLink.href="movieUser.html";
             let imgMovie = document.createElement("img");
             imgMovie.src = movie["src"];
             picLink.appendChild(imgMovie);
             imgBox.appendChild(picLink);
             divsliderBox.appendChild(imgBox);
             let pDetail = document.createElement("p");
             pDetail.className = "detail";
             pDetail.innerHTML = movie["name"];
             let price = document.createElement('a');
             price.innerHTML = "Receipt"
             price.href="receipt.html";
             price.className ="receipt";
             price.id= movie["id"];
            
             pDetail.appendChild(price);
             divsliderBox.appendChild(pDetail);
             let cart = document.createElement("div");
             cart.className="cart";
             let deleteMovie = document.createElement("a");
             deleteMovie.href ="#";
             deleteMovie.innerHTML = "Watch";
             cart.appendChild(deleteMovie);
             divsliderBox.appendChild(cart);
             divShowCaseLast.appendChild(divsliderBox);
             console.log(divShowCaseLast)
             body.appendChild(divShowCaseLast);
            
             let amount = (document.getElementById('money'));
            
             totalAmount += parseFloat(movie["price"]); 
             amount.innerHTML = totalAmount.toFixed(2);
             counterMovie+=1;
             }
             }})}}


}

addMovie();


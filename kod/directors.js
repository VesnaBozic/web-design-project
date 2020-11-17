

let directors = JSON.parse(localStorage.getItem("directors"));

function createDirector(){
    let counterDirector = 0;
    directors.forEach(director => {
        let body = document.getElementsByTagName("body")[0];
        let divShowCaseLast;
        if(counterDirector%5==0){
            let divShowCase = document.createElement("div");
            divShowCase.id="showcase";
            divShowCaseLast = divShowCase;
        }
        else{
            divShowCaseLast = body.children[body.children.length-1];
        }
        let divsliderBox = document.createElement("div");
        divsliderBox.className = "slider-box";
        
      
        let imgBox = document.createElement("div");
        imgBox.className ="img-box";
        let picLink =document.createElement("a");
        picLink.href="directorUser.html";
        let imgMovie = document.createElement("img");
        imgMovie.className ="imgs";
        imgMovie.id = director["name"];
        imgMovie.src = director["src"];
        picLink.appendChild(imgMovie);
        imgBox.appendChild(picLink);
        divsliderBox.appendChild(imgBox);
        let pDetail = document.createElement("p");
        pDetail.className = "detail";
        pDetail.innerHTML = director["name"];
       
        divsliderBox.appendChild(pDetail);
    
        divShowCaseLast.appendChild(divsliderBox);
        console.log(divShowCaseLast)
        body.appendChild(divShowCaseLast);
    
    
    
        counterDirector+=1;

    });
}

createDirector();


let imgs = document.querySelectorAll('.img-box');
function ls(i){
  
    localStorage.setItem('director',directors[i].name);
}
        
for (let i=0; i<imgs.length; i++) {

imgs[i].addEventListener("click",() => {ls(i)});
}
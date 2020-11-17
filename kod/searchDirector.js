let directors = JSON.parse(localStorage.getItem("directors"));

function createSelect () {
    directors.forEach(director =>{
        let select = document.getElementById('select');
        let option =document.createElement("option");
        option.value = director["name"];
        option.innerHTML = director["name"];
        select.appendChild(option);
    })
}


createSelect();

function getDirector(){
let s = document.getElementById('select');
var dir = s.options[s.selectedIndex].text;
localStorage.setItem('director', dir);
location.replace("directorUser.html")

}
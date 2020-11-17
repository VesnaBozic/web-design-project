var directors = JSON.parse(localStorage.getItem('directors'));

function addDirector(){
    var directorName = document.getElementById('new-director-name').value;
    var directorPic = document.getElementById('new-director-image').value;

    if(directorName.trim() =="" || directorPic.trim() == "") {
        alert("You need to complete all fields!");
        return;
    }
    let a=0;
    for(let i =0; i<directors.length; i++){
        if(directorName == directors[i].name) {
            a++;
            alert("This director already exist!")
            
        }}
        if(a ==0) {
            let newDirector = {
                name: directorName,
                src: directorPic
            }
            directors.push(newDirector);
             
    localStorage.setItem("directors", JSON.stringify(directors));
    window.location.replace("adminLog.html");
        }
            
        }
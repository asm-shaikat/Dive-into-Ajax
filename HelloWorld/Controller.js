let viewtext = document.getElementById("viewtext");
let txthere = document.getElementById("txthere");
viewtext.addEventListener('click',ShowView);

function ShowView(){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function(){
        document.getElementById("txthere").innerHTML =this.responseText;
    }
    xhttp.open("GET","data.txt",true);
    xhttp.send(this.responseText);
}
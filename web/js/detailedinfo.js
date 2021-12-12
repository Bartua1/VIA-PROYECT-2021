"use strict";

let urlParams = new URLSearchParams(window.location.search);
let id = urlParams.get("id");


function main() {
  if (id==2){
    document.getElementById("frec").innerHTML="☑ 8x4.0Ghz";
    document.getElementById("storage").innerHTML="☑ 5TB (Mirred) Storage";
    document.getElementById("ram").innerHTML="☑ 32GB Available RAM";
    document.getElementById("bandwidth").innerHTML="☑ 45TB Bandwidth";
    document.getElementsByClassName("dedicated")[0].src="http://localhost:8080/web/images/sr750.png";
    document.getElementById("btndetailed").setAttribute('onclick',  "location.href=`detailedinfo.html?id=2`");
  }
}


document.addEventListener("DOMContentLoaded", main);

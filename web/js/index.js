"use strict";

import { messageRenderer } from "/js/renderers/messages.js";

function main(){
  let nexts = document.getElementsByClassName("next");
  let next = nexts[0];
  let prevs = document.getElementsByClassName("prev");
  let prev = prevs[0];
  next.onclick = changeContent;
  prev.onclick = changeContent;
}


function changeContent(event){
  if (document.getElementsByClassName("dedicated")[0].src=="http://localhost:8080/web/images/sr650.png"){
    document.getElementById("frec").innerHTML="☑ 8x4.0Ghz";
    document.getElementById("storage").innerHTML="☑ 5TB (Mirred) Storage";
    document.getElementById("ram").innerHTML="☑ 32GB Available RAM";
    document.getElementById("bandwidth").innerHTML="☑ 45TB Bandwidth";
    document.getElementsByClassName("dedicated")[0].src="http://localhost:8080/web/images/sr750.png";
    document.getElementById("btndetailed").setAttribute('onclick',  "location.href=`detailedinfo.html?id=2`");
  }
  else{
    document.getElementById("frec").innerHTML="☑ 4x3.3Ghz";
    document.getElementById("storage").innerHTML="☑ 1TB (Mirred) Storage";
    document.getElementById("ram").innerHTML="☑ 16GB Available RAM";
    document.getElementById("bandwidth").innerHTML="☑ 15TB Bandwidth";
    document.getElementsByClassName("dedicated")[0].src="http://localhost:8080/web/images/sr650.png";
    document.getElementById("btndetailed").setAttribute('onclick',  "location.href=`detailedinfo.html?id=1`");
  }
}

document.addEventListener("DOMContentLoaded", main);



window.onload = init;


function init(){
  document.querySelector("#id_h2").innerHTML = "js rule 222";
  document.querySelector("#id_h2").style.color = "red";
  document.querySelector("#id_h2").style.background = "yellow"
  changeImg();
}
function changeImg(){
   document.querySelector("#id_img").src = "images/pic2.jpg";
   document.querySelector("#id_img").width = 500;
}
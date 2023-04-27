window.onload = init;

function init(){
  // אירועים שנאזין להם מהבאדי
  declareEvents();
}

function declareEvents(){
  let blue_btn =  document.querySelector("#blue_btn");
  blue_btn.addEventListener("click",changeH2Blue)
}

function changeH2Red(){
  document.querySelector("#id_h2").style.background = "red";
}

function changeH2Blue(){
  document.querySelector("#id_h2").style.background = "blue";
}
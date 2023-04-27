window.onload=init;
function init(){
    declareEvents();
}
function declareEvents(){
    let cake_btn =  document.querySelector("#cake_btn");
    let cofee_btn =  document.querySelector("#cofee_btn");
    let tea_btn =  document.querySelector("#tea_btn");
    cake_btn.addEventListener("click",changeImg);
    cofee_btn.addEventListener("click",changeImg1);
    tea_btn.addEventListener("click",changeImg2);
  }
  function changeImg(){
    document.querySelector("#id_img").src="images/pic1.jpg";
  }
  function changeImg1(){
    document.querySelector("#id_img").src="images/pic3.jpg";
  }
  function changeImg2(){
    document.querySelector("#id_img").src="images/pic2.jpg";
  }
// מאזין בהתחלה לטעינת העמוד ואז מפעיל פונקציה אנונמית
let lives = 5;
let score = 100;
let name = "mario";
let add=5;
let a=-1
window.onload = function(){

  // score = score + 5;
  score += 5;
  // score += 1;
  score++;
  // score = 200;
  document.querySelector("#id_lives").innerHTML = lives;
  document.querySelector("#id_score").innerHTML = score;
  document.querySelector("#id_name").innerHTML = name;
  // score=500;
  declareEvents();
  
}

function declareEvents(){
   let add_btn = document.querySelector("#add_btn")
   let reduce_btn = document.querySelector("#reduce_btn")

  // לחיצה על הכפתור אד תוסיף 5 נקודות
   add_btn.addEventListener("click", function(){
    score+=5;
    document.querySelector("#id_score").innerHTML = score;
       });
 
 reduce_btn.addEventListener("click", function(){
    score--;
    document.querySelector("#id_score").innerHTML = score;
       });
  // לחיצה על הכפתור רדיוס תוריד נקודה אחת
  

}

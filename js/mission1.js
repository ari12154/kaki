let w =300 ;
window.onload = function () {
    decler();

}
function decler() {
    let id_p = document.querySelector("#id_p");
    let id_m = document.querySelector("#id_m");

    id_m.addEventListener("click", function(){
        w -= 10;
        if (w < 200) {
            w = 200;
        }
        document.querySelector("#id_img").width = w;
    })
    
    id_p.addEventListener("click", function () {
        w += 10;
        if (w > 400) {
            w = 400;
        }
        document.querySelector("#id_img").width = w;
    })
   
}


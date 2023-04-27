window.onload = function () {
    decler();
}




function decler() {
    let h1 = document.querySelector("#id_h1");
    let id_select = document.querySelector("#id_select");
    id_select.addEventListener("click", function () {
        h1.style.color=id_select.value;
        h1.innerHTML=("enter your favorit color:");
    
    })
}
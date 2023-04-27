window.onload = function () {

    decler();
}

function decler() {
    let btn_usa = document.querySelector("#id_usa");
    let btn_uk = document.querySelector("#id_uk");
    let btn_france = document.querySelector("#id_france");
    let btn_israel = document.querySelector("#id_israel");
    let img = document.querySelector("#id_img");

    btn_usa.addEventListener("click", function () {
        img.src = "images/pic1.jpg";
    })
    btn_uk.addEventListener("click", function () {
        img.src = "images/pic2.jpg";
    })
    btn_france.addEventListener("click", function () {
        img.src = "images/pic3.jpg";
    })
    btn_israel.addEventListener("click", function () {
        img.src = "images/pic4.jpg";
    })

}
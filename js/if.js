window.onload = function () {
    declretn();
}

function declretn() {
    let input = document.querySelector("#id_input");
    let span = document.querySelector("#id_span");

    input.addEventListener("input", function () {
        if (input.value > 28) {
            span.innerHTML = "hot!";
            span.style.color = "red";
        }
        else {
            span.innerHTML = "ok!";
            span.style.color = "green";
        }

    })
};
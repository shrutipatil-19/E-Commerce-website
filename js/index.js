window.addEventListener("load", function () {
    setTimeout(
        function open(event) {
            document.querySelector(".lid").style.transform = "rotateZ(10deg)";
            document.querySelector(".lid").style.top = "-25px";
            document.querySelector(".lid").style.left = "10px";
        },
        1000
    )
})
window.addEventListener("load", function () {
    setTimeout(
        function close(event) {
            document.querySelector(".lid").style.transform = "rotateY(10deg)";
            document.querySelector(".lid").style.top = "0px";
            document.querySelector(".lid").style.left = "0px";
        },
        10000
    )
})

let loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
})
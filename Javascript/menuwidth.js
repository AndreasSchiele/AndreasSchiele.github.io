
var x = window.matchMedia("(max-width: 640px)")

function openNav() {
if (x.matches) {
        document.getElementById("myNav").style.width = "100%";
} else {
        document.getElementById("myNav").style.width = "30%";
}
}

function closeNav() {
document.getElementById("myNav").style.width = "0%";
}
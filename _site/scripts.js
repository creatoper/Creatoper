// var myDiv = $('.post-preview[1]');
// myDiv.text(myDiv.text().substring(0, 420) + '...')


function searchPage() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}



var modal = document.getElementById("myModal");
var modalContent = document.getElementsByClassName("modal-content")[0];
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var opened = false;
btn.onclick = function () {
    if (opened == false) {
        modal.style.visibility = "visible";
        modalContent.style.left = "var(--left-bar-width)";
        opened = true;
    } else {
        modal.style.visibility = "hidden";
        modalContent.style.left = "calc(-50vw + var(--left-bar-width)/2)";
        opened = false;
    }
}
window.onclick = function (event) {
    if (event.target == modal) {
        if (opened == false) {
            modal.style.visibility = "visible";
            modalContent.style.left = "var(--left-bar-width)";
            opened = true;
        } else {
            modal.style.visibility = "hidden";
            modalContent.style.left = "calc(-50vw + var(--left-bar-width)/2)";
            opened = false;
        }
    }
}
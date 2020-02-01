var open = false;

function toggle() {
    var menuItems = document.getElementsByTagName('nav');
    if (!open) {
        document.getElementById('hamburger').innerHTML = '&#9932;';
        open = true;
        menuItems[0].classList.add('hiddenMenu');
    } else {
        document.getElementById('hamburger').innerHTML = '&#9776;';
        open = false;
        menuItems[0].classList.remove('hiddenMenu');
    }
}
var open = false;

function toggle() {
    var menuItems = document.getElementsByTagName('ul');
    if (!open) {
        document.getElementById('hamburger').innerHTML = '&#9932; Close';
        open = true;
        menuItems[0].classList.add('hiddenMenu');
    } else {
        document.getElementById('hamburger').innerHTML = '&#9776; Menu';
        open = false;
        menuItems[0].classList.remove('hiddenMenu');
    }
}
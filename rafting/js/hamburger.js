// Make menu items clickable
$("document").ready(function(){
    $("#hamburger").click(function(){
        $("#menu").slideToggle();
    });
    $("#logo").click(function(){
        window.location.href = 'index.html';
    });
    $("#awesome").click(function(){
        window.location.href = 'adventure_one.html';
    });
    $("#epic").click(function(){
        window.location.href = 'adventure_two.html';
    });
    $("#supreme").click(function(){
        window.location.href = 'adventure_three.html';
    });
    $("#guides").click(function(){
        window.location.href = 'guides.html';
    });
    $("#contact").click(function(){
        window.location.href = 'contact.html';
    });
    $("#registration").click(function(){
        window.location.href = 'registration.html';
    });
    $("#book").click(function(){
        window.location.href = 'registration.html';
    });
});
  
// toggle menu
var mQuery = window.matchMedia("(max-width: 42em)")
hide(mQuery) 
mQuery.addListener(hide) 
function hide(mQuery) {
    if (mQuery.matches) { 
        $("#menu").css("display", "none");
    } else {
        $("#menu").css("display", "flex");
    }
}
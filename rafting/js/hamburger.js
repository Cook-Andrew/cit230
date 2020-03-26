$("document").ready(function(){
    $("#hamburger").click(function(){
        $("#menu").slideToggle();
    });
});
  
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
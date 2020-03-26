$("document").ready(function(){
    $("#hamburger").click(function(){
        $("#menu").slideToggle();
    });
});
function hide(mQuery) {
    if (mQuery.matches) { // If media query matches
        $("#menu").css("display", "none");
    } else {
        $("#menu").css("display", "flex");
    }
  }
  
  var mQuery = window.matchMedia("(max-width: 42em)")
  hide(mQuery) // Call listener function at run time
  mQuery.addListener(hide) // Attach listener function on state changes
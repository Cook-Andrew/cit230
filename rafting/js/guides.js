$(document).ready(function(){
    $.getJSON("js/guides.json", function(result){
        var guidesObj = result;
        guidesObj.guides.forEach(guide => {
            var head = $("<h3></h3>").text(guide.name);
            var photo = $("<img alt='Guide portrait'/><br/>").attr("src", guide.picture);
            var certification = $("<br/><span></span>").text("Certification: " + guide.certification);
            var experience = $("<br/><span></span>").text("Experience: " + guide.experience);
            var email = $("<br/><span></span>").text("Email: " + guide.email);
            var biography = $("<br/><span></span><br/><br/>").text("Bio: " + guide.biography);
            $(".container").append(head, photo, certification, experience, email, biography);
        });
    });
    
});
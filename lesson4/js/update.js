update();
function update() {
    var today = new Date();
    document.getElementById("currentYear").innerHTML = today.getFullYear();
    document.getElementById("lastMod").innerHTML = "last modified: " + document.lastModified;
  }
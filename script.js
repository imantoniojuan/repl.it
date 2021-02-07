// A function to display a message
function sayHello() {
  var x = Math.floor((Math.random() * 4));
  var names = ["Nathan","Luke","Adriel","Cody"];
  alert("Hello " + names[x] + "!");
}

function showTime() {
    document.getElementById('dateElement').innerHTML = Date();
}

function showHideChicken() {
  if (document.getElementById("imageElement").style.display === "none") {
    document.getElementById("imageElement").style.display = "block";
  }
  else{
    document.getElementById("imageElement").style.display = "none";
  }
}

window.onload = function(){ 
    // Call function on click of the button
    document.getElementById("helloButton").onclick = sayHello;
    document.getElementById("dateButton").onclick = showTime;
    document.getElementById("imageButton").onclick = showHideChicken;
};
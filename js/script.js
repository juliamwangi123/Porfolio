let menu = document.getElementsByClassName("fa fa-bars");
let showMenu = document.getElementsByClassName("menuBar")
menu.addEventListiner("click", 

function show(){
    
    if (showMenu.style.display === "block") {
        showMenu.style.display = "none";
      } else {
        showMenu.style.display = "block";
      }
});
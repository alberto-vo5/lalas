// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction(x)};
window.onload = function() {
  if (x.matches){
    document.getElementById("nav").classList.remove("fixed-top");
  }
}

function scrollFunction(x) {
  if (x.matches){
    
  } else {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 50) {
      document.getElementById("hero").style.padding = "0px 10px";
      document.getElementById("logo-img").style.height = "80px";
    } else {
      document.getElementById("hero").style.padding = "0px 15px";
      document.getElementById("logo-img").style.height = "150px";
    }
}
}

var x = window.matchMedia("screen and (max-width: 736px)");


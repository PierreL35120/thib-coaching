"use strict";

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.height = "70px ";
    document.getElementById("logo").style.height = "100px";
    document.getElementById("presentation").style.fontSize = "0.8rem";
    document.getElementById("prestation").style.fontSize = "0.8rem";
    document.getElementById("partenariat").style.fontSize = "0.8rem";
    document.getElementById("contact").style.fontSize = "0.8rem";
    document.getElementById("hr1").style.display = "none";
  } else {
    document.getElementById("navbar").style.height = "290px ";
    document.getElementById("logo").style.height = "210px";
    document.getElementById("presentation").style.fontSize = "1rem";
    document.getElementById("prestation").style.fontSize = "1rem";
    document.getElementById("partenariat").style.fontSize = "1rem";
    document.getElementById("contact").style.fontSize = "1rem";
    document.getElementById("hr1").style.display = "block";

  }
}

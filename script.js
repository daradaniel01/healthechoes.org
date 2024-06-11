
    window.onscroll = function() {scrollFunction()};
 
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("navbar").style.background = "#fff";
    document.getElementById("nav").style.color = "black";
    document.getElementById("deco").style.color = "black";
    document.getElementById("deco1").style.color = "black";
    document.getElementById("deco2").style.color = "black";
    document.getElementById("deco3").style.color = "black";
    document.getElementById("deco4").style.color = "black";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("nav").style.color = "#fff";
    document.getElementById("deco").style.color = "#fff";
    document.getElementById("deco1").style.color = "#fff";
    document.getElementById("deco2").style.color = "#fff";
    document.getElementById("deco3").style.color = "#fff";
    document.getElementById("deco4").style.color = "#fff";
  }
}

$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}

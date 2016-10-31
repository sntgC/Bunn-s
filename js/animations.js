window.onscroll = function() {navBarScroll()};
function navBarScroll(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        //document.getElementById("header").style.background="#5bc0be";
		//document.getElementById("header").style.background="#FF5900";
		//document.getElementById("header").style.background="#96e569";
		//document.getElementById("header").style.background="#e1e512";
		document.getElementById("header").style.background="#efd139";
    } else {
        //document.getElementById("header").style.background = "rgba(91, 192, 190,0)";
		document.getElementById("header").style.background = "rgba(255, 89, 0,0)";
    }
}
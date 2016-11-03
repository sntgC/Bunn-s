window.onscroll = function() {navBarScroll()};
function navBarScroll(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("header").style.background="#efd139";
		document.getElementById("headerLogo").className = "navTitle noSelect logoSolid";
    } else {
		document.getElementById("header").style.background = "rgba(255, 89, 0,0)";
		document.getElementById("headerLogo").className = "navTitle noSelect logoClear";
    }
}
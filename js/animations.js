window.onscroll = function() {navBarScroll()};
function navBarScroll(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.background="#5bc0be"
    } else {
        document.getElementById("header").style.background = "rgba(91, 192, 190,0)";
    }
}
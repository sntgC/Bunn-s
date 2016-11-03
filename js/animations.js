var template;

window.onscroll = function() {navBarScroll();};

window.onload = function(){
	var source   = $("#menu-template").html();
	console.log(source);
	template = Handlebars.compile(source);
	document.getElementById("menuMainContent").innerHTML=template(menuObj);
};

function navBarScroll(){
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("header").style.background="#efd139";
		document.getElementById("headerLogo").className = "navTitle noSelect logoSolid";
    } else {
		document.getElementById("header").style.background = "rgba(255, 89, 0,0)";
		document.getElementById("headerLogo").className = "navTitle noSelect logoClear";
    }
}

function scroll(menuID){
	$('html, body').animate({
								scrollTop: $("#"+menuObj.choices[menuID].type).offset().top-90
								}, 800*Math.cbrt(menuID+1), function(){
	});
}

function switchMenu(menuID){
	/*document.getElementById("menuMainContent").innerHTML=template(menuObj[menuID]);
	scroll();
	DEPRECATED
	*/
}

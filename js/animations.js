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

window.onload = function(){	
	var source   = $("#menu-template").html();
	console.log(source);
	var template = Handlebars.compile(source);
	var obj={row:[
							{entry:[
								{name:"a", image:"assets/city.jpg"},
								{name:"b", image:"assets/city.jpg"},
								{name:"c", image:"assets/city.jpg"}
							]},
							{entry:[
								{name:"a", image:"assets/city.jpg"},
								{name:"d", image:"assets/burger.jpg"},
								{name:"c", image:"assets/city.jpg"}
							]}
						]};
	console.log(template(obj));
	document.getElementById("menuMainContent").innerHTML=template(obj);
}

function scroll(){
	$('html, body').animate({
								scrollTop: $("#menuMainContent").offset().top
								}, 800, function(){
	});
}
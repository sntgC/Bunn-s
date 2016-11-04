var template;

$(document).ready(function(){
	var offset = 300;
	var duration = 750;
	$(window).on('scroll',function(){
		if($(this).scrollTop() > offset){
			$('.back-to-top').fadeIn(duration);
		}
		else{
			$('.back-to-top').fadeOut(duration);
		}
	});
	$(".back-to-top").on('click',function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop : 0}, duration);
		return false;
	});
});

window.onscroll = function() {navBarScroll();};

window.onload = function(){
	var source   = $("#menu-template").html();
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

function slideTo(containerID, slideIndex, animate){
	if(animate){
		if(slideIndex<document.getElementsByClassName("slide").length){
			var buttons=document.getElementsByClassName("slideButton");
			for(i=0;i<buttons.length;i++)
				if(i!=slideIndex)
					buttons[i].className="slideButton sBInactive";
				else
					buttons[i].className="slideButton sBActive";
			$('#'+containerID).animate({
								left: ""+(slideIndex*-100)+"%"
								}, 800, function(){
			});
		}
	}
}

function switchMenu(menuID){
	/*document.getElementById("menuMainContent").innerHTML=template(menuObj[menuID]);
	scroll();
	DEPRECATED
	*/
}

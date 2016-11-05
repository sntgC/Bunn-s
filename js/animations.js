var template;
var slideInterval;
var currentSlideIndex = 0;
var lastSlideIndex = 1;

$(document).ready(function(){
	//Animation of the back-to-top button
	var offset = 300;
	var duration = 750;
	$(window).on('scroll',function(){
		if($(this).scrollTop() > offset){
			$('.back-to-top').fadeIn(duration);
		}
		else{
			$('.back-to-top').fadeOut(250);
		}
	});
	$(".back-to-top").on('click',function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop : 0}, duration);
		return false;
	});
	//Automated timed slide for the slideshow on the index page
	lastSlideIndex=document.getElementsByClassName("slide").length-1;
	slideInterval = window.setInterval(nextSlide,8000);
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

function nextSlide(){
	if(currentSlideIndex == lastSlideIndex){
		currentSlideIndex = -1;
	}
	slideTo('homePageContainer', ++currentSlideIndex, true);
}

function scroll(menuID){
	$('html, body').animate({
								scrollTop: $("#"+menuObj.choices[menuID].type).offset().top-90
								}, 800*Math.cbrt(menuID+1), function(){
	});
}

function slideTo(containerID, slideIndex, animate){
	currentSlideIndex=slideIndex;
	if(animate){
		if(slideIndex<document.getElementsByClassName("slide").length){
			var buttons=document.getElementsByClassName("slideButton");
			for(i=0;i<buttons.length;i++)
				if(i!=slideIndex)
					buttons[i].className="slideButton sBInactive";
				else
					buttons[i].className="slideButton sBActive";
			clearInterval(slideInterval);
			slideInterval = setInterval(nextSlide, 8000);
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

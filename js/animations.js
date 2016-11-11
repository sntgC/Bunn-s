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

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
		previousSlide();
    }
    else if(event.keyCode == 39) {
        nextSlide();
    }
});

window.onload = function(){
	var source   = $("#menu-template").html();
	template = Handlebars.compile(source);
	document.getElementById("menuMainContent").innerHTML=template(menuObj);
};

function navBarScroll(){
	var logo=document.getElementById("header");
	var logoWhite=document.getElementById("headerWhite");
	var navs=document.getElementsByClassName("navTitle");
	var links=document.getElementsByClassName("makeYellow");
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		if(logo!==null)
			logo.style.background="#efd139";
		if(logoWhite!==null){
			logoWhite.style.background="#efefef";
			for(i=0;i<navs.length;i++){
				navs[i].style.color="#efd139";
			}
			for(i=0;i<links.length;i++){
				links[i].style.color="#efd139";
			}
		}
		document.getElementById("headerLogo").className = "navTitle noSelect logoSolid";
		if(window.location.href=="http://localhost/fbla/"){
			document.getElementById("headerLogo").style.opacity=1;
		}
    } else {
		if(logo!==null)
			logo.style.background = "rgba(255, 89, 0,0)";
		if(logoWhite!==null){
			logoWhite.style.background = "rgba(255, 89, 0,0)";
			for(i=0;i<navs.length;i++){
				navs[i].style.color="white";
			}
			for(i=0;i<links.length;i++){
				links[i].style.color="white";
			}
		}
		document.getElementById("headerLogo").className = "navTitle noSelect logoClear";
		if(window.location.href=="http://localhost/fbla/"){
			document.getElementById("headerLogo").style.opacity=0;
		}
    }
}

function nextSlide(){
	if(currentSlideIndex == lastSlideIndex){
		currentSlideIndex = -1;
	}
	slideTo('homePageContainer', ++currentSlideIndex, true);
}

function previousSlide(){
	if(currentSlideIndex === 0){
		currentSlideIndex = lastSlideIndex+1;
	}
	slideTo('homePageContainer', --currentSlideIndex, true);
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

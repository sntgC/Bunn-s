
var template;
var slideInterval;
var currentSlideIndex = 0;
var lastSlideIndex = 1;

$(document).ready(function () {
	//Animation of the back-to-top button
	var offset = 300;
	var duration = 750;
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').fadeIn(duration);
		} else {
			$('.back-to-top').fadeOut(250);
		}
	});
	//Adds swipe capability to front page
	var slideContainers=document.getElementsByClassName("slideContainer");
	for (i = 0; i < slideContainers.length; i++) {
		var mc = new Hammer(slideContainers[i]);
		// listen to events...
		mc.on("swipeleft", function (ev) {
			nextSlide(true);
		});
		mc.on("swiperight", function (ev) {
			previousSlide(true);
		});
	}
	$(".back-to-top").on('click', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, duration);
			return false;
	});
	//Automated timed slide for the slideshow on the index page
	lastSlideIndex = document.getElementsByClassName("slide").length - 1;
	slideInterval = window.setInterval(nextSlide, 8000);
});

window.onscroll = function() {navBarScroll();};

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
		previousSlide(true);
    }
    else if(event.keyCode == 39) {
        nextSlide(true);
    }
});

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
			logoWhite.style.boxShadow="0 4px 8px 0 rgba(0,0,0,0.4269)";
			for(i=0;i<navs.length;i++){
				navs[i].style.color="#efd139";
			}
			for(i=0;i<links.length;i++){
				links[i].style.color="#efd139";
			}
		}
		document.getElementById("headerLogo").className = "navTitle noSelect logoSolid";
		$("#headerLogo a").mouseover(function(){
			$(this).css('color','#5d88ea');
		});
		$("#headerLogo a").mouseout(function(){
			$(this).css('color','#efd139');
		});
		if(window.location.href=="http://localhost/fbla/"){
			document.getElementById("headerLogo").style.opacity=1;
		}
    } else {
		if(logo!==null)
			logo.style.background = "rgba(255, 89, 0,0)";
		if(logoWhite!==null){
			logoWhite.style.background = "rgba(255, 89, 0,0)";
			logoWhite.style.boxShadow="none";
			for(i=0;i<navs.length;i++){
				navs[i].style.color="white";
			}
			for(i=0;i<links.length;i++){
				links[i].style.color="white";
			}
		}
		document.getElementById("headerLogo").className = "navTitle noSelect logoClear";
		$("#headerLogo a").mouseover(function(){
			$(this).css('color','#efd139');
		});
		$("#headerLogo a").mouseout(function(){
			$(this).css('color','white');
		});
		if(window.location.href=="http://localhost/fbla/"){
			document.getElementById("headerLogo").style.opacity=0;
		}
    }
}

function nextSlide(preventWrapping){
	if (!preventWrapping){
	if(currentSlideIndex == lastSlideIndex){
		currentSlideIndex = -1;
	}
		slideTo('homePageContainer', ++currentSlideIndex, true);
	}else{
		if(currentSlideIndex<lastSlideIndex){
			slideTo('homePageContainer', ++currentSlideIndex, true);
		}
	}
}

function previousSlide(preventWrapping){
	if (!preventWrapping){
		if (currentSlideIndex === 0) {
			currentSlideIndex = lastSlideIndex + 1;
		}
		slideTo('homePageContainer', --currentSlideIndex, true);
	}else{
		if(currentSlideIndex>0){
			slideTo('homePageContainer', --currentSlideIndex, true);
		}
	}
}

function slideTo(containerID, slideIndex, buttoned){
	currentSlideIndex=slideIndex;
	if(buttoned){
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
	}else{
		if(slideIndex<document.getElementById(containerID).children.length){
			$('#'+containerID).animate({
								left: ""+(slideIndex*-100)+"%"
								}, 400, function(){
			});
		}
	}
}

function slideToDir(containerID, dir, transitionTime){
	var left = document.getElementById(containerID).style.left;
	var curIndex=0;
	var slideCnt=document.getElementById(containerID).children.length;
	if(left!=0){//Do not change this, left is a string and i need to keep this as a == rather than === for this to work
		var shift=parseInt(left.substring(0,left.indexOf("%")));
		curIndex=shift/-100;
	}
	if(dir==="left"){
		if(curIndex == 0){
			curIndex=slideCnt;
		}
		slideTo(containerID, curIndex-1, false);
	}else if(dir==="right"){
		if(curIndex == slideCnt-1){
			curIndex=-1;
		}
		slideTo(containerID, curIndex+1, false);
	}
}

function getSlideIndex(containerID){
	var left = document.getElementById(containerID).style.left;
	var shift=parseInt(left.substring(0,left.indexOf("%")));
	if(isNaN(shift))
		shift=-0;
	return shift/-100;
}

function getSlideCount(containerID){
	return document.getElementById(containerID).children.length;
}

function setParagraphText(paragraphID, text){
	document.getElementById(paragraphID).innerHTML=text;
}

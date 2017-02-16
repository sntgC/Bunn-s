var colors=["#B3CC57","#FFBE40","#6A259A","#F53753"];
colors=["#00bb5c","#0e9dc9","#a465cb","#efd139"];
window.onload=function(){
	var fun=document.getElementsByClassName("fun");
	shuffle(colors);
	for(k=0;k<fun.length;k++)
		fun[k].style.color=colors[k%colors.length];

	var arrows=document.getElementsByClassName("tokenArrow");
	for(i=0;i<arrows.length;i++){
		$(arrows[i]).on("click",getArrowFunction(i,arrows[i]));
	}


	var tabs=document.getElementsByClassName("headerTab");
	for(i=0;i<tabs.length;i++){
		var href=$(tabs[i]).children().attr("href");
		$(tabs[i]).on("click",getHrefFunction(href));
	}
	$("#headerShell").on('click',function() {
		window.location.href="index";
	});
};

function getHrefFunction(href){
	return function(){
		window.location.href=href;
	};
}

function getArrowFunction(x, element){
	return function(){
		console.log(element.innerHTML);
		$(element).parents(':eq(2)')[0].style.transform=(element.innerHTML+"").indexOf("left")>-1?"rotateY(0deg)":"rotateY(180deg)";
		};
}

function shuffle(arr){
	for(i=arr.length-1;i>0;i--){
		var index=Math.floor(Math.random()*i);
		var temp=arr[i];
		arr[i]=arr[index];
		arr[index]=temp;
	}
}

$(document).ready(function(){
	document.getElementById("footer").innerHTML=Handlebars.templates.footer();
});

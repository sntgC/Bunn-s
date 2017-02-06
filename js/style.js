var colors=["#B3CC57","#FFBE40","#6A259A","#F53753"];
window.onload=function(){
	var fun=document.getElementsByClassName("fun");
	shuffle(colors);
	for(k=0;k<fun.length;k++)
		fun[k].style.color=colors[k%colors.length];
}

function shuffle(arr){
	for(i=arr.length-1;i>0;i--){
		var index=Math.floor(Math.random()*i);
		var temp=arr[i];
		arr[i]=arr[index];
		arr[index]=temp;
	}
}
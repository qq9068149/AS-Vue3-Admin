window.onresize = function(){
	getRem(750,100);
	};
window.onload=function(){
	getRem(750,100);
}
// getRem(750,100);
function getRem(pwidth,prem){
	var html = document.getElementsByTagName("html")[0];
	var oWidth = window.innerWidth;	
	var img0 = document.querySelector('.img0');
		var img = document.querySelector('.img');
		var img2 = document.querySelector('.img2');
	html.style.fontSize = oWidth/pwidth*prem + "px";		
	if(!/iphone|ipad|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase())){	
		img.src='images/yw.png';
		img2.src='images/yw2.png';
		html.style.fontSize="100px";
		document.querySelector('.logo').style.backgroundImage='url(images/logo2.gif)'
	}else{
		document.querySelector('.yw0').style.display='none';
		document.querySelector('.yw').style.display='none';
		document.querySelector('.yw2').style.display='none';
		document.querySelector('.logo').style.backgroundImage='url(images/logo.png)'
	}
}
/*750代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/

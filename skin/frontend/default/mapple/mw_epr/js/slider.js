
//Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
	var delayb4scroll = 1000;

//Specify marquee scroll speed (larger is faster 1-10) 
	var marqueespeed = 1;
	
//Pause marquee onMousever (0=no. 1=yes)? 
	var pauseit = 1; 
	
	var copyspeed = marqueespeed;
	var pausespeed = (pauseit==0) ? copyspeed: 0;
	var actualheight = '';
	
	function scrollmarquee(){
		if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8)){
			cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px";
		}else{
			cross_marquee.style.top=parseInt(marqueeheight)+8+"px";
		}
	}
	
	function initializemarquee(){
	
		cross_marquee = document.getElementById("epr_slider_list");
			
		cross_marquee.style.top = 0;
		
		marqueeheight = document.getElementById("epr_slider_box").offsetHeight;
		
		actualheight = cross_marquee.offsetHeight;
	
		//if Opera or Netscape 7x, add scrollbars to scroll and exit
		if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ 
			cross_marquee.style.height=marqueeheight+"px";
			cross_marquee.style.overflow="scroll";
			return;
		}
		setTimeout('lefttime=setInterval("scrollmarquee()",30)', delayb4scroll);
	}
	
	if (window.addEventListener){
		window.addEventListener("load", initializemarquee, false);
	} else if (window.attachEvent){
		window.attachEvent("onload", initializemarquee);
	} else if (document.getElementById){
		window.onload=initializemarquee ;
	}
	
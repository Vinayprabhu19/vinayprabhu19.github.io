var pos=0;
var h=0;
var vb=0;
$(document).ready(function(){
	$("#loading-screen").fadeOut(500);
	//check1();
	moveAround();
})
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
			moveLeft();
        } else {
            /* right swipe */
			moveRight();
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
			moveUp();
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
function moveAround(){
	
	$(document).on('keydown',function(e){
		switch(e.which){
			case 37:
				moveLeft();
				break;
			case 32:
				moveUp();
				break;
			case 39:
				moveRight();
			break;
		}
	
});
}
function moveDown(){
	setTimeout(function() {
  	$("#vinay").removeClass().addClass("vinay5");
	}, 200);
	while(h>72){
		h-=3;
		$("#vinay").css({"bottom":"-=3px"}).delay(100);
	}
	setTimeout(function() {
  	$("#vinay").removeClass().addClass("vinay1");
	}, 500);
	$("#vinay").css({"bottom":"72px"});
}
function moveLeft(){
	if(pos>0){
		pos-=100;
		$('#scene1-container').css({"left":"+=100"});
		$('#scene1-bcontainer').css({"left":"+=45"});
		changeVinayPosLeft();
		$('#level1').css({"left":"+=100"});
		$("#ground-container").css({"left":"+=100"});
		$('#level1-p2').css({"left":"+=100"});
		$("#level2").css({"left":"+=100"});
		$("#level3").css({"left":"+=100"});
		$("#level4").css({"left":"+=100"});
		if(pos>2300&&pos<=3900){
			$('#train').css({"left":"-=100"});
			if(pos>3100){
				$("#car").css({"left":"-=140"});
				$("#car").css({"bottom":"+=76"});
			}
		}
		var offset=$("#level2").offset();
		if(offset.left==800){
		$('#container').animate({
    	scrollTop: offset.top-1500,
    	scrollLeft: 0
		});
		if(vb==1)
			{
				$("#vinay").css({"bottom":"72px"});
				vb=0;
			}
			moveLeft();
	}
	var offset=$("#level3").offset();
	if(offset.left==900){
		$('#container').animate({
    	scrollTop: offset.top+1500,
    	scrollLeft: 0
		});
		 
			{
				$("#vinay").css({"bottom":"-1428px"});
				vb=1;
			}
	}
	var offset=$("#level4").offset();
	if(offset.left<=1100){
		//console.log(offset.left+"Hagridleft");
		$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
		//console.log("Hagrid");
		$("#hagrid-bike").css({"bottom":"0px"});
		$("#hagrid-bike").css({"left":"0px"});
		$("#vinay").css({"bottom":"72px"});
		$("#vinay").show();
		moveLeft();
		moveLeft();
		moveLeft();
	}

	}
}
function moveRight(){
	pos+=100;
	var c=$("#finish").offset();
if(c.left>=300)	
	{
	$('#scene1-container').css({"left":"-=100"});
	$('#scene1-bcontainer').css({"left":"-=45"});
	changeVinayPosRight();
	$('#level1').css({"left":"-=100"});
	$("#ground-container").css({"left":"-=100"});	
	$('#level1-p2').css({"left":"-=100"});
	$("#level2").css({"left":"-=100"});
	$("#level3").css({"left":"-=100"});
	$("#level4").css({"left":"-=100"});
	if(pos>2400&&pos<=3900){
		$('#train').css({"left":"+=100"});
		if(pos>3100){
			$("#car").css({"left":"+=140"});
			$("#car").css({"bottom":"-=76"});
		}
	}
	var offset=$("#level2").offset();
	if(offset.left==700){
		$('#container').animate({
    	scrollTop: offset.top+1500,
    	scrollLeft: 0
		});
		 
			{
				$("#vinay").css({"bottom":"-1428px"});
				vb=1;
			}
	}
	var offset=$("#level3").offset();
	if(offset.left==900){
		$('#container').animate({
    	scrollTop: offset.top-1500,
    	scrollLeft: 0
		});
		 
			{
				$("#vinay").css({"bottom":"72px"});
				vb=1;
			}
		moveRight();
	}
	var offset=$("#level4").offset();
	if(offset.left==1100){
		$("#vinay").hide();
		$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
		$("#hagrid-bike").css({"bottom":"+=300"});
		$("#hagrid-bike").css({"left":"-=400"});
	}
	if(offset.left<1100){
		$("#hagrid-bike").css({"left":"+=100"});
	}
	if(c.left==800){
		$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
		//console.log("Hagrid");
		$("#hagrid-bike").css({"bottom":"0px"});
		$("#hagrid-bike").css({"left":"0px"});
		$("#vinay").show();
		$("#vinay").css({"bottom":"150px"});
	}
	if(c.left==300){
		$("#vinay").css({"bottom":"200px"});
		$("#vinay").removeClass().addClass("vinaywr");
	}
  }
	//console.log("left "+c.left +"top "+c.top);
}
function moveUp(){
	pos+=100;
	h+=3;
	var c=$("#finish").offset();
	if(c.left>=300)	
	{
	changeVinayPosUp();
	$("#vinay").removeClass().addClass("vinay4");
	$("#vinay").css({"bottom":"+=3px"});
	$('#scene1-container').css({"left":"-=100"});
	$('#scene1-bcontainer').css({"left":"-=45"});
	$('#level1').css({"left":"-=100"});
	$("#ground-container").css({"left":"-=100"});	
	$('#level1-p2').css({"left":"-=100"});	
	$("#level2").css({"left":"-=100"});
	$("#level3").css({"left":"-=100"});
	$("#level4").css({"left":"-=100"});
	if(pos>2400&&pos<=3900){
		$('#train').css({"left":"+=100"});
		if(pos>3100){
			$("#car").css({"left":"+=140"});
			$("#car").css({"bottom":"-=76"});
		}
	}
	var offset=$("#level2").offset();
	if(offset.left==700){
		$('#container').animate({
    	scrollTop: offset.top+1500,
    	scrollLeft: 0
		});
		 
			{
				$("#vinay").css({"bottom":"-1428px"});
				vb=1;
			}
	}
	var offset=$("#level3").offset();
	if(offset.left==900){
		$('#container').animate({
    	scrollTop: offset.top-1500,
    	scrollLeft: 0
		});
		 
			{
				$("#vinay").css({"bottom":"72px"});
				vb=1;
			}
	}
	var offset=$("#level4").offset();
	if(offset.left==1100){
		$("#vinay").hide();
		$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
		$("#hagrid-bike").css({"bottom":"+=300"});
		$("#hagrid-bike").css({"left":"-=400"});
	}
	if(offset.left<1100){
		$("#hagrid-bike").css({"left":"+=100"});
	}
	if(c.left==800){
		$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
		//console.log("Hagrid");
		$("#hagrid-bike").css({"bottom":"0px"});
		$("#hagrid-bike").css({"left":"0px"});
		$("#vinay").show();
		$("#vinay").css({"bottom":"150px"});
	}
	if(c.left==300){
		$("#vinay").css({"bottom":"200px"});
		$("#vinay").removeClass().addClass("vinaywr");
	}
}
}
function changeVinayPosLeft(){
	$("#vinay").removeClass().addClass("vinay6");
	$("#vinay").removeClass("vinay6").addClass("vinay7");
	setTimeout(function() {
  		$("#vinay").removeClass("vinay7").addClass("vinay8");
		}, 300);
	setTimeout(function() {
  		$("#vinay").removeClass("vinay8").addClass("vinay6");
		}, 600);
	if(pos<1800){
		$("#vinay").fadeIn(500);
	}
	else if(pos>=1800&&pos<2100){
		$("#vinay").fadeOut(500);
	}
	else if(pos>=2100&&pos<=2400){
		$("#vinay").fadeIn(500);
	}
	else if(pos>=2400&&pos<4000){
		$("#vinay").fadeOut(500);
	}
	else if(pos>=4000){
		$("#vinay").fadeIn(500);
	}
}
function changeVinayPosUp(){
	if(pos>=1800&&pos<2100){
		$("#vinay").fadeOut(500);
	}
	if(pos==2100){
		$("#vinay").fadeIn(500);
	}
	if(pos>=2400&&pos<4000){
		$("#vinay").fadeOut(500);
	}
	if(pos==4000){
		$("#vinay").fadeIn(500);
	}
}
function changeVinayPosRight(){
	$("#vinay").removeClass().addClass("vinay1");
	 $("#vinay").removeClass("vinay1").addClass("vinay2");
	setTimeout(function() {
  		$("#vinay").removeClass("vinay2").addClass("vinay3");
		}, 300);
	setTimeout(function() {
  		$("#vinay").removeClass("vinay3").addClass("vinay1");
		}, 600);
	if(pos>=1800&&pos<2100){
		$("#vinay").fadeOut(500);
	}
	if(pos==2100){
		$("#vinay").fadeIn(500);
	}
	if(pos>=2400&&pos<4000){
		$("#vinay").fadeOut(500);
	}
	if(pos==4000){
		$("#vinay").fadeIn(500);
	}
}


function check1(){
	$('#scene1-container').css({"left":"-12700px"});
	$('#scene1-bcontainer').css({"left":"-5715px"});
	$('#level1').css({"left":"-11200px"});
	$("#ground-container").css({"left":"-12700px"});
	$('#level1-p2').css({"left":"-7700px"});
	$("#level2").css({"left":"-5700px"});
	$("#level3").css({"left":"-2200px"});
	$("#level4").css({"left":"1300px"});
	$("#vinay").css({"bottom":"72px"});
	var offset=$("#level4").offset();
	if(offset.left==1100){
		$("#vinay").hide();
		$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
		$("#hagrid-bike").css({"bottom":"+=300"});
		$("#hagrid-bike").css({"left":"-=400"});
	}
	if(offset.left<1100){
		$("#hagrid-bike").css({"left":"+=100"});
	}
}

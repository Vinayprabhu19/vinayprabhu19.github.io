var pos = 0;
var h = 0;
var vb = 0;
var screenWidth = $(window).width();
var factor=screenWidth/1920;
var finish=false;
$(document).ready(function () {
	$("#loading-screen").fadeOut(500);
	//check1();
	moveAround();
	moveRight();
	moveLeft();
})
document.addEventListener('swiped-left', function (e) {

	moveRight(); // the element that was swiped
	moveRight();
});
document.addEventListener('swiped-right', function (e) {
	moveLeft(); // the element that was swiped
	moveLeft();
});
var xDown = null;
var yDown = null;

function moveAround() {

	$(document).on('keydown', function (e) {
		switch (e.which) {
			case 37:
				moveLeft();
				break;
			case 39:
				moveRight();
				break;
		}

	});
}
function moveLeft() {
	if (pos > 0 && !finish) {
		pos -= 100*factor;
		$('#scene1-container').css({ "left": "+="+100*factor });
		$('#scene1-bcontainer').css({ "left": "+="+45*factor });
		changeVinayPosLeft();
		$('#level1').css({ "left": "+="+100*factor });
		$("#ground-container").css({ "left": "+="+100*factor });
		$('#level1-p2').css({ "left": "+="+100*factor });
		$("#level2").css({ "left": "+="+100*factor });
		$("#level3").css({ "left": "+="+100*factor });
		$("#level4").css({ "left": "+="+100*factor });
		if (pos > 2300*factor && pos <= 3900*factor) {
			$('#train').css({ "left": "-="+100*factor });
			if (pos > 3100*factor) {
				$("#car").css({ "left": "-="+140*factor });
				$("#car").css({ "bottom": "+=76"});
			}
		}
		var offset = $("#level2").offset();
		if (offset.left >= 1000*factor && offset.left<=1000*factor+75*factor) {
			$('#container').animate({
				scrollTop: offset.top - 1500,
				scrollLeft: 0
			});

			{
				$("#vinay").css({ "bottom": "72px" });
				vb = 1;
			}
			moveLeft();
		}
		var offset = $("#level3").offset();
		if (offset.left >= 1000*factor && offset.left<=1000*factor+75*factor) {
			$('#container').animate({
				scrollTop: offset.top + 1500,
				scrollLeft: 0
			});

			{
				$("#vinay").css({ "bottom": "-1428px" });
				vb = 1;
			}
			moveLeft();
		}
		var offset = $("#level4").offset();
		if (offset.left <= 1100*factor) {
			//console.log(offset.left+"Hagridleft");
			$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
			//console.log("Hagrid");
			$("#hagrid-bike").css({ "bottom": "0px" });
			$("#hagrid-bike").css({ "left": "0px" });
			$("#vinay").css({ "bottom": "72px" });
			$("#vinay").show();
			moveLeft();
		}

	}
}
function moveRight() {
	pos += 100*factor;
	var c = $("#finish").offset();
	if (c.left >= 300*factor) {
		$('#scene1-container').css({ "left": "-="+100*factor });
		$('#scene1-bcontainer').css({ "left": "-="+45*factor });
		changeVinayPosRight();
		$('#level1').css({ "left": "-="+100*factor });
		$("#ground-container").css({ "left": "-="+100*factor });
		$('#level1-p2').css({ "left": "-="+100*factor });
		$("#level2").css({ "left": "-="+100*factor });
		$("#level3").css({ "left": "-="+100*factor });
		$("#level4").css({ "left": "-="+100*factor });
		if (pos > 2400 && pos <= 3900) {
			$('#train').css({ "left": "+="+100*factor });
			if (pos > 3100) {
				$("#car").css({ "left": "+="+140*factor });
				$("#car").css({ "bottom": "-=76"});
			}
		}
		var offset = $("#level2").offset();
		if (offset.left >= 1000*factor && offset.left<=1000*factor+75*factor) {
			$('#container').animate({
				scrollTop: offset.top + 1500,
				scrollLeft: 0
			});

			{
				$("#vinay").css({ "bottom": "-1428px" });
				vb = 1;
			}
			moveRight();
		}
		var offset = $("#level3").offset();
		if (offset.left >= 1000*factor && offset.left<=1000*factor+75*factor){
			$('#container').animate({
				scrollTop: offset.top - 1500,
				scrollLeft: 0
			});

			{
				$("#vinay").css({ "bottom": "72px" });
				vb = 1;
			}
			moveRight();
		}
		var offset = $("#level4").offset();
		if (offset.left >= 1000*factor && offset.left<=1000*factor+75*factor) {
			$("#vinay").hide();
			$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
			$("#hagrid-bike").css({ "bottom": "+="+300*factor });
			$("#hagrid-bike").css({ "left": "-="+400*factor });
		}
		if (offset.left < 1100*factor) {
			$("#hagrid-bike").css({ "left": "+="+100*factor });
		}
		if (c.left >= 900*factor && c.left<=900*factor+75*factor) {
			$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
			//console.log("Hagrid");
			$("#hagrid-bike").css({ "bottom": "0px" });
			$("#hagrid-bike").css({ "left": "0px" });
			$("#vinay").show();
			$("#vinay").css({ "bottom": "150px" });
		}
		if (c.left <= 500*factor && finish==false) {
			$("#vinay").css({ "bottom": "200px" });
			$("#vinay").removeClass().addClass("vinaywr");
			$("#vinay").css({ "bottom": "200px" });
			finish=true;
		}
	}
	//console.log("left "+c.left +"top "+c.top);
}
function changeVinayPosLeft() {
	$("#vinay").removeClass().addClass("vinay6");
	$("#vinay").removeClass("vinay6").addClass("vinay7");
	setTimeout(function () {
		$("#vinay").removeClass("vinay7").addClass("vinay8");
	}, 300);
	setTimeout(function () {
		$("#vinay").removeClass("vinay8").addClass("vinay6");
	}, 600);
	if (pos < 2000) {
		$("#vinay").fadeIn(500);
	}
	if (pos >= 2000 && pos < 2050) {
		$("#vinay").fadeOut(500);
	}
	if (pos >= 2150 && pos<2170) {
		$("#vinay").fadeIn(500);
	}
	if (pos >= 2200 && pos < 4000) {
		$("#vinay").fadeOut(500);
	}
	if (pos >= 4000 && pos <= 4150) {
		$("#vinay").fadeIn(500);
	}
}

function changeVinayPosRight() {
	$("#vinay").removeClass().addClass("vinay1");
	$("#vinay").removeClass("vinay1").addClass("vinay2");
	setTimeout(function () {
		$("#vinay").removeClass("vinay2").addClass("vinay3");
	}, 300);
	setTimeout(function () {
		$("#vinay").removeClass("vinay3").addClass("vinay1");
	}, 600);
	if (pos >= 2000 && pos < 2050) {
		$("#vinay").fadeOut(500);
	}
	if (pos >= 2150 && pos<2170) {
		$("#vinay").fadeIn(500);
	}
	if (pos >= 2200 && pos < 4000) {
		$("#vinay").fadeOut(500);
	}
	if (pos >= 4000 && pos <= 4150) {
		$("#vinay").fadeIn(500);
	}
}


function check1() {
	$('#scene1-container').css({ "left": "-12700px" });
	$('#scene1-bcontainer').css({ "left": "-5715px" });
	$('#level1').css({ "left": "-11200px" });
	$("#ground-container").css({ "left": "-12700px" });
	$('#level1-p2').css({ "left": "-7700px" });
	$("#level2").css({ "left": "-5700px" });
	$("#level3").css({ "left": "-2200px" });
	$("#level4").css({ "left": "1300px" });
	$("#vinay").css({ "bottom": "72px" });
	var offset = $("#level4").offset();
	if (offset.left == 1100) {
		$("#vinay").hide();
		$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
		$("#hagrid-bike").css({ "bottom": "+="+300*factor });
		$("#hagrid-bike").css({ "left": "-="+400*factor });
	}
	if (offset.left < 1100) {
		$("#hagrid-bike").css({ "left": "+="+100*factor });
	}
}

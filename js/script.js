var pos = 0;
var h = 0;
var vb = 0;
var screenWidth = $(window).width();
var screenHeight = $(window).height();
var factorW = screenWidth / 1920;
var factorH = screenWidth / 1080;
var finish = false;
var instAnimation=false;
$(document).ready(function () {
	// $("#loading-screen").fadeOut(3500);
	//check1();
	if (screenHeight > screenWidth) {
		$('.cloud-one').css({ "top": "250px" });
		$('.cloud-two').css({ "top": "600px" });
	}


	if (screenWidth < 1300) {
		$('#banner').removeProp('bottom');
		$('#name').removeProp('bottom');
		$('#banner').css({ "left": "100px", "top": "-270px" });
		$('#name').css({ "left": "200px", "top": "-200px" });
	}
	moveAround();
	moveRight();
	moveLeft();
})
document.addEventListener('swiped-left', function (e) {

	moveRight(); // the element that was swiped
});
document.addEventListener('swiped-right', function (e) {
	moveLeft(); // the element that was swiped
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
		pos -= 100 * factorW;
		$('#scene1-container').css({ "left": "+=" + 100 * factorW });
		$('#scene1-bcontainer').css({ "left": "+=" + 45 * factorW });
		changeVinayPosLeft();
		$('#level1').css({ "left": "+=" + 100 * factorW });
		$("#ground-container").css({ "left": "+=" + 100 * factorW });
		$('#level1-p2').css({ "left": "+=" + 100 * factorW });
		$("#level2").css({ "left": "+=" + 100 * factorW });
		$("#level3").css({ "left": "+=" + 100 * factorW });
		$("#level4").css({ "left": "+=" + 100 * factorW });
		$("#finish").css({ "left": "+=" + 100 * factorW });
		if (pos > 2300 * factorW && pos <= 3900 * factorW) {
			$('#train').css({ "left": "-=" + 100 * factorW });
			if (pos > 3100 * factorW) {
				$("#car").css({ "left": "-=" + 140 * factorW });
				$("#car").css({ "bottom": "+=76" });
			}
		}
		var offset = $("#level2").offset();
		if (offset.left >= 1000 * factorW && offset.left <= 1000 * factorW + 75 * factorW) {
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
		if (offset.left >= 1000 * factorW && offset.left <= 1000 * factorW + 75 * factorW) {
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
		if (offset.left <= 1100 * factorW) {
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
	pos += 100 * factorW;
	if (!finish) {
		$('#scene1-container').css({ "left": "-=" + 100 * factorW });
		$('#scene1-bcontainer').css({ "left": "-=" + 45 * factorW });
		changeVinayPosRight();
		$('#level1').css({ "left": "-=" + 100 * factorW });
		$("#ground-container").css({ "left": "-=" + 100 * factorW });
		$('#level1-p2').css({ "left": "-=" + 100 * factorW });
		$("#level2").css({ "left": "-=" + 100 * factorW });
		$("#level3").css({ "left": "-=" + 100 * factorW });
		$("#level4").css({ "left": "-=" + 100 * factorW });
		$("#finish").css({ "left": "-=" + 100 * factorW });
		if (pos > 2400 && pos <= 3900) {
			$('#train').css({ "left": "+=" + 100 * factorW });
			if (pos > 3100) {
				$("#car").css({ "left": "+=" + 140 * factorW });
				$("#car").css({ "bottom": "-=76" });
			}
		}
		var offset = $("#level2").offset();
		if (offset.left* factorW >= 2600 * factorW && offset.left* factorW <= 2600 * factorW + 75 * factorW && instAnimation==false) {

			instAnimation=true;
			$("#work1")
				.css({ bottom: "2000px", position: 'absolute' })
				.animate({ bottom: "350px" }, 800, function () {
					$("#college1")
						.css({ bottom: "2000px", position: 'absolute' })
						.animate({ bottom: "350px" }, 800, function () {
							$("#college2")
								.css({ bottom: "2000px", position: 'absolute' })
								.animate({ bottom: "350px" }, 800, function () {
									//callback
								});
						});
				});

		}
		if (offset.left >= 1000 * factorW && offset.left <= 1000 * factorW + 75 * factorW) {
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
		if (offset.left >= 1000 * factorW && offset.left <= 1000 * factorW + 75 * factorW) {
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
		if (offset.left >= 1000 * factorW && offset.left <= 1000 * factorW + 75 * factorW) {
			$("#vinay").hide();
			$("#hagrid-bike").removeClass().addClass("hagrid-bike2");
			$("#hagrid-bike").css({ "bottom": "+=" + 300 * factorW });
			$("#hagrid-bike").css({ "left": "-=" + 400 * factorW });
		}
		if (offset.left < 1100 * factorW) {
			$("#hagrid-bike").css({ "left": "+=" + 100 * factorW });
		}
		var c = $("#finish").offset();
	console.log(c.left);
		if (c.left >= 900 * factorW && c.left <= 900 * factorW + 75 * factorW) {
			$("#hagrid-bike").removeClass().addClass("hagrid-bike1");
			//console.log("Hagrid");
			$("#hagrid-bike").css({ "bottom": "0px" });
			$("#hagrid-bike").css({ "left": "0px" });
			$("#vinay").show();
			$("#vinay").css({ "bottom": "72px" });
		}
		if (c.left <= 0 * factorW && finish == false) {
			$("#vinay").css({ "bottom": "72px" });
			$("#vinay").removeClass().addClass("vinaywr");
			 finish = true;
			 moveRight();
			 moveRight();
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
	if (pos >= 2150 && pos < 2170) {
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
	if (pos >= 2150 && pos < 2170) {
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
		$("#hagrid-bike").css({ "bottom": "+=" + 300 * factorW });
		$("#hagrid-bike").css({ "left": "-=" + 400 * factorW });
	}
	if (offset.left < 1100) {
		$("#hagrid-bike").css({ "left": "+=" + 100 * factorW });
	}
}

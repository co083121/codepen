function on() {
	document.getElementById("overlay").style.display = "block";
}
function off() {
	document.getElementById("overlay").style.display = "none";
}
$("#no-effect").click(function() {
	if ($("#no-animation").hasClass("show")) {
		$("#no-animation").removeClass("show");
	} else {
		$("#no-animation").addClass("show");
	}
});
$("#slide-effect").click(function() {
	if ($("#slide-animation").hasClass("show")) {
		$("#slide-animation").removeClass("show");
	} else {
		$("#slide-animation").addClass("show");
	}
});
$("#one-effect").click(function() {
	if ($("#one-by-one").hasClass("show")) {
		$("#one-by-one").removeClass("show");
	} else {
		$("#one-by-one").addClass("show");
	}
});
$("#trans-effect").click(function() {
	if ($("#top-translate").hasClass("show")) {
		$("#top-translate").removeClass("show");
	} else {
		$("#top-translate").addClass("show");
	}
});
$("#scale-effect").click(function() {
	if ($("#top-scale").hasClass("show")) {
		$("#top-scale").removeClass("show");
	} else {
		$("#top-scale").addClass("show");
	}
});

function main() {
	window.setTimeout(function () {
		document.getElementById("index-text").style.display = "block";
		document.getElementById("pa-examples").style.display = "inline-block";
		document.getElementById("index-exp").setAttribute("style", "font-size: 300%; margin: 0.5em 0 0 70%;");
		document.getElementById("page-break-a").style.display = "block";
		var j = 0;
		var delay = 3000;
		function cycleThru(){
	     	var jmax = $("ul#pa-flip li").length -1;
	     	$("ul#pa-flip li:eq(" + j + ")")
	        	.animate({"opacity": "1", "height": "3em"}, 600)
	        	.animate({"opacity" : "1", "height": "3em"}, delay)
	        	.animate({"opacity" : "0", "height": "0"}, 600, function(){
	            	(j == jmax) ? j=0 : j++;
	            	cycleThru();
	        	});
		};
	cycleThru();

	}, 4000); 
}

$(document).ready(main);
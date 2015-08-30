function main() {

/*	$("#attorney-square [id*='index'] img").hover(function() {
			$(this).next().css({'display': 'block', 'background': '#BE3100', 'width': '250px'});
		}, function () {
			$(this).next().css('display', 'none');
		}
	);*/

	var j = 0;
	var delay = 4000;
	function cycleThru(){
	     var jmax = $("ul#pa-flip li").length -1;
	     $("ul#pa-flip li:eq(" + j + ")")
	        .animate({"opacity": "1", "height": "2em"}, 600)
	        .animate({"opacity" : "1", "height": "2em"}, delay)
	        .animate({"opacity" : "0", "height": "0"}, 600, function(){
	            (j == jmax) ? j=0 : j++;
	            cycleThru();
	        });
	};
	cycleThru();

 

}

$(document).ready(main);
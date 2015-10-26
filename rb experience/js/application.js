function main() {
	/*window.setTimeout(function () {
		var x = document.getElementsByClassName("text-block");
		var i;
		for (i = 0; i < x.length; i++) {
    		x[i].style.display = "block";
		}
		//document.getElementsByClassName("text-block").style.display = "block";
		// document.getElementById("pa-examples").style.display = "inline-block";
		//document.getElementById("index-exp").setAttribute("style", "font-size: 300%; margin: 0.5em 0 0 70%;");
		document.getElementById("page-break-a").style.display = "block";*/
		var j = 0;
		var delay = 2000;
		function cycleThru(){
	     	var jmax = $("ul#pa-flip li").length -1;
	     	$("ul#pa-flip li:eq(" + j + ")")
	        	.animate({"opacity": "1", "height": "20em"}, 600)
	        	.animate({"opacity" : "1", "height": "20em"}, delay)
	        	.animate({"opacity" : "0", "height": "0"}, 600, function(){
	            	(j == jmax) ? j=0 : j++;
	            	cycleThru();
	        	});
		};
	cycleThru();

	//}, 4000); 

/*var pushLeft = new Menu({
  wrapper: '#o-wrapper',
  type: 'push-left',
  menuOpenerClass: '.c-button',
  maskId: '#c-mask'
});

var pushLeftBtn = document.querySelector('#c-button--push-left');

pushLeftBtn.addEventListener('click', function(e) {
  e.preventDefault;
  pushLeft.open();
});*/


}

$(document).ready(main);
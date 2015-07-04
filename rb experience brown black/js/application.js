function main() {

	$("#attorney-square [id*='index'] img").hover(function() {
			$(this).next().css({'display': 'block', 'background': '#BE3100', 'width': '250px'});
		}, function () {
			$(this).next().css('display', 'none');
		}
	);

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

 

	function playVideo() { 
		$("#index-vid").removeClass("hidden");    
	   $("#vid-pic").css('display', 'none');
	   var vid = $("#index-vid");
	    vid.controls = false;
	    vid.load();
	    vid.on('ended',function(){
		$("#vid-pic").css('display', 'inline-block');    
	   	$(vid).css('display', 'none');
		});
	} 
	playVideo();


/*<script type="text/javascript">
var video= $('#myvideo')[0]; 
var videoJ= $('#myvideo');        
videoJ.on('ended',function(){
    video.load();     
});
</script>*/



}

$(document).ready(main);
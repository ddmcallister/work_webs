//This starts plays a video on load and starts a second video after
//the first on ends. 


	function playVideo() { 
		$("#index-vid-a").removeClass("hidden");    
	   	$("#vid-pic").css('display', 'none');
	   	$("#index-vid-b").css('display', 'none');
	   	var vid = $("#index-vid-a");
	    vid.controls = false;
	    vid.load();
	    vid.on('ended',function(){
	    	$(vid).css('display', 'none');
			$("#index-vid-b").css('display', 'inline-block');
			var vidb = $("#index-vid-b");
			vidb.controls = false;
	    	vidb.load();
	    	vidb.on('ended',function(){    
	   			$(vidb).css('display', 'none');
				$("#vid-pic").css('display', 'inline-block');
			});
	}); 

	}
	playVideo();
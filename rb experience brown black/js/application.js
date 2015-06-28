function main() {
	$("#attorney-square [id*='index'] img").hover(function() {
		$(this).next().css('display', 'inline');
	}, function () {
		$(this).next().css('display', 'none');
	}

		);

/*var i = 0;
$('ul').each(function() {
    //var hide_after = $(this).children().length;
    $(this).children().each(function(counter) {

            .delay(++i * 2000)
            .animate({top:0, opacity:1})
            //.delay((hide_after - counter) * 2000)
			.delay(2000)
            .animate({bottom:'100%', opacity: 0});
    });
});*/
/*	var i = $('li').length;
	 $('li').each(function() {
		if ($(this.i).css("opacity", "0")) {
			$(this.i).css("opacity", "1");
		} else {
			$(this.i).css("opacity", "0");
		}
	// 	$('li'.i).fadeIn();
	// 	$('li'.i).fadeIn();
	// 	//$(this).fadeIn();
 //        //$(this).fadeOut();
	// 	});
});*/
	}

$(document).ready(main);
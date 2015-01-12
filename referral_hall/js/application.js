function main() {

	$('.floatlabel').focus(function() {
		$(this).addClass('test');
		$(this).next().addClass('active');
	});

	$('.floatlabel').blur(function(){
  		if($(this).val() == '' || $(this).val() == 'blank' || $(this).val() == 'null'){
		$(this).next().removeClass();
		}
	});
}

$(document).ready(main);

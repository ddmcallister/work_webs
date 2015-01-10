function main() {

	$('.floatlabel').focus(function() {
		//$(this).off('hover');
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


/*window.onload = function() {
	var seal = document.getElementById("seal");
	TweenLite.to(seal, 2, {left:"300px"});
	//TweenLite.to(seal, 2, {rotation:"-360", transformOrigin:"0% 100%"});
}*/

/*var test = document.getElementById("name");
name.onfocus = function() {
	var namemove = document.getElementById("lname");

	TweenLite.to(namemove, 2, {rotation:"-360", transformOrigin:"0% 100%"});
}*/

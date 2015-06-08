function main() {

checkSize();

$(window).resize(checkSize);

	$('.client_divide').hover(
		function() {
			$(this).next().removeClass('erase');
			var one_header = document.getElementsByClassName("client_divide");
			if ($(this)[0] !== one_header[0]) {
				$('#employer_index').addClass('erase');
			} else {
				$('#employee_index').addClass('erase')
			}
			$(".index_menus").css({"margin-top": "-8em", "margin-left": "-6em"});
		}, function() {
			$(this).next().addClass('erase');
			$('.client_divide').removeClass('invis');
		}
	);


    $('.top_nav_wr').burgerMenu({
		buttonBg: '#ccb261', 
		buttonWidth: '50px',
		buttonHeight: '50px',
		linkSelector: 'a',
		linkText: function($a){ return $a.text() },
		fixed: false,
		hideInitialNav: true,
		animateSpeed: 0,
		hideOnBodyClick: true,
		showUntilWidth: 640,
		top: 0,
		lineColor: '#83362c',
		position: 'right',
		overlay: '#ccb261'
    });



}

$(document).ready(main);



function checkSize() {
    if ($(".right-c").css("text-align") == "center") {
    	$('.right-col').insertBefore('.left-col');
    	console.log("hey hey");
    }
}





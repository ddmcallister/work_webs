function main() {

checkSize();

$(window).resize(checkSize);

	$('#employer_index').hover(
		function() {
			$('#employer_pa').removeClass('invis');
			$('#employer_pa').addClass('pa');
			$('#employee_index').addClass('invis');
		}, function () {
			$('#employer_pa').addClass('invis');
			//$('#employer_pa').addClass('pa');
			$('#employee_index').removeClass('invis');
		});


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





function main() {

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
		fixed: true, // set to true if the burger menu has to follow the window scroll
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
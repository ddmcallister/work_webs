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

}

$(document).ready(main);
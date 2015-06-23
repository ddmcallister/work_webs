function main() {

	$('#employer-index').hover(
		function() {
			$('#employer-pa').removeClass('invis');
			$('#employer-pa').addClass('pa');
			$('#employee-index').addClass('invis');
		}, function() {
			$('#employer-pa').addClass('invis');
			//$('#employer-pa').addClass('pa');
			$('#employee-index').removeClass('invis');
		});

		$('#employee-index').hover(
		function() {
			$('#employee-pa').removeClass('invis');
			$('#employee-pa').addClass('pa');
			$('#employer-index').addClass('invis');
		}, function () {
			$('#employee-pa').addClass('invis');
			//$('#employer-pa').addClass('pa');
			$('#employer-index').removeClass('invis');
		});

$("a").hover(
	function() {
  		$(this).css("color", "#ffffff");
  		console.log("hey hey");
	}, function() {
		$(this).css("color", "#FF8C16");
});

}

$(document).ready(main);




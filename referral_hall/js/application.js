function main() {

	$('.floatlabel').focus(function() {
		$(this).addClass('test');
		$(this).next().addClass('active');
	});

	$('.floatlabel').blur(function() {
  		if($(this).val() == '' || $(this).val() == 'blank' || $(this).val() == 'null'){
		$(this).next().removeClass();
		}
	});

	$('.specialties').click(function() {
		$(this).toggleClass('spec-select');
	});

	var reqArr = [];
	$('#spec-line').val(' ');
	$('#save').click(function() {
	    var selected = document.getElementsByClassName("spec-select");
	    var num = document.getElementById("quantity").value;
		$.each(selected, function(index, value) {
			reqArr.push(value.id);
	    });
		var requestLine = "number: " + num + "; specialties: " + reqArr.join(", ");

		var newcontent = $('<textarea>').text(requestLine).addClass('confirmed');
		console.log($(newcontent).val());

		if ($('#spec-line').val() == ' ') {
			$('#spec-line').val(newcontent.val());
		} else {
			$('#spec-line').val($('#spec-line').val() + " " + (newcontent.val()));
		}

		$('#request_one').append(newcontent);
		$('.specialties').removeClass('spec-select');
		reqArr = [];
		$('#quantity').val('');
		var testy = document.getElementById("spec-line");
		console.log(testy);
	});

$('#clear').click(function() { 
	//$('.confirmed').empty();
	$('.confirmed').remove();
	$('#spec-line').val(' ');
	console.log("doing something");
	var testy = document.getElementById("spec-line");
	console.log(testy);

}); 
/*

	$('input[name="spec-line"]').removeData();
	$('#request_one > div').val('');
	var testy = document.getElementById("spec-line");
	console.log(testy);
	 	});*/

}

$(document).ready(main);

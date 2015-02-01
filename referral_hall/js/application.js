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

	var tempArray = [];
	$('.specialties').click(function() {
		tempArray = [];
		$(this).toggleClass('spec-select');
		var highlighted = document.getElementsByClassName('spec-select');
		console.log(highlighted);
		$.each(highlighted, function(index, value) {
			tempArray.push(value.id);
	    });
	    var prettify = tempArray.join(", ")
		var tempconf = document.getElementById("clicked-reqs");
		tempconf.innerHTML="current specialties: " + prettify;
		$('#clicked-reqs').next().show();
	});

	var reqArr = [];
	$('#save').click(function() {
		$('#spec-line').val(' ');
	    var selected = document.getElementsByClassName("spec-select");
	    var num = document.getElementById("quantity").value;
	    if (num == 0) {
	    	alert("Please select a number of workers");
	    	return;
	    }

		$.each(selected, function(index, value) {
			reqArr.push(value.id);
	    });
		var requestLine = "number of mechanics: " + num + "; specialties: " + reqArr.join(", ");

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
		$('#clicked-reqs').html('');
		$('#num-line').toggle();
		var testy = document.getElementById("spec-line");
		console.log(testy);
	});

$('#clear').click(function() { 
	$('.confirmed').remove();
	$('#spec-line').val(' ');
	console.log("doing something");
	var testy = document.getElementById("spec-line");
	console.log(testy);

}); 

$('.summary').click(function() {
	$(this).next().toggle();
	$(this).find('i').toggleClass('fa-caret-down fa-caret-up');
	$(this).next().addClass('.live');
});

}

$(document).ready(main);

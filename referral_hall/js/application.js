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

	var target = document.getElementById("request_one");
    var initDiv = document.createElement("div");
    initDiv.className = "request_conf";

	$('#save').click(function() {
		var reqArr = [];
		var heyhey = document.getElementsByClassName("spec-select");
		for (i=0; i<heyhey.length; i++) {
			$.each(heyhey, function(index, value) {
				reqArr.push(value.id);
				var dupElim = _.uniq(reqArr);
				var num = document.getElementById("quantity").value;
				initDiv.innerHTML = "number: " + num + "; specialties: " + dupElim.join(", ");
        		target.appendChild(initDiv);
        		$('input[name="spec-line"]').val($(initDiv).html());
        		var testy = document.getElementById("spec-line");
				console.log(testy);
			});
		}
	});

//below clears form, need to figure out how to add new request line
	 $('#add').click(function() {
	 		$('.specialties').removeClass('spec-select');
	 		$('#quantity').val('');

	 	}
	 		);


}




	// 	$('#spec-button').click(function() {


	// 	}
	// 		)



$(document).ready(main);

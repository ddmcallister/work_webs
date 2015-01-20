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
$('#save').click(function() {
    var selected = document.getElementsByClassName("spec-select");
    var num = document.getElementById("quantity").value;
    for (i=0; i<selected.length; i++) {
		$.each(selected, function(index, value) {
			reqArr.push(value.id);
        });
    }
	var dupElim = _.uniq(reqArr);
    var testTarg = document.getElementById("request_one");
    var newcontent = document.createElement('div');
    newcontent.innerHTML = "number: " + num + "; specialties: " + dupElim.join(", ");

	while (newcontent.firstChild) {
		request_one.appendChild(newcontent.firstChild);
	}
	$('.specialties').removeClass('spec-select');
	reqArr = [];
	$('#quantity').val('');
});

$('#add').click(function() {

	 	});

/* 	$('#spec-button').click(function() {
		$('input[name="spec-line"]').val($('#request_one').html());
		var testy = document.getElementById("spec-line");
		console.log(testy);
 	});*/

 	$('#submit').click(function() {
		$('input[name="spec-line"]').val($('#request_one').html());
		var testy = document.getElementById("spec-line");
		console.log(testy);
 	});

}





$(document).ready(main);

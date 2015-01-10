/*function test() { 
var aD = document.getElementsByClassName("controls");
console.log(aD);
var b = [];
	function innerFun() {
    for(q = 0; q < aD.length; q++) {
    b.push(aD[q].innerText);
    console.log(b);
}
innerFun();
    }
}
test();*/

function main() {


	$('.floatlabel').click(function() {
		$(this).next().addClass('active');
	});

	$('.floatlabel').blur(function(){
  		//$(this).next().css('opacity', '1');
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

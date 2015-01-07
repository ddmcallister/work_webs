/*(function($){
	function floatLabel(inputType){
		$(inputType).each(function(){
			var $this = $(this);

			$this.focus(function(){
				$this.next().addClass("active");
			});
			//on blur check field and remove class if needed
			$this.blur(function(){
				if($this.val() === '' || $this.val() === 'blank'){
					$this.next().removeClass();
				}
			});
		});
	}
	// just add a class of "floatLabel to the input field!"
	floatLabel(".floatLabel");
})(jQuery);*/

window.onload = function() {
	var seal = document.getElementById("seal");
	TweenLite.to(seal, 2, {left:"300px"});
	//TweenLite.to(seal, 2, {rotation:"-360", transformOrigin:"0% 100%"});
}

var test = document.getElementById("name");
name.onfocus = function() {
	var namemove = document.getElementById("lname");

	TweenLite.to(namemove, 2, {rotation:"-360", transformOrigin:"0% 100%"});
}

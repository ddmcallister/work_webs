function main() {
var i = 0;
$('ul').each(function() {
    var hide_after = $(this).children().length;
    $(this).children().each(function(counter) {
        $(this)
            .delay(++i * 2000)
            .animate({left:0, opacity:1})
            .delay((hide_after - counter) * 2000)
            .animate({left:'100%', opacity: 0});
    });
});
}

$(document).ready(main);
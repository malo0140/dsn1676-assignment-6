var $showHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $dimond = $('.dimond');

$showHide.on('click', function () {
    $box.toggleClass('js-box-show');
});


var $showHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $Circle = $('.circle');

$showHide.on('click', function () {
    $box.toggleClass('js-box-show');
});

$btnMove.on('click', function () {
    $diamond.toggleClass('js-move');
});

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse');
});

$btnBounce.on('click', function () {
    $Circle.toggleClass('js-ball-bounce');   
});


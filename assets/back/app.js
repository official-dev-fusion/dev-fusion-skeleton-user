
// any CSS you import will output into a single css file (app.css in this case)
import '../styles/back/app.scss';

// start the Stimulus application
import '../bootstrap';

// jquery, popper & bootstrap
const $ = require('jquery');
window.Popper = require('popper.js');
global.$ = global.jQuery = $;
require('bootstrap');


var break_small = 768;

// sidebar
$(document).ready(function () {
    // sidebar

    var sidebarFadeInRight = function () {
        $('#sidebar').addClass('sidebar-fade-in-right');
        $('#btn_sidebar_show').css('visibility', 'hidden');
        if ($(window).width() > break_small) {
            $('#wrapper').addClass('sidebar-active');
        }
        $('#btn_sidebar_hide').focus();
    };

    var sidebarFadeOutLeft = function () {
        $('#sidebar').removeClass('sidebar-fade-in-right');
        $('#btn_sidebar_show').css('visibility', 'visible');
        $('#wrapper').removeClass('sidebar-active');
        $('#btn_sidebar_show').focus();
    };

    var sidebarInitialize = function () {
        if ($(window).width() <= break_small) {
            sidebarFadeOutLeft();
        } else {
            sidebarFadeInRight();
        }
    };

    $('#btn_sidebar_show').on('click', sidebarFadeInRight);
    $('#btn_sidebar_hide').on('click', sidebarFadeOutLeft);
    $(window).resize(sidebarInitialize);
    sidebarInitialize();
});
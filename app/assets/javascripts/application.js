// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets


function moveFooter() {

    var docHeight = $(window).height();
    var footerHeight = $('.footer').height();
    var copyrightHeight = $('.copyright-row').height();
    var footerTop = $('.footer').position().top + footerHeight + copyrightHeight;

    if (footerTop < docHeight) {
        $('.footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
    }
}

$(document).on('turbolinks:load', moveFooter);

let resizeListener;
let pause = 100;

$(window).resize(function() {
    clearTimeout(resizeListener);
    resizeListener = setTimeout(moveFooter, pause);
});
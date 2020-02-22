/* global Swiper */

'use strict';

$(document).ready(function() {
	// Mob-menu
	function openMenu() {
		var nav = $('#nav');
		var btnOpen = nav.find('.mob-menu');
		var menu = nav.find('.wrap-menu');
		var btnClose = menu.find('.close-menu');

		btnOpen.on('click', function(e) {
			e.preventDefault();
			menu.addClass('wrap-menu_active');
			nav.find('.bg').addClass('bg_active');
			if ($(document).height() > $(window).height()) {
				var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop();
				$('html').addClass('no-scroll').css('top', -scrollTop);
			}
		});

		btnClose.on('click', function(e) {
			e.preventDefault();
			menu.removeClass('wrap-menu_active');
			nav.find('.bg').removeClass('bg_active');
			var scrollTop = parseInt($('html').css('top'));
			$('html').removeClass('no-scroll');
			$('html,body').scrollTop(-scrollTop);
		});
	}
	openMenu();

	// Scroll header
	function scrollHeader() {
		var header = $('#header');

		$(window).on('scroll', function() {
			var scroll = $(this).scrollTop(); 

			if (scroll > 0) {
				header.addClass('header_opacity');
			} else if (scroll <= 0) {
				header.removeClass('header_opacity');
			}
		});
	}
	scrollHeader();

	// Forms log
	function logForms() {
		var inputs = $('.group').find('input');
		
		inputs.on('focusout', function() {
			if($(this).val() != ''){
				$(this).addClass('has-content');
			} else{
				$(this).removeClass('has-content');
			}
		});
	}
	logForms();
});
(function($) {
	'use strict';

	var nav_offset_top = $('header').height() + 50;
	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed
	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll >= nav_offset_top) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	/*----------------------------------------------------*/
	/* Start Magnific Pop Up
	/*----------------------------------------------------*/
	if ($('.img-gal').length > 0) {
		$('.img-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				zoom: true,
			}
		});
	}
	if ($('.certificate-gal').length > 0) {
		$('.certificate-gal').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				zoom: true,
			}
		});
	}
	/*----------------------------------------------------*/
	/*  End  Magnific Pop Up
	/*----------------------------------------------------*/

})(jQuery);

	/*----------------------------------------------------*/
	/*  Shorted Text
    /*----------------------------------------------------*/
	let chara = 80;
	let contents = document.querySelectorAll(".desc");

	contents.forEach(content => {
		if(content.textContent.length < chara){
			content.nextElementSibling.display = "none";
		}
		else{
			let displayText = content.textContent.slice
			(0,chara);
			let moreText = content.textContent.slice
			(chara);
			content.innerHTML = `${displayText}<span class="dot">...</span><span class="hide-text more">${moreText}</span>`;
		}
	});


	function readMore(a){
		let post = a.parentElement;

		post.querySelector(".dot").classList.toggle("hide-text");
		post.querySelector(".more").classList.toggle("hide-text");
		a.textContent == "Read More" ? a.textContent = "Read Less" : a.textContent = "Read More";
	};
	/*----------------------------------------------------*/
	/* End Shorted Text
    /*----------------------------------------------------*/

	let navActive = document.querySelectorAll("nav ul li a");
		
	window.addEventListener("scroll", event => {
		let fromTop = window.scrollY;
	  
		navActive.forEach(link => {
		  let section = document.querySelector(link.hash);
	  
		  if (
			section.offsetTop <= fromTop &&
			section.offsetTop + section.offsetHeight > fromTop
		  ) {
			link.classList.add("active");
		  } else {
			link.classList.remove("active");
		  }
		});
	  });
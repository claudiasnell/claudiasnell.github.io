/*!
 * Immediately Invoked Function Expression Boilerplate
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 */
;(function () {

	'use strict';

	// Element variables
	const menuToggle = document.querySelector('.menu-toggle');
	const navMenu = document.querySelector('.nav-menu');
	const activeMenu = document.getElementById('primary-menu');
	var body = document.body;
	body.classList.add("js");

	const elementExists = function(element) {
		if ( typeof(element) != 'undefined' && element != null ) {
			return true;
		}
		return false;
	}

	// Event functions
	const toggleMenu = function(event) {
		if ( !event.target.closest('.menu-toggle') ) return;
		if ( elementExists(navMenu) ) {
			navMenu.classList.toggle('active');
			navMenu.classList.toggle('is-active');
			activeMenu.classList.toggle('show-menu');
		}
		menuToggle.classList.toggle('active');
		menuToggle.classList.toggle('is-active');
		activeMenu.classList.toggle('show-menu');
	}
	const toggleSubMenu = function(event) {
		if ( !event.target.closest('.submenu-expand') ) return;
		event.target.closest('.submenu-expand').classList.toggle('expanded');
		event.preventDefault();
	}

	// Add functions to click event listener
	document.addEventListener('click', function(event) {
		toggleMenu(event);
		toggleSubMenu(event);
	});

})();



const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {

	let y = window.scrollY;
	if (y > 0) {
	  scrollToTopButton.className = "top-link show";
	} else {
	  scrollToTopButton.className = "top-link hide";
	}
  };


var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn");
var rootElement = document.documentElement;


function callback(entries, observer) {

  entries.forEach((entry) => {
    if (entry.isIntersecting) {

      scrollToTopBtn.classList.add("showBtn");
    } else {

      scrollToTopBtn.classList.remove("showBtn");
    }
  });
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 5,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);


let observer = new IntersectionObserver(callback);

observer.observe(target);


// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 1. Get HTML Elements
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

var toggleButton = document.querySelector('#toggle-button');
var mobileMenu      = document.querySelector('#mobile-menu');
var menuIsOpen = true



// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 2. Define Abilities (Functions)
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
function toggleMenu() {
	menuIsOpen = !menuIsOpen

	if (menuIsOpen) {
		mobileMenu.className = 'mobile-menu';
	}	else {
		mobileMenu.className = 'mobile-menu open';
	}
}

toggleButton.addEventListener('click', toggleMenu);


// * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Wire everything up
// * * * * * * * * * * * * * * * * * * * * * * * * * * *
o

"use strict";

/* To hide the block social in the netader */

const socialBlock = document.querySelector('.socials');

const burgerCheckbox = document.getElementById("site-nav-switch");
burgerCheckbox.addEventListener("change", function () {
	if (this.checked) {
		socialBlock.classList.add('hidden');
	} else {
		socialBlock.classList.remove('hidden');
	}
});
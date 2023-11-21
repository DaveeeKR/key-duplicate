const dropdownBtn = document.querySelector('.bi-list');
const navList = document.querySelector('.nav-list');
const blur = document.querySelector('header');
const blurMain = document.querySelector('main');
const navItems = document.querySelectorAll('.nav-link');

dropdownBtn.addEventListener('click', function () {
	navList.classList.toggle('active');
	blur.classList.toggle('active');
	blurMain.classList.toggle('active');
});

navItems.forEach((items) =>
	items.addEventListener('click', () => {
		navList.classList.remove('active');
		blur.classList.remove('active');
		blurMain.classList.remove('active');
	})
);

document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.nav');

	function addShadow() {
		if (window.scrollY >= 250) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}
	window.addEventListener('scroll', addShadow);
});


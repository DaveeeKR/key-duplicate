const dropdownBtn = document.querySelector('.bi-list');
const navList = document.querySelector('.nav-list');
const blur = document.querySelector('header');

dropdownBtn.addEventListener('click', function () {
	navList.classList.toggle('active');
	blur.classList.toggle('active');
});

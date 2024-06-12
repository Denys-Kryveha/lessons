
document.addEventListener('click', function (e) {
	const targetElement = e.target;
	if (targetElement.closest('.mobile-header__menu')) {
		document.documentElement.classList.toggle('mobile-header__menu--open');
	}
})
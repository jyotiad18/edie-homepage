const services = document.querySelectorAll('.main__services .service');
const dehaze = document.querySelector('.nav__dehaze');
const headerNav = document.querySelector('.nav__links');

services.forEach((service) => {
	service.addEventListener('mouseover', () => {
		const button = service.querySelector('button');
		button.style.backgroundColor = '#2d9cdb';
		button.style.color = "#ffffff";		
	})
	service.addEventListener('mouseout', () => {
		const button = service.querySelector('button');
		button.style.backgroundColor = '#e0e0e0';
		button.style.color = "#828282";
	})
});

dehaze.addEventListener('click', (e) => {
	if (headerNav.classList.contains("nav__links__mobile")) {
		dehaze.innerHTML = 'dehaze';
		headerNav.classList.remove("nav__links__mobile");		
	} else {
		dehaze.innerHTML = 'close';
		headerNav.classList.add("nav__links__mobile");
    }
})
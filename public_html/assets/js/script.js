
// Menu Hamburger
const menuHamburger = document.querySelector(".menu-icon");
const navBar = document.querySelector("#navbar-menu");

menuHamburger.addEventListener('click',()=>{
	//console.log('CLICK OK'); Test OK
navBar.classList.toggle('mobile-menu');
})
// Click on the links =>
// Select elem ".nav-link"
//const navBar = document.querySelector("#navbar-menu");
const navLinks = document.querySelectorAll(".nav-link").forEach(
	// Add an eventListener
	navLinks => navLinks.addEventListener('click',()=>{
		// console.log('CLICK OK'); //Test OK
		// Menu close after the click nav-link
		// Remove the classList "mobile-menu"
		navBar.classList.remove('mobile-menu');
	})
)

// Click Zoom Portfolio
const overlayItemZoom = document.querySelector(".overlay-item-zoom");
const folioImage = document.querySelector(".folio-img-zoom");
overlayItemZoom.addEventListener('click',()=>{
	console.log('CLICK OK'); //Test OK
	folioImage.classList.toggle('zoom-image');
	
})

const body = document.getElementById("#home").forEach(
	// Add an eventListener
	body.addEventListener('click', ()=> {
		folioImage.classList.remove('zoom-image');
	})
)

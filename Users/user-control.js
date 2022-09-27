// active link for pc sidebar
const links = document.querySelectorAll(".nav-links > li > a");

links.forEach((link) => {
	if (link.pathname === window.location.pathname) {
		link.classList.add("active");
	}
});

// active link for mobile view offcanvas
const mobileLinks = document.querySelectorAll(".nav-links > li > a");

mobileLinks.forEach((link) => {
	if (link.pathname === window.location.pathname) {
		link.classList.add("active");
	}
});

// toggling password for settings page

// custom input form for settings page

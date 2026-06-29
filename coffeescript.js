/*HAMBURGER MENU */
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector(".hamburger");
    if (hamburger) {
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")){
                document.getElementById("menuButton").classList.add("hidden");
            }
            else {
                document.getElementById("menuButton").classList.remove("hidden");
            }
        });
    }
});	


/* FULLSCREEN IMAGERY */
const images = document.querySelectorAll('.about-pic');
const fullscreenContainer = document.getElementById('fullscreen-container');
const fullscreenImage = document.getElementById('fullscreen-image');
const exitButton = document.getElementById('exit-button');
		
// image in fullscreen when clicked
images.forEach(image => {
	image.addEventListener('click', function () {
        fullscreenImage.src = image.src; // Set the fullscreen image source to the clicked image's source
       	fullscreenContainer.style.display = 'flex'; // Show the fullscreen container
   	});		
});
		
// Exit fullscreen when the X button is clicked
document.addEventListener('DOMContentLoaded', function () {
    const exitButton = document.getElementById('exit-button');
    const fullscreenContainer = document.getElementById('fullscreen-container');
    
    if (exitButton && fullscreenContainer) {
        exitButton.addEventListener('click', function () {
            fullscreenContainer.style.display = 'none'; // Hide the fullscreen container
        });
    } else {
        console.log('Error: Elements not found!');
    }

    if(!exitbutton || !fullscreenContainer) return;

    exitButton.addEventListener('click', function() {
        fullscreenContainer.style.display = 'none';
    });
});    	

// Allow user to exit fullscreen by pressing the 'Esc' key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        fullscreenContainer.style.display = 'none'; // Hide the fullscreen container
    }
});

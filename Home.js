// let currentSlide = 0; 

        
//         function showSlide() {
//             const slides = document.querySelectorAll('.images .col');
//             slides[currentSlide].classList.remove('active'); 
//             currentSlide = (currentSlide + 1) % slides.length; 
//             slides[currentSlide].classList.add('active'); 
//         }

       
//         setInterval(showSlide, 3000);





let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("Slider_images");
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

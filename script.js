document.getElementById('guess-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting the traditional way

    const answerInput = document.getElementById('answer').value.trim().toLowerCase();
    const correctAnswer = "blue"; // Replace this with the correct answer

    if (answerInput === correctAnswer) {
        // Hide the form and show the next section
        document.getElementById('opening-section').style.display = 'none';
        document.getElementById("wish-section").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("slideshow-section").classList.remove("hidden");
        }, 200); // Delay before showing the slideshow section
        setTimeout(() => {
            document.getElementById("friendship-section").classList.remove("hidden");
        }, 400); // Delay before showing the friendship section
        setTimeout(() => {
            document.getElementById("final-wish-section").classList.remove("hidden");
            document.getElementById("footer-section").classList.remove("hidden");
        }, 600);
    } else {
        alert("Oops! That's not correct. Try again!");
    }
});




let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000); // Adjust timing to match animation duration
}

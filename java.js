const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let autoSlide;

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide() {
    currentSlide++;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
});

function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}
function myFunction(event) {

    let category = event.target.value.toLowerCase();
    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++) {

        if (category === "all") {
            boxes[i].style.display = "block";
        }
        else if (boxes[i].id === category) {
            boxes[i].style.display = "block";
        }
        else {
            boxes[i].style.display = "none";
        }

    }
}
const details = document.querySelectorAll("details");

details.forEach((item) => {
    item.addEventListener("toggle", () => {
        if (item.open) {
            details.forEach((other) => {
                if (other !== item) {
                    other.open = false;
                }
            });
        }
    });
});
showSlide(currentSlide);
startAutoSlide();
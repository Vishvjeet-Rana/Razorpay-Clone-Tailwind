const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const slider = document.querySelector("#slider");

let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 33.333}%)`;
}

function slideNext() {
  if (currentIndex < slider.children.length - 3) {
    currentIndex++;
    updateSlider();
  } else {
    // Loop back to the start
    currentIndex = 0;
    updateSlider();
  }
}

function slidePrev() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  } else {
    // Loop to the end
    currentIndex = slider.children.length - 3;
    updateSlider();
  }
}

nextBtn.addEventListener("click", slideNext);
prevBtn.addEventListener("click", slidePrev);

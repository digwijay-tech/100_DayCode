const slider = document.querySelectorAll(".slider-images img");
console.log(slider);
let sliderIndex = 0;
let intervalId = null;

initializeSlider();
function initializeSlider() {
  if (slider.length > 0) {
    slider[sliderIndex].classList.add("showSlider");
    intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlider(index) {
  if (index >= slider.length) {
    sliderIndex = 0;
  } else if (index < 0) {
    sliderIndex = slider.length - 1;
  }

  slider.forEach((slide) => {
    slide.classList.remove("showSlider");
  });
  slider[sliderIndex].classList.add("showSlider");
}
function prevSlide() {
  clearInterval(intervalId);
  sliderIndex--;
  showSlider(sliderIndex);
}
function nextSlide() {
  
  sliderIndex++;
  showSlider(sliderIndex);
}

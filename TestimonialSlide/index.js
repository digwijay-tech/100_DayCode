// way 1
const nodeSlider = document.querySelectorAll(".container .card");

let sliderIndex = 0;

startSlider();

function startSlider() {
  if (sliderIndex >= 0) {
    nodeSlider[sliderIndex].classList.add("display");
    setInterval(() => {
      console.log("next");
      sliderIndex++;

      if (sliderIndex >= nodeSlider.length) {
        sliderIndex = 0;
      }
      nodeSlider.forEach((slide) => {
        slide.classList.remove("display");
      });
      nodeSlider[sliderIndex].classList.add("display");
    }, 5000);
  }
}



//Way 2
// const nodeL = document.querySelectorAll(".container .card");
// console.log(nodeL);
// sliderIndex = 0;

// startSlide();

// function startSlide() {
//   if (nodeL.length >= 0) {
//     nodeL[sliderIndex].classList.add("display");
//     intervelId = setInterval(nextNode, 11000);
//   }
// }

// function showSlider(index) {
//     console.log(index)
//   if (index >= nodeL.length) {
//     sliderIndex = 0;

//   } else if (index < 0) {
//     sliderIndex = nodeL.length - 1;
//   }
//   nodeL.forEach((slide) => {
//     slide.classList.remove("display");
//   });
//   nodeL[sliderIndex].classList.add("display");
// }

// function nextNode() {
//   sliderIndex++;
//   console.log(sliderIndex)
//   showSlider(sliderIndex);
// }



//Way 3
// const nodeSlider = document.querySelectorAll(".container .card");

// let sliderIndex = 0;

// startSlider();

// function startSlider() {
//   if (sliderIndex >= 0) {
//     nodeSlider[sliderIndex].classList.add("display");
//     setInterval(nextSlide,5000)
//   }
// }

// function nextSlide(){
//     console.log("next")
//     sliderIndex++

//     if(sliderIndex>=nodeSlider.length){
//         sliderIndex=0
//     }
//     nodeSlider.forEach((slide=>{
//         slide.classList.remove("display")
//     }))
//     nodeSlider[sliderIndex].classList.add("display")
// }


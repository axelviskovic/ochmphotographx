const header = document.querySelector('header')
const sliderImgContainer = document.querySelector('.sliderImgContainer')
const arrowRight = document.querySelector('.arrowRight')
const arrowLeft = document.querySelector('.arrowLeft')

// SCROLL EFFECT HEADER

const secondHeader = document.querySelector('.secondHeader')
const paragraphPresentation1 = document.querySelector('.paragraphPresentation1')
const imgContainer1 = document.querySelector('.imgContainer1')
const paragraphPresentation2 = document.querySelector('.paragraphPresentation2')
const imgContainer2 = document.querySelector('.imgContainer2')

window.addEventListener(
  "scroll",
  ()=>{
    const scrolled = window.scrollY
    if(scrolled>100){
      header.style.height="300px"
      header.style.opacity=".4"
      header.style.transition="all 1s"
      secondHeader.style.display="block"
    }
    if(scrolled>1100){
      paragraphPresentation1.style.transition="all 1s"
      paragraphPresentation1.style.opacity="1"
      paragraphPresentation1.style.left="0%"
      imgContainer1.style.transition="all 1s"
      imgContainer1.style.opacity="1"
      imgContainer1.style.right="0%"
    }
    if(scrolled>1500){
      paragraphPresentation2.style.transition="all 1s"
      paragraphPresentation2.style.opacity="1"
      paragraphPresentation2.style.right="0%"
      imgContainer2.style.transition="all 1s"
      imgContainer2.style.opacity="1"
      imgContainer2.style.left="0%"
    }
    if(scrolled<100){
      header.style.height="500px"
      header.style.opacity="1"
      secondHeader.style.display="none"
    }
  }
)


// SLIDER

let currentPosSlider=1

arrowLeft.addEventListener(
  "click",
  ()=>{
    if(currentPosSlider==1){
      currentPosSlider=4
    }
    sliderImgContainer.style.left=-100*currentPosSlider+100+"%"
    sliderImgContainer.style.transition="all 1.4s"
    currentPosSlider=currentPosSlider-1
  }
)

arrowRight.addEventListener(
  "click",
  ()=>{
    if(currentPosSlider==4){
      currentPosSlider=1
    }
    sliderImgContainer.style.left=-100*currentPosSlider+"%"
    sliderImgContainer.style.transition="all 1.4s"
    currentPosSlider++
  }
)

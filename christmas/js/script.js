const checkbox = document.querySelector('#checkbox')
const headline = document.querySelector('.headline-text')
const snowbg = document.querySelector('.snow')
const light = document.querySelector('.light')

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    headline.style.webkitAnimationDuration = "1s";
    headline.style.AnimationDuration = "1s"; 
    light.style.webkitAnimationPlayState = "running";
    light.style.AnimationDuration = "running"; 
    snowbg.style.display = "block";
  } else {
    headline.style.webkitAnimationDuration = "0s";
    headline.style.AnimationDuration = "0s";
    light.style.webkitAnimationPlayState = "paused";
    light.style.AnimationDuration = "paused"; 
    snowbg.style.display = "none";
  }
})
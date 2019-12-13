const checkbox = document.querySelector('#checkbox')
const headline = document.querySelector('.headline-text')
const snowbg = document.querySelector('.snow')
const light = document.querySelector('.light')

checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    headline.style.webkitAnimationDuration = "1s"; 
    light.style.webkitAnimationDuration = "0.5s"; 
    snowbg.style.display = "block";
  } else {
    headline.style.webkitAnimationDuration = "0s";
    light.style.webkitAnimationDuration = "0s"; 
    snowbg.style.display = "none";
  }
})
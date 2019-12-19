const checkbox = document.querySelector('#checkbox')
const bg = document.querySelector('.bg')
const bb = document.querySelector('.bb')
const pp = document.querySelector('.pp')


checkbox.addEventListener('change', (e) => {
  if (e.target.checked) {
    bg.style.display = 'block'
    bb.style.display = 'none'
    pp.style.webkitAnimationDuration = "1s"; 
  } else {
    bg.style.display = 'none'
    bb.style.display = 'block'
    pp.style.webkitAnimationDuration = "0s"; 
  }
})
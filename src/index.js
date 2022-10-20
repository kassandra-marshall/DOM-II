import './less/index.less'

// Your code goes here!

// 1-LOAD
window.onload = function (evt) {
    const heading = document.querySelector('h1')
    heading.textContent = 'READY TO GO!'

// 2- COPY
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text
            })
    })

// 3- CLICK
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

// 4 - dblclick
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

// 5 - keydown
window.addEventListener('keydown', evt => {
    if (evt.key == 6){
        document.body.innerHTML = 'YOU RAN ORDER 66'
    }
})

// 6- mousemove
document.body.addEventListener('mousemove', evt => {
    const {clientX, clientY} = evt
})

// 7- mouseenter
// 8- mouseleave
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', () => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}
// 9- mouseover
document.body.addEventListener('mouseover', (event) => {
    event.target.style.fontWeight = 'bold'
});
// 10- wheel
const images = document.querySelectorAll('img');
for (let image of images) {
    image.addEventListener('wheel', (event) => {
        
        zoom(event)    
    })
}
let scale = 1;
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    event.target.style.transform = `scale(${scale})`;
  }
  
  

}
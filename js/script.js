const btn =document.getElementById('menu-btn')
const nav =document .getElementById('menu')
const isVisble =false

btn.addEventListener('click',()=>{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')

})

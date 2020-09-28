const btn = document.querySelector('button')
const nav = document.getElementById('nav')

btn.addEventListener('click', () => {
    nav.classList.toggle('active')
    btn.classList.toggle("active")
})

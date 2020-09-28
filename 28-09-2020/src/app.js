const boxes = document.querySelector('box')
const observer = new IntersectionObserver(callback)

function callback(entries) {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting)
        entry.classList.add('visible')
    })
}

boxes.forEach(box => observer.observe(box))

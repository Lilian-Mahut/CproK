// const boxes = document.querySelector('box')
// const observer = new IntersectionObserver(callback)

// function callback(entries) {
//     entries.forEach(entry => {
//         console.log(entry)
//         if (entry.isIntersecting)
//         entry.classList.add('visible')
//     })
// }

// boxes.forEach(box => observer.observe(box))

const boxes = document.querySelectorAll(".box")

const observer = new IntersectionObserver(callback)

function callback(entries) {
	entries.forEach(entry => {
		if (entry.isIntersecting) entry.target.classList.add("visible")
	})
}

boxes.forEach(box => observer.observe(box))

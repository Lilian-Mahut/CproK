const text = "My super sentence is show!"
let index = 0

function displayText () {
    document.body.innerText = text.slice(0, index)
    index++
    if (index>text.length) {
        index=0
    }
}
setInterval(displayText,300)

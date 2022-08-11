const generate = document.querySelector('.btn')
const id = document.querySelector('.id')
const quote = document.querySelector('.quote')

window.onload = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(json => {
            const idNumber = json.slip.id
            const advice = json.slip.advice
            quote.textContent = advice
            id.textContent = idNumber
        })
}
generate.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(json => {
            const idNumber = json.slip.id
            const advice = json.slip.advice
            quote.textContent = advice
            id.textContent = idNumber
        })
    })
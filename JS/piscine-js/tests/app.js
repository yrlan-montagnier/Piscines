// Créer des élements
const title = document.createElement('h1')
title.textContent = 'Mon super titre'
title.style.color = 'red'
document.body.appendChild(title)

const box = document.createElement('div')
box.style.display = 'flex'
box.style.justifyContent = 'space-between'
box.style.marginBottom = '50px'

const square = document.createElement('div')
square.style.width = '150px'
square.style.height = '150px'
square.style.backgroundColor = 'green'
square.setAttribute('id', 'square1')
const square2 = document.createElement('div')
square2.style.width = '150px'
square2.style.height = '150px'
square2.style.backgroundColor = 'orange'
const square3 = document.createElement('div')
square3.style.width = '150px'
square3.style.height = '150px'
square3.style.backgroundColor = 'pink'

box.appendChild(square)
box.appendChild(square2)
box.appendChild(square3)

document.body.appendChild(box)

// Compteur
const buttonIncrement = document.createElement('button')
buttonIncrement.textContent = 'Incrémenter'
const buttonDecrement = document.createElement('button')
buttonDecrement.textContent = 'Décrémenter'
const buttonReset = document.createElement('button')
buttonReset.textContent = 'Reset'
const counter = document.createElement('p')
counter.textContent = '0'

document.body.appendChild(buttonIncrement)
document.body.appendChild(buttonDecrement)
document.body.appendChild(buttonReset)
document.body.appendChild(counter)

buttonIncrement.addEventListener('click', (event) => {
  counter.textContent = `${parseInt(counter.textContent) + 1}`
})

buttonDecrement.addEventListener('click', (event) => {
  if (parseInt(counter.textContent) === 0) return;
  counter.textContent = `${parseInt(counter.textContent) - 1}`
})

buttonReset.addEventListener('click', () => {
  if (parseInt(counter.textContent) !== 0) {
    counter.textContent = '0'
  }
})

const buttonHidden = document.createElement('button')
buttonHidden.textContent = 'Show'

const paragraph = document.createElement('p')
paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, accusantium.'
paragraph.style.display = 'none'

document.body.appendChild(buttonHidden)
document.body.appendChild(paragraph)

buttonHidden.addEventListener('click', () => {
  paragraph.style.display = 'block'
})

const allParagraphs = document.querySelectorAll('p')
allParagraphs.forEach((p) => {
  console.log(p)
})

const paragraph2 = document.querySelectorAll('h1,.paragraph')
console.log(paragraph2)

const buttonPressMe = document.querySelector('#btn-press')
console.log(buttonPressMe)
const buttonPressMeSecond = document.getElementById('btn-press')
console.log(buttonPressMeSecond)

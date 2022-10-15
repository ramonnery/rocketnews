const email = document.querySelector('#email')
const form = document.querySelector('form')
const button = document.querySelector(".btn")


const addLoadding = () => {
  button.innerHTML = '<img class="load" src="./assets/img/load.png" alt="Carregando">'
}

const removeLoad = () => {
  button.innerHTML = '<img src="./assets/img/send.svg" alt="Seta para enviar o email">'
}

const handleSubmit = event => {
  event.preventDefault()

  addLoadding()

  fetch('https://api.sheetmonkey.io/form/arSJLVz1oLR7RuQJH8mDPQ', {
    
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: email.value}),
  }).then(removeLoad)

  email.value = ''
}

form.addEventListener("submit", handleSubmit)
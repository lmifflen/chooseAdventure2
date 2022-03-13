    const startButton = document.querySelector('#start-button')
    var input = document.querySelector('#name-input')
    const content = document.querySelector('#content')
    startButton.addEventListener('click', function() {
        console.log(input.value)
        content.innerHTML = `
        <h1> Chapter 2<h1>`
    })




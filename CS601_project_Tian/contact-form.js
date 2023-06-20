
//New Features in ES6: const
const name = document.getElementById('name')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    //New Features in ES6:let
    let messages = [] 
    if (name.value.length < 3) {
        messages.push('Name must longer than 2 characters')

    }       

    var letters = /^[A-Za-z]+$/
    if (!name.value.match(letters)){
        messages.push('Name must be characters')
 
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    } else {
        form.submit()

    }
})
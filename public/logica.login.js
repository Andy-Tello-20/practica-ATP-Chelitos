const btnAcceder = document.getElementsByClassName('button')[0]
const emailInput = document.getElementById('floatingInput')
const passwordInput = document.getElementById('floatingPassword')
const errorMessage = document.getElementById('errorMessage')

btnAcceder.addEventListener('click', (e) => {
    const email = emailInput.value
    const password = passwordInput.value

    if (email !== 'atello' || password !== '123456') {
        errorMessage.textContent = 'Por favor revise su usuario y/o contraseña e intente nuevamente'
        e.preventDefault()
    }
})



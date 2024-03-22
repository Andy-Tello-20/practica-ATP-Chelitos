const btnAcceder = document.getElementsByClassName('button')[0]
const emailInput = document.getElementById('floatingInput')
const passwordInput = document.getElementById('floatingPassword')
const errorMessage = document.getElementById('errorMessage')



    emailInput.style.border = ''
    passwordInput.style.border = ''


btnAcceder.addEventListener('click', (e) => {
    const email = emailInput.value
    const password = passwordInput.value

    if (email !== 'atello' || password !== '123456') {
        errorMessage.textContent = 'Por favor revise su usuario y/o contraseña e intente nuevamente'


        emailInput.style.border = '1px solid red'
        passwordInput.style.border = '1px solid red'

        e.preventDefault()
    }
})



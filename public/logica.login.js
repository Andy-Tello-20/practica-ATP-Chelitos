function setVh() {
    // Calcula la altura del viewport en píxeles
    let vh = window.innerHeight * 0.01;
    // Asigna el valor calculado a una variable CSS
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Llama a la función inicialmente para establecer la altura correcta
setVh();

// Vuelve a calcular la altura cuando la ventana cambia de tamaño
window.addEventListener('resize', setVh)






const btnAcceder = document.getElementsByClassName('button')[0]
const emailInput = document.getElementById('floatingInput')
const passwordInput = document.getElementById('floatingPassword')
const errorMessage = document.getElementById('errorMessage')


//!

emailInput.style.border = ''
passwordInput.style.border = ''


btnAcceder.addEventListener('click', (e) => {
    const email = emailInput.value
    const password = passwordInput.value

    if (email !== 'atello' || password !== '123456') {
        errorMessage.textContent = 'Por favor revise su usuario y/o contraseña e intente nuevamente'


        emailInput.classList.add ('inError')
        passwordInput.classList.add ('inError')

        e.preventDefault()
    }
})


document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('floatingPassword')
    const passwordIcon = this.querySelector('i')

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'
        passwordIcon.classList.add('bi-eye')
        passwordIcon.classList.remove('bi-eye-slash')
    } else {
        passwordInput.type = 'password';
        passwordIcon.classList.add('bi-eye-slash')
        passwordIcon.classList.remove('bi-eye')
    }
})
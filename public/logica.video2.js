const contenedor = document.getElementsByClassName('description-video')[0]
const toggleBtn = document.getElementsByClassName('info-controler')[0]
const btnContainer = document.getElementsByClassName('btn-container')[0]
const verMas = document.getElementsByClassName('ver-mas')[0]





let cambiarTexto = () =>{
if (!contenedor.classList.contains('oculto')){

  verMas.innerText = 'Ocultar'
  
  
  
}else {
  verMas.innerText = 'Mostrar Info';
  
}
}


toggleBtn.addEventListener('click', () => {

  contenedor.classList.toggle('oculto')
  cambiarTexto()

})

window.addEventListener('scroll', () => {

  //! Ocultar el contenedor al hacer scroll

  btnContainer.classList.add('oculto2')

  
  if (!contenedor.classList.contains('oculto')){

    contenedor.classList.add('oculto')
  
  } else if(window.pageYOffset === 0){
    verMas.innerText = 'Ocultar'
    contenedor.classList.remove('oculto')
    btnContainer.classList.remove('oculto2')
}

})

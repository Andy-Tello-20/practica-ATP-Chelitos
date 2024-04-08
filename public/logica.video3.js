const contenedor = document.getElementsByClassName('info-video-container')[0]
const toggleBtn = document.getElementsByClassName('info-controler')[0]
const verMas = document.getElementsByClassName('ver-mas')[0]
const ModalInfo= document.getElementsByClassName('modalTopRight2')[0]
const verMasCont= document.getElementsByClassName('ver-mas-container')[0]

const vPlayer= document.getElementsByClassName('video-player')[0]
const vPlayerCont= document.getElementsByClassName('player-container')[0]


let cambiarTexto = () =>{
if (!contenedor.classList.contains('oculto')){

  verMas.innerText = 'Ocultar'
  
  
  
}else {
  verMas.innerText = 'Mostrar Info';
  
}
}


verMas.addEventListener('click', () => {

  contenedor.classList.toggle('oculto')
  cambiarTexto()
  
  if(contenedor.classList.contains('oculto')){

    vPlayer.classList.add('vPlayer-margin')
    vPlayerCont.classList.add('vPlayer-cont')

  }else{
    vPlayer.classList.remove('vPlayer-margin')
    vPlayerCont.classList.remove('vPlayer-cont')
  }

})

window.addEventListener('scroll', () => {

  //! Ocultar el contenedor al hacer scroll

  verMasCont.classList.add('oculto2')

  
  if (!contenedor.classList.contains('oculto')){

    contenedor.classList.add('oculto')
    vPlayer.classList.add('vPlayer-margin')
    vPlayerCont.classList.add('vPlayer-cont')

  } else if(window.pageYOffset === 0){
    vPlayer.classList.remove('vPlayer-margin')
    vPlayerCont.classList.remove('vPlayer-cont')
    verMas.innerText = 'Ocultar'
    contenedor.classList.remove('oculto')
    verMasCont.classList.remove('oculto2')
}

})


// Función para verificar el ancho de la ventana y asignar/quitar un ID al modal
function asignarQuitarIdModal() {
  // Obtener el ancho de la ventana
  const windowWidth = window.innerWidth;




  // Verificar si el ancho es 450px o menos y asignar/quitar el ID según corresponda
  if (windowWidth <= 800) {
      ModalInfo.id = 'exampleModal2';
  } else {
      ModalInfo.removeAttribute('id');
  }
}

// Verificar el ancho de la ventana al cargar la página
window.addEventListener('load', asignarQuitarIdModal);

// Verificar el ancho de la ventana al cambiar su tamaño
window.addEventListener('resize', asignarQuitarIdModal);
const contenedor = document.getElementsByClassName('info-video-container')[0]

const ModalInfo= document.getElementsByClassName('modalTopRight2')[0]

const vPlayer= document.getElementsByClassName('video-player')[0]




window.addEventListener('scroll', () => {

  //! Ocultar el contenedor al hacer scroll


  
  if (!contenedor.classList.contains('oculto')){

    contenedor.classList.add('oculto')
    vPlayer.classList.add('vPlayer-margin')

  } else if(window.pageYOffset === 0){
    vPlayer.classList.remove('vPlayer-margin')
    contenedor.classList.remove('oculto')

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
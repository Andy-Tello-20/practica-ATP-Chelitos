  const contenedor = document.getElementsByClassName('info-video-container')[0]
  const toggleBtn = document.getElementsByClassName('info-controler')[0]

 

  toggleBtn.addEventListener('click', () => {

    contenedor.classList.toggle('oculto')

  })

  window.addEventListener('scroll', () => {

    //! Ocultar el contenedor al hacer scroll
    
    if (!contenedor.classList.contains('oculto')) {
      contenedor.classList.add('oculto');

    }
    else if(window.pageYOffset === 0){
      contenedor.classList.remove('oculto')
  }

  })

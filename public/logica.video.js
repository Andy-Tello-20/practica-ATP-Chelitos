  const contenedor = document.getElementsByClassName('description-video')[0]
  const toggleBtn = document.getElementsByClassName('info-controler')[0]

 

  toggleBtn.addEventListener('click', () => {

    contenedor.classList.toggle('oculto')

  })

  window.addEventListener('scroll', () => {

    //! Ocultar el contenedor al hacer scroll
    
    if (!contenedor.classList.contains('oculto')) {
      contenedor.classList.add('oculto');
    }
  })

//LOGICA DEL MODAL PAGE


//!   Logica botones MODAL PAGE

let originalValues = {}

document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('#mPageBtn')
    const contenidos = document.querySelectorAll('.content')

    let contenidoSeleccionado = document.getElementById(`content-3`)
    href(contenidoSeleccionado)

    botones.forEach(boton => {
        boton.addEventListener('click', function (event) {
            const dataContent = boton.getAttribute('data-content')
            actualizarContenido(dataContent)
            actualizarBotonActivo(boton)

        })
    })

    function actualizarContenido(dataContent) {

        contenidos.forEach(contenido => {

            contenido.classList.remove('active')
        })

        contenidoSeleccionado = document.getElementById(`content-${dataContent}`)
        if (contenidoSeleccionado) {

            contenidoSeleccionado.classList.add('active')
            editData(dataContent)

            // window.location.hash=dataContent
        }

        href(contenidoSeleccionado)

    }

    function href(data) {

        const anchorButton = document.querySelector('#mPageBtn[data-content="3"]')

        anchorButton.addEventListener('click', () => {

            if (data.id === 'content-3') {

                anchorButton.setAttribute('href', './admin.tpa.html')
            } else {
                anchorButton.removeAttribute('href')
            }

        })
    }

    function actualizarBotonActivo(botonActivo) {
        botones.forEach(boton => {

            //!continuar aca
            if (boton.classList.contains('btn-active')) {
                console.log('se le removio active a el content-: ', boton.getAttribute('data-content'))
                const dataContent = boton.getAttribute('data-content')


                if (dataContent === '1' || dataContent == '2') {

                    console.log('datacontent es: ', typeof (dataContent), ': ', dataContent)
                    cancelData(dataContent)

                }

            }


            boton.classList.remove('btn-active')

        })

        botonActivo.classList.add('btn-active')
    }
})



const editData = (suffix) => {

    console.log('editData suffix es: ', typeof (suffix), suffix)

    const editableElements = document.querySelectorAll(`.editable-a-input-${suffix} , .editable-select-${suffix} ,.editable-select-prof-${suffix}`)


    originalValues[suffix] = {}
    editableElements.forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            originalValues[suffix][element.id] = element.value
        }
    })

    const scButtons = document.querySelector(`.sc-buttons-${suffix}`)
    if (scButtons) {
        scButtons.style.display = 'flex'
    }
}


document.querySelectorAll('.btn-save').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-save')
        saveData(suffix)
    })
})




const saveData = (suffix) => {
    const editableElements = document.querySelectorAll(`.editable-a-input-${suffix} , .editable-select-${suffix} ,.editable-select-prof-${suffix}`)

    editableElements.forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {
            const newValue = element.value
            console.log('element.value es: ', element.value)


            originalValues[suffix][element.id] = newValue
        }
    })


}



const cancelData = (suffix) => {
    const editableElements = document.querySelectorAll(`.editable-a-input-${suffix} , .editable-select-${suffix} ,.editable-select-prof-${suffix}`)

    editableElements.forEach(element => {

        console.log('tagname es: ', element.tagName)

        if (element.tagName === 'INPUT' || element.tagName === 'SELECT') {

            console.log('element.value es: ', element.value)

            element.value = originalValues[suffix][element.id]
        }
    })


}



$('#modalSesionClose').on('hide.bs.modal', function (e) {
    $(this).css('display', 'none')
    // sleep(500)
    // $(this).find('.modal-dialog').css('animation', 'slideInUp 0.3s forwards');
    $(this).removeClass('m-show-sesion')

})

$('#modalSesionClose').on('show.bs.modal', function (e) {
    $(this).css('display', 'flex')
    // sleep(500)
    // $(this).find('.modal-dialog').css('animation', 'slideInUp 0.3s forwards');
    $(this).addClass('m-show-sesion')

})

$('#modalSesionClose').on('shown.bs.modal', function (e) {
    $(this).css('display', 'flex')
})

$('.modalSesionClose').click(function () {
    $('#modalSesionClose').modal('show')
})


$(document).ready(function () {

    $('.btn-save').click(function () {
        toastr["success"]("Cambios realizados con exito")


        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-right",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        }
    })

})

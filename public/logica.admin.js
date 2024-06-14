let table = new DataTable('#tpaTable', {
    responsive: true
})



//LOGICA DEL MODAL 

//!   Logica botones 
document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.btn-modal-pages')
    const contenidos = document.querySelectorAll('.content')

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            const dataContent = boton.getAttribute('data-content')
            actualizarContenido(dataContent)
            actualizarBotonActivo(boton)
        });
    });

    function actualizarContenido(dataContent) {

        contenidos.forEach(contenido => {
            contenido.classList.remove('active')
        });


        const contenidoSeleccionado = document.getElementById(`content-${dataContent}`)
        if (contenidoSeleccionado) {
            contenidoSeleccionado.classList.add('active')
        }
    }

    function actualizarBotonActivo(botonActivo) {

        botones.forEach(boton => {
            boton.classList.remove('btn-active')
        })


        botonActivo.classList.add('btn-active')
    }
});





//?   Logica botones X



let originalValues = {};


document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-button')


        const editableElements = document.querySelectorAll(`.editable-${suffix}`)
        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`)
        let labels = document.querySelectorAll(`.active-label-${suffix}`)
        let mIcons = document.querySelectorAll(`.mIcons-${suffix}`)


        mIcons.forEach(i => {
            i.classList.add('class-hidden-none')
        })

        pTitle.forEach(element => {
            element.classList.add('class-hidden-none')
        })

        labels.forEach(l => {
            l.classList.remove('class-hidden-none')
        })


        originalValues[suffix] = {}
        editableElements.forEach(element => {
            originalValues[suffix][element.id] = element.textContent

            const input = document.createElement('input')
            input.type = 'text'
            input.value = element.textContent
            input.className = `editable-input-${suffix} form-control`
            input.setAttribute('data-id', element.id)


            element.replaceWith(input);
        });


        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'flex'


        button.disabled = true
    });
});


document.querySelectorAll('.btn-save').forEach(button => {
    button.addEventListener('click', function () {


        const suffix = this.getAttribute('data-save')

        console.log('suffix es: ', suffix)

        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`)
        let labels = document.querySelectorAll(`.active-label-${suffix}`)
        let mIcons = document.querySelectorAll(`.mIcons-${suffix}`)
        // Restaurar los campos a elementos span
        const inputs = document.querySelectorAll(`.editable-input-${suffix}`)
        inputs.forEach(input => {
            const span = document.createElement('span')
            span.className = `editable-${suffix}`
            span.textContent = input.value
            span.id = input.getAttribute('data-id')


            input.replaceWith(span)
        });






        mIcons.forEach(i => {
            i.classList.remove('class-hidden-none')
        })


        pTitle.forEach(element => {
            element.classList.remove('class-hidden-none')
        });

        labels.forEach(l => {
            l.classList.add('class-hidden-none')
        });


        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'none'


        document.getElementById(`editButton-${suffix}`).disabled = false;

    })
})


document.querySelectorAll('.btn-cancel').forEach(button => {
    button.addEventListener('click', function () {

        const suffix = this.getAttribute('data-cancel')

        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`)
        let labels = document.querySelectorAll(`.active-label-${suffix}`)
        let mIcons = document.querySelectorAll(`.mIcons-${suffix}`)

        const inputs = document.querySelectorAll(`.editable-input-${suffix}`)
        inputs.forEach(input => {
            const span = document.createElement('span')
            span.className = `editable-${suffix}`
            span.textContent = originalValues[suffix][input.getAttribute('data-id')]
            span.id = input.getAttribute('data-id')


            input.replaceWith(span)
        });






        mIcons.forEach(i => {
            i.classList.remove('class-hidden-none')
        })

        pTitle.forEach(element => {
            element.classList.remove('class-hidden-none')
        })

        labels.forEach(l => {
            l.classList.add('class-hidden-none')
        })


        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'none'


        document.getElementById(`editButton-${suffix}`).disabled = false


    });

})





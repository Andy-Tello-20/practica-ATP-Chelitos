//!   Logica botones 
document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.btn-modal-pages');
    const contenidos = document.querySelectorAll('.content');

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            const dataContent = boton.getAttribute('data-content');
            actualizarContenido(dataContent);
            actualizarBotonActivo(boton); // Asegúrate de llamar a la función aquí
        });
    });

    function actualizarContenido(dataContent) {
        // Ocultar todos los contenidos
        contenidos.forEach(contenido => {
            contenido.classList.remove('active');
        });

        // Mostrar el contenido seleccionado
        const contenidoSeleccionado = document.getElementById(`content-${dataContent}`);
        if (contenidoSeleccionado) {
            contenidoSeleccionado.classList.add('active');
        }
    }

    function actualizarBotonActivo(botonActivo) {
        // Remover la clase activa de todos los botones
        botones.forEach(boton => {
            boton.classList.remove('btn-active');
        });

        // Añadir la clase activa al botón seleccionado
        botonActivo.classList.add('btn-active');
    }
});





//?   Logica botones X



let originalValues = {};

// Agregar event listeners a cada botón de editar
document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-button');

        // Obtener todos los elementos con la clase 'editable'
        const editableElements = document.querySelectorAll(`.editable-${suffix}`);
        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`);
        let labels = document.querySelectorAll(`.active-label-${suffix}`);

        // Iterar sobre cada elemento para agregar la clase "class-hidden-none"
        pTitle.forEach(element => {
            element.classList.add('class-hidden-none');
        });

        labels.forEach(l => {
            l.classList.remove('class-hidden-none');
        });

        // Guardar los valores originales en un objeto
        originalValues[suffix] = {};
        editableElements.forEach(element => {
            originalValues[suffix][element.id] = element.textContent;

            const input = document.createElement('input');
            input.type = 'text';
            input.value = element.textContent;
            input.className = `editable-input-${suffix} form-control`; // Agregar la clase 'form-control'
            input.setAttribute('data-id', element.id); // Guardar el id en el input

            // Reemplazar el span con el input
            element.replaceWith(input);
        });

        // Mostrar los botones de guardar y cancelar
        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'flex';

        // Deshabilitar el botón de editar
        button.disabled = true;
    });
});


document.querySelectorAll('.btn-save').forEach(button => {
    button.addEventListener('click', function (){


        const suffix = this.getAttribute('data-save');

        console.log('suffix es: ', suffix)

        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`);
        let labels = document.querySelectorAll(`.active-label-${suffix}`);
        
        // Restaurar los campos a elementos span
        const inputs = document.querySelectorAll(`.editable-input-${suffix}`);
        inputs.forEach(input => {
            const span = document.createElement('span');
            span.className = `editable-${suffix}`;
            span.textContent = input.value;
            span.id = input.getAttribute('data-id'); // Recuperar el id del input
    
            // Reemplazar el input con el span
            input.replaceWith(span);
        });
    
    
        pTitle.forEach(element => {
            element.classList.remove('class-hidden-none');
        });
    
        labels.forEach(l => {
            l.classList.add('class-hidden-none');
        });
    
        // Ocultar los botones de guardar y cancelar
        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'none';
    
        // Habilitar el botón de editar
        document.getElementById(`editButton-${suffix}`).disabled = false;

    })
})


document.querySelectorAll('.btn-cancel').forEach(button => {
    button.addEventListener('click', function (){

    const suffix = this.getAttribute('data-cancel');

    let pTitle = document.querySelectorAll(`.dto-title-${suffix}`);
    let labels = document.querySelectorAll(`.active-label-${suffix}`);

    // Restaurar los campos a elementos span usando los valores originales
    const inputs = document.querySelectorAll(`.editable-input-${suffix}`);
    inputs.forEach(input => {
        const span = document.createElement('span');
        span.className = `editable-${suffix}`;
        span.textContent = originalValues[suffix][input.getAttribute('data-id')]; // Recuperar el valor original
        span.id = input.getAttribute('data-id'); // Recuperar el id del input

        // Reemplazar el input con el span
        input.replaceWith(span);
    });



    pTitle.forEach(element => {
        element.classList.remove('class-hidden-none');
    });

    labels.forEach(l => {
        l.classList.add('class-hidden-none');
    });

    // Ocultar los botones de guardar y cancelar
    document.querySelector(`.sc-buttons-${suffix}`).style.display = 'none';

    // Habilitar el botón de editar
    document.getElementById(`editButton-${suffix}`).disabled = false;

    
});

    })





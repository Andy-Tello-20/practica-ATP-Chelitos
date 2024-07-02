//LOGICA DEL MODAL PAGE


//!   Logica botones MODAL PAGE

document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('#mPageBtn')
    const contenidos = document.querySelectorAll('.content')

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            const dataContent = boton.getAttribute('data-content')
            actualizarContenido(dataContent)
            actualizarBotonActivo(boton)
            $('.btn-cancel').click()
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

    // function actualizarBotonActivo(botonActivo) {

    //     botones.forEach(boton => {
    //         boton.classList.remove('btn-active')
    //     })


    //     if (!element.getAttribute('data-content') !== '1') {
   
    //         botonActivo.classList.add('btn-active')
    //     }

        
    // }
});



let originalValues = {};

document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-button');

        const editableElements = document.querySelectorAll(`.editable-${suffix}, .editable-a-${suffix} , .editable-select-${suffix} ,.editable-select-prof-${suffix}`);
        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`);
        let labels = document.querySelectorAll(`.active-label-${suffix}`);
        let mIcons = document.querySelectorAll(`.mIcons-${suffix}`);

        mIcons.forEach(i => {
            i.classList.add('class-hidden-none');
        });

        pTitle.forEach(element => {
            element.classList.add('class-hidden-none');
        });

        labels.forEach(l => {
            l.classList.remove('class-hidden-none');
        });

        originalValues[suffix] = {};
        editableElements.forEach(element => {
            originalValues[suffix][element.id] = element.textContent;

            if (element.classList.contains(`editable-select-${suffix}`)) {


                const select = document.createElement('select');
                select.className = `editable-select-${suffix} bg-edit form-select`;
                select.setAttribute('data-id', element.id);
                const option = document.createElement('option');
                option.value = element.textContent;
                option.textContent = element.textContent;
                select.appendChild(option);


                ['DNI', 'Pasaporte', 'UE'].forEach(optionText => {
                    const option = document.createElement('option');
                    option.value = optionText;
                    option.textContent = optionText;
                    if (optionText === element.textContent) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                });
                element.replaceWith(select);


            } else if (element.classList.contains(`editable-select-prof-${suffix}`)) {


                const select = document.createElement('select');
                select.className = `editable-select-prof-${suffix} bg-edit form-select `;
                select.setAttribute('data-id', element.id);
                const option = document.createElement('option');
                option.value = element.textContent;
                option.textContent = element.textContent;
                select.appendChild(option);


                ['Ingeniero civil', 'Diseñador gráfico', 'Economista financiero', 'Abogado de derechos humanos', 'Traductor/Intérprete de conferencias'].forEach(optionText => {
                    const option = document.createElement('option');
                    option.value = optionText;
                    option.textContent = optionText;
                    if (optionText === element.textContent) {
                        option.selected = true;
                    }
                    select.appendChild(option);
                });
                element.replaceWith(select);




            }

            else if (element.classList.contains(`editable-a-${suffix}`)) {



                const input = document.createElement('input');
                input.type = 'text';
                input.value = element.textContent;
                input.className = `editable-a-input-${suffix} bg-edit form-control`;
                input.setAttribute('data-id', element.id);

                element.replaceWith(input);

            }

            else {
                const input = document.createElement('input');
                input.type = 'text';
                input.value = element.textContent;
                input.className = `editable-input-${suffix} bg-edit form-control`;
                input.setAttribute('data-id', element.id);



                element.replaceWith(input);
            }
        });

        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'flex';
        button.disabled = true;
    });
});

document.querySelectorAll('.btn-save').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-save');

        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`);
        let labels = document.querySelectorAll(`.active-label-${suffix}`);
        let mIcons = document.querySelectorAll(`.mIcons-${suffix}`);


        const anchor = document.querySelectorAll(`.editable-a-input-${suffix}`)
        anchor.forEach(anchor => {
            const a = document.createElement('a')
            a.className = `editable-a-${suffix}`;
            a.textContent = anchor.value;
            a.id = anchor.getAttribute('data-id');

            anchor.replaceWith(a);
        })



        const inputs = document.querySelectorAll(`.editable-input-${suffix}`);
        inputs.forEach(input => {
            const span = document.createElement('span');
            span.className = `editable-${suffix}`;
            span.textContent = input.value;
            span.id = input.getAttribute('data-id');

            input.replaceWith(span);
        });

        const selects = document.querySelectorAll(`.editable-select-${suffix}`);
        selects.forEach(select => {
            const span = document.createElement('span');
            span.className = `editable-select-${suffix}`;
            span.textContent = select.value;
            span.id = select.getAttribute('data-id');

            select.replaceWith(span);
        });


        const selectP = document.querySelectorAll(`.editable-select-prof-${suffix}`);
        selectP.forEach(select => {
            const span = document.createElement('span');
            span.className = `editable-select-prof-${suffix}`;
            span.textContent = select.value;
            span.id = select.getAttribute('data-id');

            select.replaceWith(span);
        });


        mIcons.forEach(i => {
            i.classList.remove('class-hidden-none');
        });

        pTitle.forEach(element => {
            element.classList.remove('class-hidden-none');
        });

        labels.forEach(l => {
            l.classList.add('class-hidden-none');
        });

        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'none';
        document.querySelector(`.btn-edit[data-button="${suffix}"]`).disabled = false;
    });
});

document.querySelectorAll('.btn-cancel').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-cancel');

        let pTitle = document.querySelectorAll(`.dto-title-${suffix}`);
        let labels = document.querySelectorAll(`.active-label-${suffix}`);
        let mIcons = document.querySelectorAll(`.mIcons-${suffix}`);


        const anchor = document.querySelectorAll(`.editable-a-input-${suffix}`)
        anchor.forEach(anchor => {
            const a = document.createElement('a')
            a.className = `editable-a-${suffix}`;
            a.textContent = anchor.value;
            a.id = anchor.getAttribute('data-id');

            anchor.replaceWith(a);
        })

        const inputs = document.querySelectorAll(`.editable-input-${suffix}`);
        inputs.forEach(input => {
            const span = document.createElement('span');
            span.className = `editable-${suffix}`;
            span.textContent = originalValues[suffix][input.getAttribute('data-id')];
            span.id = input.getAttribute('data-id');

            input.replaceWith(span);
        });

        const selects = document.querySelectorAll(`.editable-select-${suffix}`);
        selects.forEach(select => {
            const span = document.createElement('span');
            span.className = `editable-select-${suffix}`;
            span.textContent = originalValues[suffix][select.getAttribute('data-id')];
            span.id = select.getAttribute('data-id');

            select.replaceWith(span);
        });


        const selectP = document.querySelectorAll(`.editable-select-prof-${suffix}`);
        selectP.forEach(select => {
            const span = document.createElement('span');
            span.className = `editable-select-prof-${suffix}`;
            span.textContent = select.value;
            span.id = select.getAttribute('data-id');

            select.replaceWith(span);
        });

        mIcons.forEach(i => {
            i.classList.remove('class-hidden-none');
        });

        pTitle.forEach(element => {
            element.classList.remove('class-hidden-none');
        });

        labels.forEach(l => {
            l.classList.add('class-hidden-none');
        });

        document.querySelector(`.sc-buttons-${suffix}`).style.display = 'none';
        document.querySelector(`.btn-edit[data-button="${suffix}"]`).disabled = false;
    });
});

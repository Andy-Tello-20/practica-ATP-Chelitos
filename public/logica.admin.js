var showInfo = window.innerWidth >= 768 ? true : false
var scrollHeight = window.innerWidth >= 768 ? window.innerHeight >= 688 ? window.innerHeight * 0.538 + "px" : "" : "";
var scrollable = window.innerWidth >= 768 ? true : false



let table = new DataTable('#tpaTable', {
    responsive: true,
    searching: false,
    scroller: scrollable,
    scrollY: scrollHeight,
    info: showInfo
})



//LOGICA DEL MODAL 

//!   Logica botones 
document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.btn-modal-pages')
    const contenidos = document.querySelectorAll('.content')

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            const dataContent = boton.getAttribute('data-content')
            // console.log('datacontent es: ', dataContent)

            btnActivo()
            actualizarContenido(dataContent)
            actualizarBotonActivo(boton)
            // $('.btn-cancel').click()

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



const btnActivo = () => {


    let activeElement

    const botones = document.querySelectorAll('.btn-modal-pages')

    botones.forEach(boton => {

        if (boton.classList.contains('btn-active')) {

            activeElement = boton.getAttribute('data-content')
            // console.log('activeElement es: ', activeElement, 'tipo: ', typeof(activeElement))         
        }
    })


    const editButtons = document.querySelector(`.btn-edit[data-button="${activeElement}"]`)

    if (editButtons && editButtons.disabled) {
        // console.log('El botón está deshabilitado')
        cancelData(activeElement)
    } else {
        // console.log('El botón está habilitado')

    }


}




//?   Logica botones X

let originalValues = {};

document.querySelectorAll('.btn-edit').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-button');
        editData(suffix)

    });
});

const editData = (suffix) => {
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

    const editButtons = document.querySelector(`.btn-edit[data-button="${suffix}"]`)
    const scButtons = document.querySelector(`.sc-buttons-${suffix}`)
    if (scButtons) {
        scButtons.style.display = 'flex'
        editButtons.disabled = true;
    }
}



document.querySelectorAll('.btn-save').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-save');

        saveData(suffix)

    });
});


const saveData = (suffix) => {
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




    const scButtons = document.querySelector(`.sc-buttons-${suffix}`)
    const editButtons = document.querySelector(`.btn-edit[data-button="${suffix}"]`)

    if (scButtons && editButtons) {
        scButtons.style.display = 'none';
        editButtons.disabled = false;
    }
}

document.querySelectorAll('.btn-cancel').forEach(button => {
    button.addEventListener('click', function () {
        const suffix = this.getAttribute('data-cancel');
        cancelData(suffix)

        console.log('data-cancel es: ', suffix)




    });
});

const cancelData = (suffix) => {

    console.log('suffix cancelData es: ', suffix)

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



    const scButtons = document.querySelector(`.sc-buttons-${suffix}`)
    const editButtons = document.querySelector(`.btn-edit[data-button="${suffix}"]`)

    if (scButtons && editButtons) {
        scButtons.style.display = 'none';
        editButtons.disabled = false;
    }
}




document.getElementById('toggleSearch').addEventListener('click', function () {


    let tableContainer = document.getElementsByClassName('table-container')[0]
    let search = document.getElementsByClassName('search')[0]
    let arrow = document.getElementsByClassName('mI-arrow')[0]
    let btnSearch = document.getElementsByClassName('btn-Asearch')[0]

    if ($('#searchContainer').is(':visible')) {


        // $('.dt-search').show()
        $('#searchContainer').hide(500, function () {
            tableContainer.classList.add('table-subClass');
            search.classList.remove('search-subClass');
            arrow.classList.remove('arrow-subClass');
            btnSearch.classList.remove('btn-Asearch3');
        })



    } else {
        // $('.dt-search').hide()
        search.classList.add('search-subClass')

        $('#searchContainer').show(500, function () {
            tableContainer.classList.remove('table-subClass')
            arrow.classList.add('arrow-subClass')
            btnSearch.classList.add('btn-Asearch3')

        })
    }
})


$('#modalDescription').on('hidden.bs.modal', function () {
    btnActivo()
    $('.btn-modal-pages[data-content=1]').click()
})



$('#modalSesionClose').on('hide.bs.modal', function (e) {
    $(this).css('display', 'none')
    // sleep(500)
    // $(this).find('.modal-dialog').css('animation', 'slideInUp 0.3s forwards');
    $(this).removeClass('m-show-sesion')

});

$('#modalSesionClose').on('show.bs.modal', function (e) {
    $(this).css('display', 'flex')
    // sleep(500)
    // $(this).find('.modal-dialog').css('animation', 'slideInUp 0.3s forwards');
    $(this).addClass('m-show-sesion')

});

$('#modalSesionClose').on('shown.bs.modal', function (e) {
    $(this).css('display', 'flex')
    // sleep(500)
    // $(this).find('.modal-dialog').css('animation', 'slideInUp 0.3s forwards');


});

//   $('#modalSesionClose').on('hidden.bs.modal', function (e) {
//     $(this).find('.modal-dialog').css('animation', 'slideInUp 0.3s forwards');
//   });


//   function sleep(ms) {
//     var esperarHasta = new Date().getTime() + ms;
//     while(new Date().getTime() < esperarHasta) continue;

// }


document.addEventListener('DOMContentLoaded', function () {



    document.body.addEventListener('click', function (event) {
        if (event.target.closest('.btn-renovation')) {
            const modal = new bootstrap.Modal(document.getElementById('modalRenovation'))

            modal.show()

        }
    });
})





const mediaQuery = window.matchMedia('(min-width: 768px)')



function handleMediaChange(event) {
    if (event.matches) {


        document.addEventListener('DOMContentLoaded', function () {


            const rows = document.querySelectorAll('.data-tr')
            rows.forEach(row => {
                row.addEventListener('click', (event) => {

                    if (event.target.closest('.acciones .btn')) {
                        return
                    }


                    if (event.target.closest('td.dtr-control')) {
                        return
                    }

                    //!! Verificar si la fila contiene un td con clase 'dtr-hidden'
                    // if (row.querySelecto r('td.dtr-hidden')) {
                    //     return
                    // }

                    const modal = new bootstrap.Modal(document.querySelector('#modalDescription'))
                    modal.show()
                })
            })

        })


    }
}

//? Verificar el estado inicial
handleMediaChange(mediaQuery)


mediaQuery.addEventListener('change', handleMediaChange)


$('.modalSesionClose').click(function () {
    $('#modalSesionClose').modal('show')
})

$('.modalMenu').click(function () {
    $('#modalMenu').modal('show')
})


$(document).ready(function () {

    $('.btn-save').click(function () {
        toastr["success"]("Cambios realizados con exito")


        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
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




$(document).ready(function () {

    $('.btn-sr').click(function () {
        toastr["success"]("Renovación exitosa")


        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
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

$('#tpaTable').on('draw.dt', function () {
    $('.toTooltip').tooltip();
});
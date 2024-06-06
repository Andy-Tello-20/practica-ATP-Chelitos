
$(document).ready(function () {
    // Inicializa Select2 en el select de los años
    $('#yearSelect').select2({
        placeholder: "Año en que realizaste la Formación TPA",
        allowClear: true
    });

    var spanYear = $('.span-year')
    var selectY = $('#yearSelect')


    // Verificar al cargar la página
    if (selectY.val()) {
        spanYear.addClass('show-span')
    }

    // Capturar el cambio de selección y añadir/quitar la clase 'show-span'
    selectY.on('change', function (e) {
        if ($(this).val()) {
            spanYear.addClass('show-span')
        } else {
            spanYear.removeClass('show-span')
        }
    });

    //?----------------------------------------------

    $('#documentType').select2({
        placeholder: "Donde te gustaría realizar la Fase presencial de la Formación TPA®?*",
        allowClear: true
    });


    var spanPlace = $('.span-place')
    var selectPlace = $('#documentType')



    // Función para verificar si hay una selección y actualizar la clase
    function updateSpanClass() {
        if (selectPlace.val() && selectPlace.val().length > 0) {
            spanPlace.addClass('show-span')
        } else {
            spanPlace.removeClass('show-span')
        }
    }

    // Verificar al cargar la página
    updateSpanClass();

    // Capturar el cambio de selección y añadir/quitar la clase 'show-span'
    selectPlace.on('change', function (e) {
        updateSpanClass();
    });


    //?----------------------------------------------

    $('#Profesión').select2({
        placeholder: "Profesión",
        allowClear: true
    });

    //! ---Capturar click select2:open ---

    var spanProfesion = $('.span-profesion')
    var selectP = $('#Profesión')


    // Verificar al cargar la página
    if (selectP.val()) {
        spanProfesion.addClass('show-span')
    }

    // Capturar el cambio de selección y añadir/quitar la clase 'show-span'
    selectP.on('change', function (e) {
        if ($(this).val()) {
            spanProfesion.addClass('show-span')
        } else {
            spanProfesion.removeClass('show-span')
        }
    });

    //?----------------------------------------------

    $('#OtraProfesión').select2({
        placeholder: "Otra Profesión",
        allowClear: true
    });


    //! ---Capturar click select2:open ---

    var spanOProfesion = $('.span-OProfesion')
    var selectOP = $('#OtraProfesión')


    // Verificar al cargar la página
    if (selectOP.val()) {
        spanOProfesion.addClass('show-span')
    }

    // Capturar el cambio de selección y añadir/quitar la clase 'show-span'
    selectOP.on('change', function (e) {
        if ($(this).val()) {
            spanOProfesion.addClass('show-span')
        } else {
            spanOProfesion.removeClass('show-span')
        }
    });


    //?----------------------------------------------

    $('#yearSelect').on('select2:open', function () {
        $('.select2-results__options').css('max-height', '100px').css('overflow-y', 'auto')
    });


    $('#documentType').on('select2:open', function () {
        $('.select2-results__options').css('max-height', '100px').css('overflow-y', 'auto')
    });

    $('#Profesión').on('select2:open', function () {
        $('.select2-results__options').css('max-height', '100px').css('overflow-y', 'auto')
    });

    $('#OtraProfesión').on('select2:open', function () {
        $('.select2-results__options').css('max-height', '100px').css('overflow-y', 'auto')
    });


    // Para los paises

    $('#country').select2({
        templateResult: formatState,
        templateSelection: formatState
    });

    function formatState(state) {
        if (!state.id) {
            return state.text
        }
        var baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/"
        var $state = $(
            '<span class="flag-select"><img src="' + baseUrl + state.element.dataset.flag + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state
    }



    $('#country2').select2({
        templateResult: formatState,
        templateSelection: formatState
    });

    function formatState(state) {
        if (!state.id) {
            return state.text
        }
        var baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.6/flags/4x3/";
        var $state = $(
            '<span class="flag-select"><img src="' + baseUrl + state.element.dataset.flag + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state
    }




    let realizoFormacion = document.getElementById('realizoFormacion')

    realizoFormacion.addEventListener('change', function () {



        let selectedOption = this.value

        let spanFQ = document.getElementsByClassName('span-fq')[0]

        if (selectedOption) {
            spanFQ.classList.add('show-span')
        } else {
            spanFQ.classList.remove('show-span')
        }





        let seleccion = realizoFormacion.value;

        if (seleccion === 'si') {
            document.querySelector('.cont-year').classList.remove('hidden-formacion')
            document.querySelector('.mb3-class-where').classList.add('hidden-formacion')
        } else {
            document.querySelector('.cont-year').classList.add('hidden-formacion')
            document.querySelector('.mb3-class-where').classList.remove('hidden-formacion')
        }
    });

    if (realizoFormacion.value == 'si') {
        document.querySelector('.cont-year').classList.remove('hidden-formacion')
        document.querySelector('.mb3-class-where').classList.add('hidden-formacion')
    } else {
        document.querySelector('.cont-year').classList.add('hidden-formacion')
        document.querySelector('.mb3-class-where').classList.remove('hidden-formacion')
    }


    //! Previene el envío del formulario

    $('form').on('submit', function (e) {
        var select = $('#documentType')
        if ( realizoFormacion.value =='no' && select.val().length === 0) {
            alert('Por favor, selecciona al menos una ubicación ❗.')
            e.preventDefault()
            select.focus()
        }
    });




});


document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="options"]')
    const institutionInfo = document.querySelector('.Institution-info')
    const otherAddress = document.querySelector('.form-check-text-otro')

    institutionInfo.style.display = 'none'
    otherAddress.style.display = 'none'

    radioButtons.forEach(radio => {
        radio.addEventListener('change', (event) => {
            if (event.target.checked) {
                handleRadioChange(event.target.value)
            }
        });
    });

    function handleRadioChange(selectedValue) {
        institutionInfo.style.display = 'none'
        otherAddress.style.display = 'none'

        if (selectedValue === 'option2') {
            institutionInfo.style.display = 'block'
        } else if (selectedValue === 'option3') {
            otherAddress.style.display = 'block'
        }

    }



    let inputText = document.getElementById('textInput');
    let labelTextInput = document.getElementsByClassName('label-textInput')[0];
    let spanHow = document.getElementsByClassName('span-how')[0];

    inputText.addEventListener('input', function () {
        if (inputText.value.trim() !== '') {
            spanHow.classList.add('show-span');
            labelTextInput.classList.add('label-none');
        } else {
            spanHow.classList.remove('show-span');
            labelTextInput.classList.remove('label-none');
        }
    });
});


$(document).ready(function () {

    $('#Profesión-i').select2({
        placeholder: "Seleccione una profesión",
        allowClear: true
    })

    $('#Profesión-i').on('select2:open', function () {
        $('.select2-results__options').css('max-height', '100px').css('overflow-y', 'auto')
    })


    //! ---Capturar click select2:open ---

    var spanProfesion = $('.span-profesion-i')
    var selectP = $('#Profesión-i')


    // Capturar el cambio de selección y añadir/quitar la clase 'show-span'
    selectP.on('change', function (e) {
        if ($(this).val()) {
            spanProfesion.addClass('show-span')
        } else {
            spanProfesion.removeClass('show-span')
        }
    });

})
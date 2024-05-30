
document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="options"]')
    const institutionInfo = document.querySelector('.Institution-info')
    const otherAddress = document.querySelector('.other-address')

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
});

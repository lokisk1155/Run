const popUpWrapper = document.querySelector('pop-up-wrapper')
const closeButton = document.getElementById('close-pop-up-button')

closeButton.addEventListener('click', () => {
    popUpWrapper.classList.add('toggle-modal')
})

popUpInstructions.addEventListener('click', () => {
    popUpWrapper.classList.remove('toggle-modal')
})
const popUpInstructions = document.getElementById('pop-up-button')
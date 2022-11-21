const button = document.getElementById('pop-up-button')
const modal = document.getElementById('pop-up-wrapper')
const closeModal = document.getElementById('close-modal-button')

button.addEventListener('click', () => {
    modal.showModal();
    
})

closeModal.addEventListener('click', () => {
    modal.close(); 
})

const aboutButton = document.getElementById('pop-up-about-button')
const aboutModal = document.getElementById('pop-up-about-wrapper')
const closeAboutModal = document.getElementById('close-about-modal-button')

aboutButton.addEventListener('click', () => {
    aboutModal.showModal();
    
})

closeAboutModal.addEventListener('click', () => {
    aboutModal.close(); 
})



const button = document.getElementById('pop-up-button')
const modal = document.getElementById('pop-up-wrapper')
const closeModal = document.getElementById('close-modal-button')

button.addEventListener('click', () => {
    modal.showModal();
    
})

closeModal.addEventListener('click', () => {
    modal.close(); 
})




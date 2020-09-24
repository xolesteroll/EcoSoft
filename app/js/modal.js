const btns = document.querySelectorAll('.profiles__item-btn'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.modal__btn'),
    modalInner = document.querySelector('.modal__inner');
    


    
function closeModal(elem) {
    elem.classList.remove('show');
    elem.classList.add('hide');
    document.body.style.overflow = 'auto';
}
function openModal(elem) {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });
}

function modalInteract() {
    btns.forEach(btn => {
        openModal(btn);
    });


    modalCloseBtn.addEventListener('click', () => {
        closeModal(modal);
    });

    modal.addEventListener('click', (e) => {
        if (e.target == modal || e.target.getAttribute('[data-close]') == '') {
            closeModal(modal);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modal);
        }
    });

}
modalInteract();





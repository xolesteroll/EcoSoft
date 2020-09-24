const btns = document.querySelectorAll('.profiles__item-btn'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('.modal__btn'),
    modalInner = document.querySelector('.modal__inner'),
    profiles = document.querySelectorAll('.profiles__item');

function closeModal(elem) {
    elem.classList.remove('show');
    elem.classList.add('hide');
    document.querySelector('body').style.overflow = 'auto';
}
function openModal(elem) {
    elem.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
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

function oddMove() {
    profiles.forEach((profile, i) => {
        if (i % 2 == 0) {
            profile.classList.add('wow', 'animate__fadeInLeft');
            profile.setAttribute('data-wow-offset', '200');
            profile.setAttribute('data-wow-duration', '1s');

        } else {
            profile.classList.add('wow', 'animate__fadeInRight');
            profile.setAttribute('data-wow-offset', '200');
            profile.setAttribute('data-wow-duration', '1s');
        }

    });
}
oddMove();




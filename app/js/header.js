const header = document.querySelector('.header');


function hideHeader() {
    if (window.pageYOffset >= 3250 && window.pageYOffset <= 4125) {
        header.style.position = 'static';
    } else {
        header.style.position = 'sticky';
    }
}

window.addEventListener('scroll', function() {
    hideHeader();
});


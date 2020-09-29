const header = document.querySelector('.header');


function hideHeader() {
    if (window.pageYOffset >= 2526) {
        header.style.position = 'static';
    } else {
        header.style.position = 'sticky';
    }
}

window.addEventListener('scroll', function() {
    hideHeader();
});


const profiles = document.querySelectorAll('.profiles__item');

function oddMove() {
    profiles.forEach((profile, i) => {
        if (i % 2 == 0) {
            profile.classList.add('wow', 'animate__fadeInLeft');
            profile.setAttribute('data-wow-offset', '100');
            profile.setAttribute('data-wow-duration', '1s');

        } else {
            profile.classList.add('wow', 'animate__fadeInRight');
            profile.setAttribute('data-wow-offset', '100');
            profile.setAttribute('data-wow-duration', '1s');
            
        }

    });
}
oddMove();
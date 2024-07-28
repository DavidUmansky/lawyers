window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 35;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll', reveal2)

function reveal2() {
    var reveals2 = document.querySelectorAll('.reveal2');

    for (var i = 0; i < reveals2.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop2 = reveals2[i].getBoundingClientRect().top;
        var revealpoint2 = 125;

        if (revealtop2 < windowheight - revealpoint2) {
            reveals2[i].classList.add('active');
        } else {
            reveals2[i].classList.remove('active');
        }
    }
}


if (document.body.contains(document.querySelector('#call-btn'))) {
    let callBtn = document.querySelector('#call-btn');
    let details = document.querySelector('#phones-action');

    callBtn.addEventListener("click", function (e) {
        if (callBtn.classList.contains('no-effect') === true) {
            return;
        } else {
            e.preventDefault();
            callBtn.style.display = 'none';
            details.style.display = 'flex';
        }
    });
}



let phone_m = document.querySelector('#absi');
let phone_m_img = document.querySelector('#menu-phone');
let slide_nav = document.querySelector('#slide-nav');
let closd = false;

phone_m.addEventListener("click", function (e) {

    if (closd) {
        phone_m_img.src = 'photos/menu-bar.png';
        slide_nav.style.top = '-100%';
        phone_m_img.style.scale = '1';
        closd = false;
        return;
    }

    closd = true;
    phone_m_img.src = 'photos/black-close.png';
    slide_nav.style.top = '70px';
    phone_m_img.style.scale = '0.7';
})





















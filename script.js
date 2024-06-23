class TypeWriter {
    constructor(txtElement, words, wait = 4000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 80;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Make pause at end
            typeSpeed = this.wait;
            // Set delete to true
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before start typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

let stop = false;

// Init On DOM Load
// document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

var skewed = document.querySelector('.skewed');

// window.addEventListener('scroll', function () {
//     var value = 3 - window.scrollY / 90;
//     skewed.style.transform = "skewY(" + value + "deg)"
// })

let movtextBig = document.getElementById('movtext-big');
let movtextBigShow = false;
var span1 = document.querySelector('.movtext span');

window.onscroll = function () {
    if (window.pageYOffset > 50) {
        // span1.classList.add('txt-type'); 
        movtextBig.style.visibility = 'visible';
        movtextBig.style.transform = 'translateY(0px)';
        movtextBig.style.opacity = '1';
        movtextBigShow = true;
        if (!stop) {
            init();
            stop = true;
        }
    } else {
        // movtextBig.style.display = 'none';
        // movtextBig.style.visibility = 'hidden';
        // movtextBig.style.transform = 'translateY(100px)';
        // movtextBig.style.opacity = '0';
        // movtextBigShow = false;
        // span1.classList.remove('txt-type');
    }
}

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


































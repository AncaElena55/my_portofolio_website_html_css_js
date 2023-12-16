
//Light mode - Dark mode 
const lightButton = document.getElementById('lightOne');
const darkButton = document.getElementById('darkOne');

function lightMode() {
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.querySelector('nav').style.backgroundColor = '';
    document.getElementById('contact').style.backgroundColor = '';
    document.querySelectorAll('a').forEach(function(anchor) {
        anchor.style.color = '';
    })
    const shadows = Array.from(document.getElementsByClassName('shadow'))
    shadows.forEach(function(shadow) {
        shadow.style.boxShadow = '';
    })
};

lightButton.addEventListener('click', lightMode);

function darkMode() {
    document.body.style.backgroundColor = '#9400D3';
    document.body.style.color = '#DDA0DD';
    document.querySelector('nav').style.backgroundColor = 'black';
    document.getElementById('contact').style.backgroundColor = '#4B0082';
    document.querySelectorAll('a').forEach(function(anchor) {
        anchor.style.color = '#DDA0DD';
    })
    const shadows = Array.from(document.getElementsByClassName('shadow'))
    shadows.forEach(function(shadow) {
        shadow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
    })
};

darkButton.addEventListener('click', darkMode);

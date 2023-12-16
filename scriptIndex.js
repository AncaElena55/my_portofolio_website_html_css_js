
// Making boxes change color when mouse hovers
let isLightModeOn = true;
const boxes = Array.from(document.getElementsByClassName('visible'));
const hiddenBoxes = Array.from(document.getElementsByClassName('hidden'));

function changeBackgroundColor(event) {
    event.target.style.backgroundColor = '#FF6347';
};

function changeBack(event) {
    if (isLightModeOn) {
    event.target.style.backgroundColor = '#4682B4';
} else {
    event.target.style.backgroundColor = '#4B0082';
}
}

boxes.forEach(function(box) {
    box.addEventListener('mouseover', changeBackgroundColor)
});

boxes.forEach(function(box) {
    box.addEventListener('mouseout', changeBack)
});

// Making hidden boxes to appear when clicking on visible boxes
function displayHidden(element) {
    element.style.display = 'flex';
}

function showHidden() {
    for (let i = 0; i < boxes.length; i++) {
        for (let j = 0; j < hiddenBoxes.length; j++) {
            if (i === j) {
                boxes[i].addEventListener('click', function() {
                    displayHidden(hiddenBoxes[j]);
                    });
            }
        } 
    }
}

showHidden();

//Light mode - Dark mode 
const lightButton = document.getElementById('lightOne');
const darkButton = document.getElementById('darkOne');

function lightMode() {
    isLightModeOn = true;
    document.body.style.backgroundColor = '';
    document.body.style.color = '';
    document.querySelector('nav').style.backgroundColor = '';
    document.getElementById('about').style.backgroundImage = '';
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = '';
    }
    for (let j = 0; j < hiddenBoxes.length; j++) { 
        hiddenBoxes[j].style.backgroundColor = '';
    }
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
    isLightModeOn = false;
    document.body.style.backgroundColor = '#9400D3';
    document.body.style.color = '#DDA0DD';
    document.querySelector('nav').style.backgroundColor = 'black';
    document.getElementById('about').style.backgroundImage = 'url("./images/darPattern.jpg")';
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = '#4B0082';
    }
    for (let j = 0; j < hiddenBoxes.length; j++) {
        hiddenBoxes[j].style.backgroundColor = '#4B0082';
    }
    document.querySelectorAll('a').forEach(function(anchor) {
        anchor.style.color = '#DDA0DD';
    })
    const shadows = Array.from(document.getElementsByClassName('shadow'))
    shadows.forEach(function(shadow) {
        shadow.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.8)';
    })
};

darkButton.addEventListener('click', darkMode);

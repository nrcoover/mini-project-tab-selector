// global variable declerations
var lightBase = '#bdbdbd';
var lightBackground = '#FFFFFF';
var lightShadow = 'rgba(18, 18, 18, .3)';
var lightPrimary = '#6200EE';
var lightPrimaryDark = '#3700B3';
var lightSecondary = '#03DAC6';
var lightSecondaryDark = '#018786';
var lightErrorColor = '#B00020';
/* DARK THEME COLORS */
var darkBase = '#1d1d1d';
var darkBackground = '#121212';
var darkShadow = 'rgba(255, 255, 255, .1)'
var darkPrimary = '#BB86FC';
var darkPrimaryDark = '#3700B3';
var darkSecondary = '#03DAC6';
var darkErrorColor = '#CF6679';

function turnOnDarkModeColors() {
    if (darkModetoggleIsOn === true) {
        document.body.style.transition = 'color 1s, background-color 1s';
        document.documentElement.style.setProperty('--light-theme-base', darkBase);
        document.documentElement.style.setProperty('--light-theme-background', darkBackground);
        document.documentElement.style.setProperty('--light-theme-primary', darkPrimary);
        document.documentElement.style.setProperty('--light-theme-primary-dark', darkPrimaryDark);
        document.documentElement.style.setProperty('--light-theme-secondary', darkSecondary);
        document.documentElement.style.setProperty('--light-theme-secondary-dark', darkSecondary);
        document.body.style.color = lightBackground;
    } else {
        document.body.style.transition = 'color 1s, background-color 1s';
        document.documentElement.style.setProperty('--light-theme-base', lightBase);
        document.documentElement.style.setProperty('--light-theme-background', lightBackground);
        document.documentElement.style.setProperty('--light-theme-primary', lightPrimary);
        document.documentElement.style.setProperty('--light-theme-primary-dark', lightPrimaryDark);
        document.documentElement.style.setProperty('--light-theme-secondary', lightSecondary);
        document.documentElement.style.setProperty('--light-theme-secondary-dark', lightSecondaryDark);
        document.body.style.color = 'black';
    }
}

// DARK MODE TOGGLE FUNCTIONALITY
var darkModeSwitch = document.querySelector('#Dark-Mode-Switch');
var darkModetoggleIsOn = false;
darkModeSwitch.addEventListener('click', function() {
    if (darkModetoggleIsOn === false) {
        darkModeSwitch.style.justifyContent = 'flex-end';
        darkModetoggleIsOn = true;
    } else {
        darkModeSwitch.style.justifyContent = 'flex-start';
        ;
        darkModetoggleIsOn = false;
    }
    turnOnDarkModeColors();
    return darkModetoggleIsOn;
});

// LANGUAGE TOGGLE FUNCTIONALITY
var languageSwitch = document.querySelector('#Language-Switch');
var languagetoggleIsOn = false;
languageSwitch.addEventListener('click', function() {
    if (languagetoggleIsOn === false) {
        languageSwitch.classList.add('toggle-is-active');
        return languagetoggleIsOn = true;
    } else {
        languageSwitch.classList.remove('toggle-is-active');
        return languagetoggleIsOn = false;
    }
});

// function to remove .show-active class & add to clicked
var tabs = document.getElementsByClassName('tab');
function setNewActive(el) {
    // select all .content-body
    var contentBodies = document.getElementsByClassName('content-body');
    // remove .show-active
    for (var contentBody of contentBodies) {
        contentBody.classList.remove('show-active');
    }
    // add .show-active (back) to clicked
    document.getElementById(el.textContent.trim()).classList.add('show-active');

    for (var tab of tabs) {
        tab.classList.remove('tab-active');
    }
    el.classList.add('tab-active');
}


// select .tab class, and loop through
for (var tab of tabs) {
    // add click listener to each tab
    tab.addEventListener('click', function(e) {
        setNewActive(e.currentTarget);
        console.log(e.currentTarget);
    });
}
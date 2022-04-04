// LIGHT THEME COLOR VARIABLES
var lightBase = '#bdbdbd';
var lightBackground = '#FFFFFF';
var lightShadow = 'rgba(18, 18, 18, .3)';
var lightPrimary = '#6200EE';
var lightPrimaryDark = '#3700B3';
var lightSecondary = '#03DAC6';
var lightSecondaryDark = '#018786';
var lightErrorColor = '#B00020';
// DARK THEME COLOR VARIABLES
var darkBase = '#1d1d1d';
var darkBackground = '#121212';
var darkShadow = 'rgba(255, 255, 255, .1)'
var darkPrimary = '#BB86FC';
var darkPrimaryDark = '#3700B3';
var darkSecondary = '#03DAC6';
var darkErrorColor = '#CF6679';

// GLOBAL VARIABLES
var darkModeSwitch = document.querySelector('#Dark-Mode-Switch');
var darkModetoggleIsOn = false;
var languageSwitch = document.querySelector('#Language-Switch');
var languagetoggleIsOn = false;
var tabs = document.getElementsByClassName('tab');

// CHANGES LIGHT THEME COLORS TO DARK THEME COLROS
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
darkModeSwitch.addEventListener('click', function() {
    if (darkModetoggleIsOn === false) {
        darkModeSwitch.style.justifyContent = 'flex-end';
        darkModetoggleIsOn = true;
    } else {
        darkModeSwitch.style.justifyContent = 'flex-start';
        darkModetoggleIsOn = false;
    }
    turnOnDarkModeColors();
    return darkModetoggleIsOn;
});

// CHANGES ENGLISH TEXT TO SPANISH TEXT
function activateLanguageToggle() {
    if (languagetoggleIsOn === true) {
        // Dark Mode Toggle Components
        document.querySelector('#Toggle-Dark-Mode h3').innerHTML = 'Alternar modo oscuro';
        document.querySelector('#Toggle-Dark-Mode p:first-child').innerHTML = 'Apagado';
        document.querySelector('#Toggle-Dark-Mode p:last-child').innerHTML = 'En';
        // Toggle Language Components
        document.querySelector('#Toggle-Language h3').innerHTML = 'Alternar idioma';
        // Tab Selectors
        document.querySelector('#Tab-1').innerHTML = 'Opción Uno';
        document.querySelector('#Tab-2').innerHTML = 'Opción Dos';
        document.querySelector('#Tab-3').innerHTML = 'Opción Tres';
        // Tab Content
        document.querySelector('#English-Display').style.display = 'none';
        document.querySelector('#Spanish-Display').style.display = 'block';
        
    } else {
        // Dark Mode Toggle Components
        document.querySelector('#Toggle-Dark-Mode h3').innerHTML = 'Toggle Dark Mode';
        document.querySelector('#Toggle-Dark-Mode p:first-child').innerHTML = 'Off';
        document.querySelector('#Toggle-Dark-Mode p:last-child').innerHTML = 'On';
        // Toggle Language Components
        document.querySelector('#Toggle-Language h3').innerHTML = 'Toggle Language';
        // Tab Selectors
        document.querySelector('#Tab-1').innerHTML = 'Option One';
        document.querySelector('#Tab-2').innerHTML = 'Option Two';
        document.querySelector('#Tab-3').innerHTML = 'Option Three';
        // Tab Content
        document.querySelector('#Spanish-Display').style.display = 'none';
        document.querySelector('#English-Display').style.display = 'block';
    }
    console.log(document.getElementsByClassName('show-active'));
}

// LANGUAGE TOGGLE FUNCTIONALITY
languageSwitch.addEventListener('click', function() {
    if (languagetoggleIsOn === false) {
        languageSwitch.classList.add('toggle-is-active');
        languagetoggleIsOn = true;
    } else {
        languageSwitch.classList.remove('toggle-is-active');
        languagetoggleIsOn = false;
    }
    activateLanguageToggle();
    return languagetoggleIsOn;
});

// function to remove .show-active class & add to clicked
function setNewActive(el) {
    var contentBodies = document.getElementsByClassName('content-body');
    for (var contentBody of contentBodies) {
        contentBody.classList.remove('show-active');
    }
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
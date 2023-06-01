let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.querySelector('#darkmode-toggle');
const darkModeToggleSmall = document.querySelector('#darkmode-toggle-small');

const enableDarkMode = () => {
    document.documentElement.style.setProperty('--foreground', 'var(--white)');
    document.documentElement.style.setProperty('--background', 'var(--black)');
    document.documentElement.style.setProperty('--lineargradient', 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))');
    document.documentElement.style.setProperty('--articlebackground', 'var(--darkgrey)');
    document.documentElement.style.setProperty('--cvleftyearcolor', '#ab0e8e');
    document.getElementById("darkmode-toggle").checked = true;
    document.getElementById("darkmode-toggle-small").checked = true;
    localStorage.setItem('darkMode', 'enabled');
    console.log('Dark-Mode: ' + localStorage.getItem('darkMode'));
}
const disableDarkMode = () => {
    document.documentElement.style.setProperty('--foreground', 'var(--black)');
    document.documentElement.style.setProperty('--background', 'var(--white)');
    document.documentElement.style.setProperty('--lineargradient', 'linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))');
    document.documentElement.style.setProperty('--articlebackground', 'var(--lightgrey)');
    document.documentElement.style.setProperty('--cvleftyearcolor', '#5c1f7d');
    document.getElementById("darkmode-toggle").checked = false;
    document.getElementById("darkmode-toggle-small").checked = false;
    localStorage.setItem('darkMode', 'disabled');
    console.log('Dark-Mode: ' + localStorage.getItem('darkMode'));
}
if (darkMode === null) {
    console.log('not set');
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem('darkMode', 'enabled');
    }
    else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

if (darkMode === 'enabled'){
    enableDarkMode();
}
else {
    disableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log('Dark-Mode: ' + localStorage.getItem('darkMode'));
    }
    else {
        disableDarkMode();
        console.log('Dark-Mode: ' + localStorage.getItem('darkMode'));
    }
})
darkModeToggleSmall.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
    }
    else {
        disableDarkMode();
    }
})
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    document.documentElement.style.setProperty('--foreground', 'var(--white)');
    document.documentElement.style.setProperty('--background', 'var(--black)');
    document.documentElement.style.setProperty('--lineargradient', 'linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))');
    document.documentElement.style.setProperty('--articlebackground', 'var(--darkgrey)');
    document.documentElement.style.setProperty('--cvleftyearcolor', '#ab0e8e');
    localStorage.setItem('darkMode', 'enabled');
}
const disableDarkMode = () => {
    document.documentElement.style.setProperty('--foreground', 'var(--black)');
    document.documentElement.style.setProperty('--background', 'var(--white)');
    document.documentElement.style.setProperty('--lineargradient', 'linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))');
    document.documentElement.style.setProperty('--articlebackground', 'var(--lightgrey)');
    document.documentElement.style.setProperty('--cvleftyearcolor', '#5c1f7d');
    localStorage.setItem('darkMode', 'null');
}

if ((darkMode === 'enabled') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    enableDarkMode();
}
else {
    disableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    }
    else {
        disableDarkMode();
        console.log(darkMode);
    }
})
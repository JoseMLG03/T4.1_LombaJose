export function setupMenuToggle() {
    const navToggle = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.menu');
    const navToggle2 = document.querySelector('.AnimalsMenu');
    const navMenu2 = document.querySelector('.menu2')

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show')
    });
    navToggle2.addEventListener('click', () => {
        navMenu2.classList.toggle('show'); 
    });
    
    
}
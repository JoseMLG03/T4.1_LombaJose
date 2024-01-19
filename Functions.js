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
export function CatsArrayObject() {
    const gato = [
      { nombre: 'Gato 1', imagen: 'Cat1.jpg' },
      { nombre: 'Gato 2', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 3', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 4', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 5', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 6', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 7', imagen: 'Assets/Logo.png' },
    ];
    
    const gatosContainer = document.querySelector('.catsimg-container');
    const namesContainer = document.querySelector('.catsnames-container');
  
    gato.forEach((gato) => {
    const imgElement = document.createElement('img');
    imgElement.src = gato.imagen;
    imgElement.alt = gato.nombre;
    imgElement.classList.add('cat');
  
    const nameElement = document.createElement('p');
    nameElement.textContent = gato.nombre;
  
    gatosContainer.appendChild(imgElement);
    namesContainer.appendChild(nameElement);
    });    
};
  
    
  
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
    const gatos = [
      { nombre: 'Gato 1', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 2', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 3', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 4', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 5', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 6', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 7', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 8', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 9', imagen: 'Assets/Logo.png' },
      { nombre: 'Gato 10', imagen: 'Assets/Logo.png' },
    ];
    
    const gatosContainer = document.querySelector('.cats-container');

    gatos.forEach((gato) => {
        const catContainer = document.createElement('div');
        catContainer.classList.add('cat-container');

        const imgElement = document.createElement('img');
        imgElement.src = gato.imagen;
        imgElement.alt = gato.nombre;
        imgElement.classList.add('cat-image');

        const nameElement = document.createElement('p');
        nameElement.textContent = gato.nombre;
        nameElement.classList.add('cat-name');

        catContainer.appendChild(imgElement);
        catContainer.appendChild(nameElement);
        gatosContainer.appendChild(catContainer);
    });
};
export function DogsArrayObject() {
    const perros = [
      { nombre: 'Perro 1', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 2', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 3', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 4', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 5', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 6', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 7', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 8', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 9', imagen:  'Assets/Logo.png' },
      { nombre: 'Perro 10', imagen: 'Assets/Logo.png' },
    ];
    
    const perrosContainer = document.querySelector('.dogs-container');

    perros.forEach((perro) => {
        const dogContainer = document.createElement('div');
        dogContainer.classList.add('dog-container');

        const imgElement = document.createElement('img');
        imgElement.src = perro.imagen;
        imgElement.alt = perro.nombre;
        imgElement.classList.add('dog-image');

        const nameElement = document.createElement('p');
        nameElement.textContent = perro.nombre;
        nameElement.classList.add('dog-name');

        dogContainer.appendChild(imgElement);
        dogContainer.appendChild(nameElement);
        perrosContainer.appendChild(dogContainer);
    });
};
  
    
  
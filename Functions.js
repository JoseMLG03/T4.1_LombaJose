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
      { nombre: 'Kvarnvik', imagen: 'Assets/AssetsCats/Cat1.png' },
      { nombre: 'Knipsa', imagen: 'Assets/AssetsCats/Cat2.png' },
      { nombre: 'Trofast', imagen: 'Assets/AssetsCats/Cat3.png' },
      { nombre: 'Ferguson', imagen: 'Assets/AssetsCats/Cat4.png' },
      { nombre: 'Stinker', imagen: 'Assets/AssetsCats/Cat5.png' },
      { nombre: 'Andamio', imagen: 'Assets/AssetsCats/Cat6.png' },
      { nombre: 'Oslo', imagen: 'Assets/AssetsCats/Cat7.png' },
      { nombre: 'Ashley', imagen: 'Assets/AssetsCats/Cat8.png' },
      { nombre: 'Wisp', imagen: 'Assets/AssetsCats/Cat9.png' },
      { nombre: 'Luna', imagen: 'Assets/AssetsCats/Cat10.png' },
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
      { nombre: 'Cincel', imagen:  'Assets/AssetsDogs/Dog1.png' },
      { nombre: 'Óðinn', imagen:  'Assets/AssetsDogs/Dog2.png' },
      { nombre: 'Martillo', imagen:  'Assets/AssetsDogs/Dog3.png' },
      { nombre: 'Valaskjálf', imagen:  'Assets/AssetsDogs/Dog4.png' },
      { nombre: 'Tdölfürr', imagen:  'Assets/AssetsDogs/Dog5.png' },
      { nombre: 'Ragnavaldar', imagen:  'Assets/AssetsDogs/Dog6.png' },
      { nombre: 'Mr.Bubz', imagen:  'Assets/AssetsDogs/Dog7.png' },
      { nombre: 'Sanngriðr', imagen:  'Assets/AssetsDogs/Dog8.png' },
      { nombre: 'Hjaðningavíg', imagen:  'Assets/AssetsDogs/Dog9.png' },
      { nombre: 'Brynhildr', imagen: 'Assets/AssetsDogs/Dog10.png' },
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
  
    
  
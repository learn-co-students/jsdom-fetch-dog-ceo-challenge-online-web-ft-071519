let breeds = []

document.addEventListener('DOMContentLoaded', () => {
    getPhotos();
    getBreeds();
    addMenuListener();
  });

function getPhotos() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(json => renderPhotos(json))
};
    
function renderPhotos(json) {
    const photoDiv = document.getElementById('dog-image-container');
    const photoList = document.createElement('ul');
    photoDiv.appendChild(photoList)
    json.message.forEach(photoURL => {
    let photo = document.createElement('li');
    photo.innerHTML = `<img src="${photoURL}">`
    photoList.appendChild(photo)
    })
};

function getBreeds() {
  fetch('https://dog.ceo/api/breeds/list/all')
  .then(response => response.json())
  .then(json => loadBreeds(json))
};

function loadBreeds(json) {
  breeds = Object.keys(json.message)
  listBreeds(breeds);
};

function listBreeds(breeds) {
    let list = document.getElementById('dog-breeds')
    breeds.forEach(species => {
      let li = document.createElement('li')
      li.id = `${species}`
      li.innerText = `${species}`
      list.appendChild(li)
      li.addEventListener('click', () => {
          li.style.color = "pink";
      })
    })
};

function addMenuListener() {
  let menu = document.getElementById('breed-dropdown')
  menu.addEventListener('change', () => {
      if (menu.selectedIndex === 0) {
        updateBreeds('a');
      } else if (menu.selectedIndex === 1) {
        updateBreeds('b');
      } else if (menu.selectedIndex === 2) {
        updateBreeds('c');
      } else if (menu.selectedIndex === 3) {
        updateBreeds('d')
      }
  })
};

function updateBreeds(letter) {
  let list = document.querySelector('#dog-breeds');
  while (list.firstChild) {
      list.removeChild(list.firstChild);
  }
  let filteredByLetter = breeds.filter((breed) => breed.startsWith(letter))
  listBreeds(filteredByLetter);
};
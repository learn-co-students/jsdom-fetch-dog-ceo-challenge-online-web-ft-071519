document.addEventListener("DOMContentLoaded", getPhotos())
document.addEventListener("DOMContentLoaded", getBreeds())

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
    .then(json => renderBreeds(json))
}

function renderBreeds(json) {
    const breedList = document.getElementById('dog-breeds');
    Object.keys(json.message).forEach(breed => {
      let li = document.createElement('li');
      li.id = `${breed}`
      li.innerText = `${breed}`
      li.addEventListener('click', () => {
          li.style.color = "pink";
      })
      breedList.appendChild(li)
    })
};
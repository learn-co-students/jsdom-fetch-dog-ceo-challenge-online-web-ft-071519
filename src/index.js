console.log('%c HI', 'color: firebrick')


document.addEventListener('load', getPhotos());
document.addEventListener('load', getBreeds());



function getPhotos() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => showPhotos(json))
};

function showPhotos(json){
    const imageContainer = document.getElementById('dog-image-container');
    json.message.forEach(photo => {
        let li = document.createElement('li')
        li.innerHTML = `<img src="${photo}">`;
        imageContainer.appendChild(li);
    })
};

function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => listBreeds(json))
};


function listBreeds(json) {
   const ul = document.getElementById('dog-breeds');

    Object.keys(json.message).forEach(breed => {
      let li = document.createElement('li');
      li.innerText = `${breed}`;
      ul.appendChild(li);
      li.addEventListener('click', () => {
          li.style.color = "pink";
      })
    })
}


console.log('%c HI', 'color: firebrick')

document.addEventListener('load', getPhotos());
document.addEventListener('load', getBreeds())

function getPhotos() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => showPhotos(json))
};

function showPhotos(json){
    json.message.forEach(photo => {
        const ul = document.getElementById('dog-breeds')
        let li = document.createElement('li')
        li.innerHTML = `<img src="${photo}">`
        ul.appendChild(li)
    })
};

function getBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => listBreeds(json))
};

function listBreeds(json){
    
}
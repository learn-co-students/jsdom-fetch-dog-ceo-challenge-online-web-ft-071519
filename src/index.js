console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
  imageFetch();
  breedFetch();
})

// Add dog images
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function imageFetch() {
  fetch(imgUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    images = json.message
    images.forEach(url => {
      img = document.createElement('img'); 
      img.src = url;
      document.getElementById("dog-image-container").appendChild(img);
    })
  });
}
// add dog breeds
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function breedFetch() {
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const breedsHash = json.message
    const breeds = Object.keys(breedsHash)
    breeds.forEach(breed=> {
      console.log(breed)
      li = document.createElement('li'); 
      li.innerHTML = breed
      document.getElementById("dog-breeds").appendChild(li);
    })
  })
}
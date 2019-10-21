console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
  imageFetch();
  breedFetch();
  breedColor();
  dropdownFilter();
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

function breedFetch(filter = "") {
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const breedsHash = json.message
    const breeds = Object.keys(breedsHash)
    document.getElementById("dog-breeds").innerHTML = ""

    breeds.forEach(breed => {
      if (filter && breed.startsWith(filter)) {
        let li = document.createElement('li'); 
        li.innerHTML = breed
        li.addEventListener("click",function() {
         li.style.color = "red"
        })
        document.getElementById("dog-breeds").appendChild(li);
      } else if (!filter) {
        let li = document.createElement('li'); 
        li.innerHTML = breed
        li.addEventListener("click",function() {
         li.style.color = "red"
        })
        document.getElementById("dog-breeds").appendChild(li);
      }      
    })
  })
}

// breed color changes on click
function breedColor() {
  const items = Array.from(document.getElementsByTagName("li"));

  items.forEach(item => {
    item.onclick = function() {
        item.style.color = "red";
      }
    })
}

// dropdown functionality

function dropdownFilter() {
  const dropdown = document.getElementById("breed-dropdown")
  const liItems = document.getElementsByTagName("li");

  dropdown.addEventListener("click", function(e) {
    filter  = e.target.value
    breedFetch(filter) 
  })
}
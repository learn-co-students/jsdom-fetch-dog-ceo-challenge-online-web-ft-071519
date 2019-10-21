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

function breedFetch() {
  fetch(breedUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    const breedsHash = json.message
    const breeds = Object.keys(breedsHash)
    breeds.forEach(breed => {
      let li = document.createElement('li'); 
      li.innerHTML = breed
      document.getElementById("dog-breeds").appendChild(li);
    })
  })
}

// breed color changes on click
function breedColor() {
  const items = Array.from(document.getElementsByTagName("li"));

  items.forEach(item => {
    console.log(item)
    item.onclick = function() {
        console.log("clicked a breed!");
        item.style.color = "red";
      }
    })
}

// dropdown functionality
function dropdownFilter() {
  const dropdown = document.getElementById("breed-dropdown")
  let selectedValue = dropdown.options[dropdown.selectedIndex].value
  if (selectedValue == "a") {
    document.getElementById("dog-breeds").innerHTML
  } else if (selectedValue == "b") {

  } else if (selectedValue == "c") {

  } else {

  } 
}
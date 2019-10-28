console.log('%c HI', 'color: firebrick')
function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(resp => resp.json())
        .then(json => addImages(json));
}

function addImages(json) {
    json.message.forEach(dog => {
        const images = document.getElementById("dog-image-container")
        images.innerHTML += `<img src="${dog}">`
    })
}

document.addEventListener('DOMContentLoaded', function () {
    fetchDogs()
    fetchBreed()

    // locate your element and add the Click Event Listener
    document.getElementById("dog-breeds").addEventListener("click", function (e) {
        // e.target is our targetted element.
        // try doing console.log(e.target.nodeName), it will result LI
        if (e.target && e.target.nodeName == "LI") {
            e.target.style.color = "#ff0000";
        }
    });

    document.getElementById("breed-dropdown").addEventListener('change', (e) => {
        let filter = document.getElementById("breed-dropdown").value
        fetchBreed()
    });
})

function fetchBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => resp.json())
        .then(json => addBreeds(json));
}

function addBreeds(json) {
    const breedlist = document.getElementById("dog-breeds")
    breedlist.innerHTML = ``
    for (var key in json.message) {
        let filter = document.getElementById("breed-dropdown").value

        if (key.startsWith(filter)) {

            breedlist.innerHTML += `<li>${key}</li>`
        }
    }

} 

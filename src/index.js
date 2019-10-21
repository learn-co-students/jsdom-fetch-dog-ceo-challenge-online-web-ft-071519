document.addEventListener("DOMContentLoaded", function() {
    console.log("Seeing if this hot reloads");
    fetchDogs();
    fetchBreeds();
    filterDogs();
});

function fetchDogs() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            renderDogs(json);
        });
}

function renderDogs(json) {
    const container = document.getElementById('dog-image-container')
    json.message.forEach(dog => {
        const img = document.createElement('img');
        img.src = dog;
        container.appendChild(img)
    })

}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            renderBreeds(json)
        });
}

function renderBreeds(json) {

    const container = document.getElementById('dog-breeds');
    const message = json['message'];

    Object.keys(message).forEach(function(key) {
        const li = document.createElement('li');
        li.setAttribute('id', `${key}`);
        li.innerHTML = key;
        container.appendChild(li);
        changeColor(li)
    });
}

function changeColor(li) {
    li.addEventListener('click', function () {
        if (li.style.color === 'pink') {
            li.style.color = 'black'
        } else {
            li.style.color = 'pink'
        }
    })
}

function filterDogs() {
    const dropdown = document.getElementById('breed-dropdown');
    let li = document.getElementsByTagName('li');
    dropdown.addEventListener('change', function () {
        fetchBreeds();
        for (i = 0; i < li.length; i++) {
            if (li[i].innerText[0] !== dropdown.value) {
                li[i].style.display = 'none'
            }
        }
    });
}


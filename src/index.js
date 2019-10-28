console.log('%c HI', 'color: firebrick')
// URL variables for fetching 
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"



// on pageload- run fetch funct. 
document.addEventListener("DOMContentLoaded", function () {
    fetchImages()
})

// fetch images 

function fetchImages() {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => addImgtoDom(json));
}

// add JSON imgs to the DOM 

function addImgtoDom(json) {
    const dogImgCont = document.getElementById("dog-image-container")
    json.forEach(img => {
        const imgTag = document.createElement('img')
        imgTag.innerHTML = `<img src="${img}">`
        dogImgCont.appendChild(imgTag)
    })

}
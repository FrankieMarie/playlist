let allAlbums = document.getElementById('albums')

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then((response) => response.json())
.then((data) => {
    let albums = data.results
    albums.forEach(element => {
        let imageDiv = document.createElement('div')
        let image = document.createElement('img')
        image.src = './images/' + element.cover_art
        imageDiv.appendChild(image).classList.add('albumImg')
        allAlbums.appendChild(imageDiv).classList.add('albumImg')
    });
})

// allAlbums.addEventListener('click', addToBin)

// function addToBin(e){
    
// }
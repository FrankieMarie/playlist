let allAlbums = document.getElementById('albums')

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then((response) => response.json())
.then((data) => {
    let albums = data.results
    console.log(albums)
    albums.forEach(element => {
        let image = document.createElement('img')
        image.src = './images/' + element.cover_art
        allAlbums.appendChild(image).classList.add('albumDivs')
    });
    console.log(allAlbums)
})
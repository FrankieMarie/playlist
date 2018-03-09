let allAlbums = document.getElementById('albums')
let bin = document.getElementById('bin')

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then((response) => response.json())
.then((data) => {
    let albums = data.results
    albums.forEach(element => {
        //let imageDiv = document.createElement('div')
        let image = document.createElement('img')
        image.src = './images/' + element.cover_art
        image.addEventListener('click', function(){
            let output = `${element.artist}: ${element.title}`
            bin.innerHTML += output
        })
        //imageDiv.appendChild(image).classList.add('albumImg')
        allAlbums.appendChild(image).classList.add('albumImg')
    });
})

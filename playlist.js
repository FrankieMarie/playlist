let allAlbums = document.getElementById('albums')
let bin = document.getElementById('bin')
let clearBin = document.getElementById('clear_bin')
let submitBin = document.getElementById('submit_bin')

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then((response) => response.json())
.then((data) => {
    let albums = data.results
    albums.forEach(element => {
        let image = document.createElement('img')
        image.src = './images/' + element.cover_art
        image.addEventListener('click', function(){
            let output = `${element.artist}: ${element.title} </br>`
            bin.innerHTML += output
        })
        allAlbums.appendChild(image).classList.add('albumImg')
    });
    clearBin.addEventListener('click', function(){
        bin.innerHTML = ''
    })
})

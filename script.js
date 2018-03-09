const album1 = document.querySelector('#img_container1')
const album2 = document.querySelector('#img_container2')
const album3 = document.querySelector('#img_container3')

fetch('https://lit-fortress-6467.herokuapp.com/object')
.then((response) => response.json())
.then((data) => {
    let albums = data.results
    let outputArr = []
    let pass
    let randomImg1 = document.createElement('img')
    let randomImg2 = document.createElement('img')
    let randomImg3 = document.createElement('img')

    while ( outputArr.length != 3 ) {
        let randomImg = albums[Math.floor( Math.random() * albums.length )]
        pass = true
        for (let i=0; i<outputArr.length; i++) {
            if (randomImg === outputArr[i]) {
                pass = false
            }
        }
        if (pass){
            outputArr.push(randomImg)
        } 
    }
    for (let key in outputArr){
        randomImg1.src = './images/' + outputArr[0].cover_art
        randomImg2.src = './images/' + outputArr[1].cover_art
        randomImg3.src = './images/' + outputArr[2].cover_art
        album1.appendChild(randomImg1).classList.add('img_container')
        album2.appendChild(randomImg2).classList.add('img_container')
        album3.appendChild(randomImg3).classList.add('img_container')
    }
})
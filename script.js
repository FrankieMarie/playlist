const album1 = document.querySelector('#img_container1')
const album2 = document.querySelector('#img_container2')
const album3 = document.querySelector('#img_container3')

function getAlbums(){
    fetch('https://lit-fortress-6467.herokuapp.com/object')
    .then((response) => response.json())
    .then((data) => {
        let albums = data.results
        let arr = []
        let randomImg1 = document.createElement('img')
        let randomImg2 = document.createElement('img')
        let randomImg3 = document.createElement('img')
        for(let i=0; i<albums.length; i++){
            arr.push(albums[i].cover_art)  
        }
        randomImg1.src = './images/' + arr[Math.floor(Math.random() * arr.length)]
        randomImg2.src = './images/' + arr[Math.floor(Math.random() * arr.length)]
        randomImg3.src = './images/' + arr[Math.floor(Math.random() * arr.length)]
        album1.appendChild(randomImg1).classList.add('img_container')
        album2.appendChild(randomImg2).classList.add('img_container')
        album3.appendChild(randomImg3).classList.add('img_container')   
        
    })
}
getAlbums()

// function GetValue()
// {
//     var myarray= new Array("item1","item2","item3");
//     var random = myarray[Math.floor(Math.random() * myarray.length)];
//     //alert(random);
//     document.getElementById("message").innerHTML=random;
// }

//;
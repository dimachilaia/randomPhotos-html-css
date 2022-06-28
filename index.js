const imgEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');


btnEl.addEventListener('click', ()=>{
    imageNum = 12
    addNewImages();

    
})

function addNewImages(){

    for(let i = 0; i < imageNum; i ++){

    let image = document.createElement('img');
    image.src = `https://picsum.photos/300/300?random${Math.trunc(Math.random()*10000)}`
    imgEl.appendChild(image);
    }
}
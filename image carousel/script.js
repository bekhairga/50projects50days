const imagesContainer = document.getElementById('images-container');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const images = document.querySelectorAll('#images-container img');
let idx = 0;
let interval = setInterval(run, 2000);

function run(){
    idx++;
    changeImage();
}
function changeImage(){
    if(idx > images.length - 1){
        idx = 0;
    }else if(idx < 0){
        idx = images.length - 1;
    }
    imagesContainer.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

leftBtn.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
})
rightBtn.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
})
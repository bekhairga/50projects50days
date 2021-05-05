const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const body = document.querySelector('body');

document.addEventListener('click', (event)=>{
    const isClickInside = btn.contains(event.target);
    if(isClickInside){
        search.classList.toggle('active');
        input.focus()
    }
    else{
        search.classList.remove('active');
    }
})
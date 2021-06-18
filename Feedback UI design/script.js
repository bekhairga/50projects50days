const ratings = document.querySelectorAll('.rating');
const send = document.querySelector('#send');
const panel = document.querySelector('#panel');
const ratingsContainer = document.querySelector('.ratings-container');
let selectedRating = 'Satisfying';

//Event bubbling
ratingsContainer.addEventListener('click', (e)=>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    }
})
send.addEventListener('click', () => {
    panel.innerHTML = `
                <i class="fas fa-heart"></i>
                <strong>Thank you!</strong>
                <br>
                <strong>Feedback: ${selectedRating}</strong>
                <p>We'll use your feedback to improve our customer service</p>
`
})
function removeActive(){
    ratings.forEach(rating => rating.classList.remove('active'));
}
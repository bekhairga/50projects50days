const results = document.getElementById('results');
const filter = document.getElementById('filter');

const listItems = [];

async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50');
    const data = await res.json();

    //clear results
    results.innerHTML = '';
    data.results.forEach(user => {
        const userHTML = document.createElement('li');
        listItems.push(userHTML);
        userHTML.innerHTML = `
            <li>
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            </li>
        `
        results.appendChild(userHTML);
    })

}

getData();

filter.addEventListener('input', e => {
    filterData(e.target.value);
})

function filterData(searchTerm){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
            item.classList.remove('hide')
        }else{
            item.classList.add('hide');
        }
    })
}

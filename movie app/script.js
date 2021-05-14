const API_URL =
	'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=beeb5e91f79f7c68be280ec34c107fac&page=1';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API =
	'https://api.themoviedb.org/3/search/movie?api_key=beeb5e91f79f7c68be280ec34c107fac&page=1&query="';
const search = document.getElementById('search');
const form = document.getElementById('form');
const main = document.querySelector('main');
const getMovies = async (URL) => {
	const res = await fetch(URL);
	const data = await res.json();
	showMovie(data.results);
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = search.value;
	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm);
		search.value = '';
	} else {
		window.location.reload();
	}
});
function showMovie(movies) {
	main.innerHTML = '';
	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;
		const movieHTML = document.createElement('div');
		movieHTML.classList.add('movie');
		movieHTML.innerHTML = ` <img
        src="${IMAGE_PATH + poster_path}"
        alt="${title}"
            />
            <div class="movie-info">
                <h3 class="movie-title">${title}</h3>
                <span class="${getClassByRate(
									vote_average
								)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>`;
		main.appendChild(movieHTML);
	});
}
function getClassByRate(vote) {
	if (vote >= 8) {
		return 'green';
	} else if (vote >= 5) {
		return 'orange';
	} else {
		return 'red';
	}
}
getMovies(API_URL);

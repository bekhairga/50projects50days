const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
const generateJoke = async () => {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};
	const getJoke = await fetch('https://icanhazdadjoke.com', config);
	const data = await getJoke.json();
	joke.innerHTML = data.joke;
};

generateJoke();
jokeBtn.addEventListener('click', generateJoke);

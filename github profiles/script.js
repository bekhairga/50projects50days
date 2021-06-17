const APIURL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const user = search.value;
	if (user) {
		getUser(user);
		search.value = '';
	}
});

async function getUser(username) {
	try {
		const { data } = await axios.get(APIURL + username);
		createUserCard(data);
		getRepos(username);
	} catch (error) {
		if (error.response.status == 404) createErrorCard('No user found');
	}
}
function createErrorCard(message) {
	const cardHTML = `<div class="card">
        <h1>${message}</h1>
    </div>`;
	main.innerHTML = cardHTML;
}
function createUserCard(user) {
	const cardHTML = `
    <div class="card">
    <div>
        <img
            src="${user.avatar_url}"
            alt="${user.name}"
            class="avatar"
        />
    </div>
    <div class="user-info">
        <h2>${user.name}</h2>
        <p>
            ${user.bio}
        </p>
        <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Repositories</strong></li>
        </ul>
        <div id="repos">
        </div>
    </div>
</div>
`;
	main.innerHTML = cardHTML;
}

async function getRepos(username) {
	try {
		const { data } = await axios.get(APIURL + username + '/repos?sort=created');
		addReposToCard(data);
	} catch (error) {
		createErrorCard('Problem fetching repos');
	}
}
function addReposToCard(repos) {
	const reposHTML = document.getElementById('repos');
	repos.slice(0, 10).forEach((repo) => {
		const repoLink = document.createElement('a');
		repoLink.classList.add('repo');
		repoLink.href = repo.html_url;
		repoLink.target = '_blank';
		repoLink.innerText = repo.name;
		reposHTML.appendChild(repoLink);
	});
}

const url = 'https://source.unsplash.com/random';
const container = document.querySelector('.container');
const rows = 10;

function getRandomSize() {
	return `${getRandomNumber()}x${getRandomNumber()}`;
}
function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 300;
}
//function to get Image loaded
async function loadImage(url, img) {
	return new Promise((resolve, reject) => {
		img.onload = () => resolve(img);
		img.onerror = reject;
		img.src = url;
		return img;
	});
}
async function loadAllImages() {
	for (let i = 0; i < rows * 3; i++) {
		let img = document.createElement('img');
		const oldImage = document.querySelector(`#img${i - 1}`);
		img.id = i;
		const imgUrl = `${url}/${getRandomSize()}`;
		img = await loadImage(imgUrl, img);
		if (oldImage) {
			container.insertBefore(img, oldImage);
		} else {
			container.appendChild(img);
		}
		setTimeout(() => {}, 300);
	}
}
loadAllImages();

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const stopSongs = () => {
	sounds.forEach((sound) => {
		const soundToStop = document.getElementById(sound);
		soundToStop.pause();
		soundToStop.currentTime = 0;
	});
};
sounds.forEach((sound) => {
	const btn = document.createElement('button');
	console.log('btn');
	btn.addEventListener('click', () => {
		stopSongs();
		document.getElementById(sound).play();
	});
	btn.classList.add('btn');
	btn.innerText = sound;
	document.getElementById('buttons').appendChild(btn);
});

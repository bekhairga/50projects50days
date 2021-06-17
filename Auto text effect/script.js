const textHTML = document.getElementById('text');
const speedHTML = document.getElementById('speed');
const text = 'We love programming';
let idx = 1;
let speed = 300 / speedHTML.value;

writeText();
function writeText() {
	textHTML.innerHTML = text.slice(0, idx);
	idx++;
	if (idx > text.length) {
		idx = 1;
	}
	setTimeout(() => {
		writeText();
	}, speed);
}
speedHTML.addEventListener('input', (e) => {
	speed = 300 / e.target.value;
});

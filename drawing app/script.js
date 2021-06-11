const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const sizeDOM = document.getElementById('size');
const colorDOM = document.getElementById('color');
const clearDOM = document.getElementById('clear');
let color = 'black';

let size = 10;
let x;
let y;
let isPressed = false;
function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
}
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;
	x = e.offsetX;
	y = e.offsetY;
});
canvas.addEventListener('mouseup', (e) => {
	isPressed = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;
		//if we move too fast drawCircle will draw circles with a certain margin between them
		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);
		x = x2;
		y = y2;
	}
});
increase.addEventListener('click', () => {
	if (size <= 100) {
		size++;
		sizeDOM.innerHTML = size;
	}
});

decrease.addEventListener('click', () => {
	if (size >= 5) {
		size--;
		sizeDOM.innerHTML = size;
	}
});

colorDOM.addEventListener('change', (e) => {
	color = e.target.value;
});
clearDOM.addEventListener('click', (e) => {
	ctx.clearRect(0, 0, canvas.width, canvas.width);
});

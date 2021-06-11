const hourDOM = document.querySelector('.hour');
const minuteDOM = document.querySelector('.minute');
const secondDOM = document.querySelector('.second');
const timeDOM = document.querySelector('.time');
const dateDOM = document.querySelector('.date');
const toggleDOM = document.querySelector('.toggle');

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
toggleDOM.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark Mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light Mode';
	}
});
function setTime() {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const date = time.getDate();
	const amPm = hours >= 12 ? 'PM' : 'AM';

	hourDOM.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;
	minuteDOM.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;
	secondDOM.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	timeDOM.innerHTML = `${hoursForClock}: ${
		minutes < 10 ? `0 ${minutes}` : minutes
	} ${amPm}`;
	dateDOM.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

function scale(num, in_min, in_max, out_min, out_max) {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
setInterval(setTime, 1000);

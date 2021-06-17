const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
const messages = ['Message 1', 'Message 2', 'Message 3'];
const types = ['info', 'error', 'success'];
button.addEventListener('click', () => createNotification());
function createNotification(message = null, type = null) {
	const notification = document.createElement('div');
	const text = message ? message : getRandomMessage();
	notification.classList.add('toast');
	notification.innerText = text;
	notification.classList.add(type ? type : getRandomType());
	toasts.appendChild(notification);
	setTimeout(() => {
		notification.classList.add('disappear');
	}, 1500);
	setTimeout(() => {
		notification.remove();
	}, 1700);
}
function getRandomMessage() {
	return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
	return types[Math.floor(Math.random() * types.length)];
}

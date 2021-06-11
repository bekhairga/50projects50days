const buttons = document.querySelectorAll('.ripple');
buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		//position where it is clicked
		const x = e.clientX;
		const y = e.clientY;
		//position of the button
		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;
		//position how to translate the span(circle) inside the element
		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';
		this.appendChild(circle);
		setTimeOut(() => {
			circle.remove();
		}, 500);
	});
});

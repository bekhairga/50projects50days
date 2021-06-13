const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIdx = 0;
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));
const changeSlide = (direction) => {
	const sliderHeight = sliderContainer.clientHeight;
	if (direction === 'up') {
		activeSlideIdx++;
		if (activeSlideIdx > slidesLength - 1) {
			activeSlideIdx = 0;
		}
	} else if (direction === 'down') {
		activeSlideIdx--;
		if (activeSlideIdx < 0) {
			activeSlideIdx = slidesLength - 1;
		}
	} else {
		return;
	}
	slideRight.style.transform = `translateY(-${
		activeSlideIdx * sliderHeight
	}px)`;
	slideLeft.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`;
};

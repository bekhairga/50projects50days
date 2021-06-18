const passwordHTML = document.getElementById('password');
const backgroundHTML = document.getElementById('background');

passwordHTML.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2;
    backgroundHTML.style.filter = `blur(${blurValue >= 0 ? blurValue : 0}px)`;
} )
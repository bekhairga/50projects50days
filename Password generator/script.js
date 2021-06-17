const resultHTML = document.getElementById('result');
const lengthHTML = document.getElementById('length');
const uppercaseHTML = document.getElementById('uppercase');
const lowercaseHTML = document.getElementById('lowercase');
const numbersHTML = document.getElementById('numbers');
const symbolsHTML = document.getElementById('symbols');
const generateHTML = document.getElementById('generate');
const clipboardHTML = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};
//to copy to CLIPBOARD we need to create text area in order to select the text and then copy it
clipboardHTML.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultHTML.innerText;
	if (!password) {
		return;
	}
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password is copied to clipboard');
});
generateHTML.addEventListener('click', () => {
	const length = +lengthHTML.value;
	const hasLower = lowercaseHTML.checked;
	const hasUpper = uppercaseHTML.checked;
	const hasNumber = numbersHTML.checked;
	const hasSymbol = symbolsHTML.checked;
	resultHTML.innerHTML = generatePassword(
		hasLower,
		hasUpper,
		hasNumber,
		hasSymbol,
		length
	);
});

function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0]
	);
	if (typesCount === 0) {
		return '';
	}
	for (let i = 0; i < length; i += typesCount) {
		//random type
		for (let i = 0; i < typesCount; i++) {
			const key = typesArr[Math.floor(Math.random() * typesCount)];
			const funcName = Object.keys(key)[0];
			generatedPassword += randomFunc[funcName]();
		}
		//types follows the pattern lower upper number symbol
		// typesArr.forEach((type) => {
		// 	const funcName = Object.keys(type)[0];
		// 	generatedPassword += randomFunc[funcName]();
		// });
	}
	const finalPassword = generatedPassword.slice(0, length);
	return finalPassword;
}
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

//TRANSITION BETWEEN SECTIONS

const hiddenContent1 = document.getElementById('hidden-1');
const hiddenContent2 = document.getElementById('main-text');
const hiddenContent3 = document.getElementById('hidden-2');
const hiddenContent4 = document.getElementById('hidden-3');
const hiddenContent5 = document.getElementById('hidden-4');
const hiddenContent6 = document.getElementById('hidden-5');
const hiddenContent7 = document.getElementById('hidden-6');
const hereLink = document.getElementById('here');
const here2 = document.getElementById('here2');
const here4 = document.getElementById('here3');
const here5 = document.getElementById('here4');
const here6 = document.getElementById('here5');
const here7 = document.getElementById('here6');
const homeButton = document.getElementById('home');
const title = document.getElementById('title');

const hideDiv1 = () => {
	hiddenContent1.classList.remove('hide');
	hiddenContent2.classList.add('hide');
	hiddenContent3.classList.add('hide');
	hiddenContent4.classList.add('hide');
	hiddenContent5.classList.add('hide');
	hiddenContent6.classList.add('hide');
	hiddenContent7.classList.add('hide');
};

const hideDiv2 = () => {
	hiddenContent1.classList.add('hide');
	hiddenContent2.classList.add('hide');
	hiddenContent3.classList.remove('hide');
	hiddenContent4.classList.add('hide');
	hiddenContent5.classList.add('hide');
	hiddenContent6.classList.add('hide');
	hiddenContent7.classList.add('hide');
};

const hideDiv3 = () => {
	hiddenContent1.classList.add('hide');
	hiddenContent2.classList.add('hide');
	hiddenContent3.classList.add('hide');
	hiddenContent4.classList.remove('hide');
	hiddenContent5.classList.add('hide');
	hiddenContent6.classList.add('hide');
	hiddenContent7.classList.add('hide');
};

const hideDiv4 = () => {
	hiddenContent1.classList.add('hide');
	hiddenContent2.classList.add('hide');
	hiddenContent3.classList.add('hide');
	hiddenContent4.classList.add('hide');
	hiddenContent5.classList.remove('hide');
	hiddenContent6.classList.add('hide');
	hiddenContent7.classList.add('hide');
};

const hideDiv5 = () => {
	hiddenContent1.classList.add('hide');
	hiddenContent2.classList.add('hide');
	hiddenContent3.classList.add('hide');
	hiddenContent4.classList.add('hide');
	hiddenContent5.classList.add('hide');
	hiddenContent6.classList.remove('hide');
	hiddenContent7.classList.add('hide');
};

const hideDiv6 = () => {
	hiddenContent1.classList.add('hide');
	hiddenContent2.classList.add('hide');
	hiddenContent3.classList.add('hide');
	hiddenContent4.classList.add('hide');
	hiddenContent5.classList.add('hide');
	hiddenContent6.classList.add('hide');
	hiddenContent7.classList.remove('hide');
};

const goHome = () => {
	hiddenContent2.classList.remove('hide');
	hiddenContent1.classList.add('hide');
	hiddenContent3.classList.add('hide');
	hiddenContent4.classList.add('hide');
	hiddenContent5.classList.add('hide');
	hiddenContent6.classList.add('hide');
	hiddenContent7.classList.add('hide');
	number = 0; //Why doesn't this reset the counters? Scope?
	i = -1;
};

title.addEventListener('click', goHome);
hereLink.addEventListener('click', hideDiv1);
here2.addEventListener('click', hideDiv2);
here4.addEventListener('click', hideDiv3);
here5.addEventListener('click', hideDiv4);
here6.addEventListener('click', hideDiv5);
here7.addEventListener('click', hideDiv6);

homeButton.addEventListener('click', goHome);

// CLOCK //

function refreshTime() {
	let str = '';
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();

	hoursString = hours.toString();
	minutesString = minutes.toString();
	secondsString = seconds.toString();

	// FORMATTING THE TIME //

	if (hours > 12) {
		hours -= 12;
	}

	if (minutes < 10) {
		minutes = `0${minutesString}`;
	}

	if (seconds < 10) {
		seconds = `0${secondsString}`;
	}

	if (hours == 0) {
		hours = 12;
	}

	hoursString > 12 ? (amPm = 'PM') : (amPm = 'AM');

	str += `The time is <span class = 'clock-text'>${hours}:${minutes}:${seconds} ${amPm}</span>`;

	document.getElementById('clock').innerHTML = str;
}

// DATE //

function setDate() {
	const date = new Date();
	dateStr = '';

	let dayOfMonth = date.getDate();
	let day = date.getDay();
	let month = date.getMonth();
	let year = date.getFullYear();

	if (day == 0) {
		day = 'Sunday';
	}
	if (day == 1) {
		day = 'Monday';
	}
	if (day == 2) {
		day = 'Tuesday';
	}
	if (day == 3) {
		day = 'Wednesday';
	}
	if (day == 4) {
		day = 'Thursday';
	}
	if (day == 5) {
		day = 'Friday';
	}
	if (day == 6) {
		day = 'Saturday';
	}

	if (month == 0) {
		month = 'January';
	}
	if (month == 1) {
		month = 'February';
	}
	if (month == 2) {
		month = 'March';
	}
	if (month == 3) {
		month = 'April';
	}
	if (month == 4) {
		month = 'May';
	}
	if (month == 5) {
		month = 'June';
	}
	if (month == 6) {
		month = 'July';
	}
	if (month == 7) {
		month = 'August';
	}
	if (month == 8) {
		month = 'September';
	}
	if (month == 9) {
		month = 'October';
	}
	if (month == 10) {
		month = 'November';
	}
	if (month == 11) {
		month = 'December';
	}

	dateStr += `It is <span class = 'date-text'>${day}, ${dayOfMonth} ${month}, ${year}</span>`;

	document.getElementById('date').innerHTML = dateStr;
}

setInterval(refreshTime, 1000);
setDate();

// COUNTER //
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');

let number = 0;

const increment = () => {
	number++;
	if (number > 10) {
		number = 10;
	}
	document.getElementById('counter').innerHTML = number;
};

const decrement = () => {
	number--;
	if (number < 0) {
		number = 0;
	}
	document.getElementById('counter').innerHTML = number;
};

document.getElementById('counter').innerHTML = number;

plusButton.addEventListener('click', increment);
minusButton.addEventListener('click', decrement);

//ARRAYS

const left = document.getElementById('left');
const right = document.getElementById('right');
const words =
	'&nbsp This is an array of words called words. In Python it is called a list but this is JavaScript so we call it an array. &nbsp';

const wordArray = words.split(' ');

let i = -1;

const changeWordForward = () => {
	if (i > wordArray.length - 2) {
		i = wordArray.length - 1;
	} else {
		i++;
	}
	document.getElementById('word').innerHTML = wordArray[i];
};

const changeWordBackward = () => {
	if (i < 1) {
		i = 0;
	} else {
		i--;
	}
	document.getElementById('word').innerHTML = wordArray[i];
};

changeWordForward(); //Without this, it takes two clicks on the arrow to get the array moving
right.addEventListener('click', changeWordForward);
left.addEventListener('click', changeWordBackward);

//FORM//

const nameMessage = () => {
	event.preventDefault();
	if (document.getElementById('myName').value) {
		document.getElementById('name').innerHTML = `${
			document.getElementById('myName').value
		}, you are an amazing person. Everyone likes you and it's easy to see why.`;
		document.getElementById('hidden-nav').classList.remove('hide');
	} else {
		document.getElementById('name').innerHTML =
			"Enter your name, or if you're shy, any text at all.";
	}
};

const nameButton = document.getElementById('name-button');
nameButton.addEventListener('click', nameMessage);

//SQUARES//

const leftSquare = document.getElementById('left-square');
const rightSquare = document.getElementById('right-square');
const everything = document.getElementsByTagName('*');

const leftSquareClick = () => {
	leftSquare.classList.add('black');
	leftSquare.classList.remove('white');
	rightSquare.classList.add('white');
	rightSquare.classList.remove('black');
	invertColorsBlue();
};

const rightSquareClick = () => {
	rightSquare.classList.add('black');
	rightSquare.classList.remove('white');
	leftSquare.classList.add('white');
	leftSquare.classList.remove('black');
	invertColorsOrange();
};

const invertColorsBlue = () => {
	for (i = 0; i < everything.length; i++) {
		everything[i].classList.add('inverse');
	}
};

const invertColorsOrange = () => {
	for (i = 0; i < everything.length; i++) {
		everything[i].classList.remove('inverse');
	}
};

leftSquare.addEventListener('click', leftSquareClick);
rightSquare.addEventListener('click', rightSquareClick);

//SLIDER
const slider = document.getElementById('slider');
// const sliderText = document.getElementById('counter');

slider.addEventListener('input', () => {
	document.getElementById('counter').innerHTML = slider.value;
	// console.log(slider.value);
	console.log(sliderText.innerHTML)
});

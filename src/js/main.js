const qs = selector => document.querySelector(selector);
const qsa = selector => document.querySelectorAll(selector);

countDown();

function countDown() {
	const countDownDate = new Date('June 22, 2022 00:00:00').getTime(); // My Birthday
	let interval;
	const days = qs('#days'),
		hours = qs('#hours'),
		minutes = qs('#minutes'),
		seconds = qs('#seconds');

	const handler = () => {
		const now = new Date().getTime();
		const distance = countDownDate - now;

		days.innerText = Math.floor(distance / (1000 * 60 * 60 * 24))
			.toString()
			.padStart(2, '0');
		hours.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
			.toString()
			.padStart(2, '0');
		minutes.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
			.toString()
			.padStart(2, '0');
		seconds.innerText = Math.floor((distance % (1000 * 60)) / 1000)
			.toString()
			.padStart(2, '0');

		if (distance < 0) {
			clearInterval(interval);
			days.innerText = hours.innerText = minutes.innerText = seconds.innerText = '00';
		}
	};

	handler();
	interval = setInterval(handler, 1000);
}

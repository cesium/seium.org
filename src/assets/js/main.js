$(() => {
	// Enable Bootstrap tooltip
	$('[data-toggle="tooltip"]').tooltip();
});

function animateValue(id, start, end, duration) {
	if (start === end) return;
	var range = end - start;
	var current = start;
	var increment = end > start? 1 : -1;
	var stepTime = Math.abs(Math.floor(duration / range));
	var obj = document.getElementById(id);
	var timer = setInterval(function() {
		current += increment;
		obj.innerHTML = current;
		if (current == end) {
			clearInterval(timer);
		}
	}, stepTime);
}
animateValue("cities", 943, 1943, 0);
animateValue("sellers", 0, 1259, 1000);
animateValue("agencies", 0, 300, 800);
animateValue("store", 0, 1337, 800);
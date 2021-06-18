const toggles = document.querySelectorAll('.toggle');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');

toggles.forEach(toggle => {
	toggle.addEventListener('change', (e) => {
		doTheTrick(e.target)
	});
});

function doTheTrick(theClickedOne) {

	if(a1.checked && a2.checked && a3.checked) {

		if(a1 === theClickedOne) {
			a3.checked = false;
		}
		
		if(a2 === theClickedOne) {
			a1.checked = false;
		}
		
		if(a3 === theClickedOne) {
			a2.checked = false;
		}
	}
}
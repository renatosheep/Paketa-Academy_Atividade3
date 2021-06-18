let likebtn = document.querySelector('#likebtn');
let dislikebtn = document.querySelector('#dislikebtn');
let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
const textarea = document.getElementById('#textarea');
const container = document.getElementById('.voting');

likebtn.addEventListener('click', () => {
    input1.value = parseInt(input1.value) + 1;
    input1.style.color = "#12ff00";
})

dislikebtn.addEventListener('click', () => {
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "#ff0000";
})


textarea.addEventListener('keypress', (e) => {
	if(e.key === 'Enter') {
		addSuggestionToDOM(e.target.value.trim());
		
		setTimeout(() => {
			textarea.value = '';
		}, 10);
	}
});

function addSuggestionToDOM(suggestionText) {
	const newSuggestion = document.createElement('div');
	newSuggestion.classList.add('suggestion');
	newSuggestion.innerHTML = `
                <div class="voting">
                    <div class="suggestion">
                        <strong>${suggestionText}</strong>
                    <button id="likebtn">
                        <i class="fa fa-thumbs-up"></i>
                    </button>
                    <input type="number" id="input1" value="0" name="">
                    <button id="dislikebtn">
                        <i class="fa fa-thumbs-down"></i>
                    </button>
                    <input type="number" id="input2" value="0" name="">
                </div>
    `;

	container.appendChild(newSuggestion);

}






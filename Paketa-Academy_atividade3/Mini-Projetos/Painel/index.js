let result = document.getElementById('result');

let DOGS = {
	'akita': {
		name: 'Akita',
		img: './Imagens/Akita.jpg'
	},
	'border': {
		name: 'Border Collie',
		img: './Imagens/Border.jpg'
	},
	'husky': {
		name: 'Husky Siberiano',
		img: './Imagens/Husky.jpg'
	},
	'malamute': {
		name: 'Malamute do Alaska',
		img: './Imagens/Malamute.jpg'
	},
	'samoieda': {
		name: 'Samoieda',
		img: './Imagens/Samoieda.jpg'
	},
}

function renderDogs(dogs){
	function item(dog) {
		return `
			<li>
				<img src=${dog.img} >
				<span>${dog.name}</span>				
			</li>
		`
	}
	const elements = Object.keys(dogs).map((dog, index) => {
		return item(dogs[dog])
	})
	document.querySelector("#result").insertAdjacentHTML('beforeend', elements)
}

function filter(valorDigitado){
	let newDogs = [] 
	
	
	Object.keys(DOGS).forEach(dog => {
		if ((DOGS[dog].name).includes(valorDigitado)) {
			newDogs.push(DOGS[dog]) 
		}
	}) 
	document.querySelector("#result").innerHTML = ''
	console.log('newDogs', newDogs)
	renderDogs(newDogs)
} 

const filterElement = document.querySelector('#filter');

filterElement.addEventListener('change', (event) => {
	const value = event.target.value
	filter(value)
});

	renderDogs(DOGS)


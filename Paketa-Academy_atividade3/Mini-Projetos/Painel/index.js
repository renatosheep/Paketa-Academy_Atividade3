const result = document.getElementById('result');
const filter = document.getElementById('filter');

const dogs = [{
	'akita': {
		name: 'Akita'
	},
	'border': {
		name: 'Border Collie'
	},
	'husky': {
		name: 'Husky Siberiano'
	},
	'malamute': {
		name: 'Malamute do Alaska'
	},
	'samoieda': {
		name: 'Samoieda'
	},
}]

dogs.filter(dogs => console.log((dogs.name).includes('Akita')))
console.log(filter.value)
console.log
//users.filter(user => (user.name).includes(valorDigitado))


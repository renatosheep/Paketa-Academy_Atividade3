const dogsEl = document.querySelectorAll('.dog');
const container = document.querySelector('.container');
const nameEl = document.querySelector('.name');
const textEl = document.querySelector('.text');

const descripition = [{
	text: 'Akita inu (em japonês: 秋田犬) é uma raça de cães de grande porte do tipo spitz originária das regiões montanhosas do norte do Japão. Existem duas variedades distintas de Akita: um tipo japonês, comumente chamado Akita inu (inu significa cão em japonês) ou Akita japonês, e um tipo americano, conhecido como Akita americano.',
	name: 'Akita Inu',
	color: 'rgba(130, 59, 90,1.0)'
},{
	text: 'Border collie (em tradução livre "collie da fronteira") é uma raça canina do tipo collie desenvolvida na região da fronteira anglo-escocesa na Grã-Bretanha para o trabalho de pastorear gado ovino. Popular em seu país de origem, é considerado a raça de cães mais inteligente do mundo, de acordo com o livro de Stanley Coren, A Inteligência dos Cães (1995).',
	name: 'Border Collie',
	color: 'rgba(150, 130, 49,1.0)'
},{
	text: 'O husky siberiano (em russo: Сибирский хаски) é uma raça de cães de trabalho e companhia, do tipo Spitz, oriunda da Sibéria na Rússia. Sua função específica é tracionar trenós. Estes cães, ou seus ancestrais, são conhecidos na Sibéria há milhares de anos, em uma região específica a leste dos Montes Urais, inicialmente utilizados como cães multifuncionais foram especialmente selecionados ao longo de centenas de anos pelos Chukchi, um povo que vive na região, para puxar trenós em condições de frio extremo.',
	name: 'Husky Siberiano',
	color: 'rgba(75, 123, 236,1.0)'
},{
	text: 'Malamute-do-alaska (em inglês: Alaskan Malamute) é uma raça de cães oriunda do Alasca, nos Estados Unidos. Considerada antiga, tem sua origem imprecisa, embora saiba-se que foram desenvolvidos por tribos do Alasca para o trabalho. Criado para puxar trenós e auxiliar na caça, foi nomeado em homenagem à tribo que primeiramente desenvolveu estes caninos, os Mahlemuts. Resistentes e fortes, foram peças fundamentais para os colonizadores da região durante o período da corrida do ouro.',
	name: 'Malamute do Alaska',
	color: 'rgba(236, 94, 234,1.0)'
},{
	text: 'Samoiedo[a] (em russo: самоедская собака, transl. samoiedskaïa sobaka), ou samoieda, é uma raça de cães do tipo spitz oriunda do norte da Rússia, na região da Sibéria. O nome da raça deriva das tribos Samoyed, que usavam cães do tipo spitz de várias cores para pastorear renas mais ao sul, e usavam cães brancos para caça e para tração de trenós mais ao norte.',
	name: 'Samoieda',
	color: 'rgba(266, 191, 107,1.0)'
}];

addTestimonial(0);

dogsEl.forEach((dog, idx) => {
	dog.addEventListener('click', (e) => {
		addTestimonial(idx);
		dog.classList.add('selected');
	})
});

function addTestimonial(idx) {
	const testimonial = descripition[idx];
	
	nameEl.innerHTML = testimonial.name;
	textEl.innerHTML = testimonial.text;
	container.style.background = testimonial.color;
	
	dogsEl.forEach(dog => {
		dog.classList.remove('selected');
	});
}
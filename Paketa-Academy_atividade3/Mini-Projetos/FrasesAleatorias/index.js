const MGS = [
	{
		text: 'Akita inu (em japonês: 秋田犬) é uma raça de cães de grande porte do tipo spitz originária das regiões montanhosas do norte do Japão. Existem duas variedades distintas de Akita: um tipo japonês, comumente chamado Akita inu (inu significa cão em japonês) ou Akita japonês, e um tipo americano, conhecido como Akita americano.'
	},
	{
		text: 'Border collie (em tradução livre "collie da fronteira") é uma raça canina do tipo collie desenvolvida na região da fronteira anglo-escocesa na Grã-Bretanha para o trabalho de pastorear gado ovino.'
	},
	{
		text: 'O husky siberiano (em russo: Сибирский хаски) é uma raça de cães de trabalho e companhia, do tipo Spitz, oriunda da Sibéria na Rússia. Sua função específica é tracionar trenós. Estes cães, ou seus ancestrais, são conhecidos na Sibéria há milhares de anos.'
	},
	{
		text: 'Malamute-do-alaska (em inglês: Alaskan Malamute) é uma raça de cães oriunda do Alasca, nos Estados Unidos. Considerada antiga, tem sua origem imprecisa, embora saiba-se que foram desenvolvidos por tribos do Alasca para o trabalho.'
	},
	{
		text: 'Samoiedo[a] (em russo: самоедская собака, transl. samoiedskaïa sobaka), ou samoieda, é uma raça de cães do tipo spitz oriunda do norte da Rússia, na região da Sibéria. O nome da raça deriva das tribos Samoyed, que usavam cães do tipo spitz de várias cores para pastorear renas mais ao sul, e usavam cães brancos para caça e para tração de trenós mais ao norte.'
	}]

const btn = document.querySelector('.btn')
const texto = document.querySelector('.dog')


btn.addEventListener('click', (e) => {
	filter(e.target.value);
})

function renderMGS(mgs){
	function item(items) {
		return `
			${items.text}
		`
	}
	const elements = Object.keys(mgs).map((items, index) => {
		return item(mgs)
	})
	texto.insertAdjacentHTML('beforeend', elements)
}


function filter(){
	let newMGS = ''
	let max = MGS.length
	
	Object.keys(MGS).forEach( () => {

		newMGS = MGS[Math.floor(Math.random() * max)]

	})
	texto.innerHTML = ''
	renderMGS(newMGS)
} 

renderMGS(MGS[0])

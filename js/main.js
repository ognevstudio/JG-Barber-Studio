const template = `
    <a class="inst" href="https://instagram.com/xruizzxx?igshid=NzZlODBkYWE4Ng==">@Josue</a>
    <div class="square"></div>
    <a class="inst" href="https://instagram.com/rr_gab?igshid=NzZlODBkYWE4Ng==">@Gabriel</a>
    <div class="square"></div>
`;

const line = document.querySelector(".poster-line__container");

for (let i = 0; i < 20; i++) {
    const lineBody = document.createElement('div');
    lineBody.classList.add('line__body');
    lineBody.innerHTML = template;
    line.appendChild(lineBody);
}


/* ----------------------------------- */

const servicesList = document.querySelector('.services-list')

// Массив с данными всех категорий меню
let servicesArr = [
	{
		title: 'Only haircut / Solo Corte', 
		EN: 'Regular haircut and shampoo', 
		ES: 'Corte regular y shampoo',
		price: '$40.00',
		time: '30 min',
	},
	{
		title: 'Haircut And Eyebrows / Corte y Cejas', 
		EN: 'Regular haircut, Shampoo and eyebrows', 
		ES: 'Corte regular, shampoo y cejas',
		price: '$45.00',
		time: '30 min',
	},
	{
		title: 'Haircut & Beard / Corte y Barba', 
		EN: 'Hot towel shave and shampoo does not include temporary paint', 
		ES: 'Rasurado con toalla caliente, shampoo, no incluye pintura temporal',
		price: '$70.00',
		time: '60 min',
	},
	{
		title: 'only Beard / Solo Barba', 
		EN: 'Hot towel and shave, hair line up can be added ', 
		ES: 'Toalla caliente y rasurado, delineado de cabello puede ser agregado',
		price: '$40.00',
		time: '30 min',
	},
	{
		title: 'Kids Haircut / Corte de niño', 
		EN: '9 year old and under ', 
		ES: '9 años o menos',
		price: '$40.00',
		time: '30 min',
	},
	{
		title: 'Haircut / Corte De Cabello', 
		EN: 'Eyebrows included , shampoo and styled hair with our line of products', 
		ES: '',
		price: '$50.00',
		time: '60 min',
	},
	{
		title: 'Haircut And Beard Shave/ Corte Y Rasurado De Barba', 
		EN: 'Eyebrows included , shampoo and styled hair with our line of products', 
		ES: '',
		price: '$60.00',
		time: '60 min',
	},
	{
		title: 'Kids Haircut / Corte De Cabello Infantil', 
		EN: 'Eyebrows included (optional) , shampoo and styled hair with our line of products', 
		ES: '',
		price: '$50.00',
		time: '60 min',
	}
]

// Генерируем все карточки
servicesArr.forEach(service => {
	let element = document.createElement('div')

	element.classList.add('services-list__li');

	imgPath = './img/main.svg'

	let template = `
	<div class="service__header">
		<h4 class="service__title">${service.title}</h4>
		<p class="service__txt text">${service.EN}</p>
		<p class="service__txt text">${service.ES}</p>	
	</div>
	<div class="service__info">
		<span class="service__price bold-text">${service.price}</span>
		<span class="service__time bold-text">${service.time}</span>
	</div>
	`
	
	element.innerHTML = template
	servicesList.appendChild(element)
});
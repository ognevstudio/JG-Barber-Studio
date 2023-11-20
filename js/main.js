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
		title: 'Only haircut', 
		EN: 'Regular haircut and shampoo', 
		ES: '',
		price: '$40.00',
		time: '30 min',
	},
	{
		title: 'only Beard', 
		EN: 'Hot towel and shave, hair line up can be added ', 
		ES: '',
		price: '$40.00',
		time: '30 min',
	},
	{
		title: 'Haircut And Eyebrows', 
		EN: 'Regular haircut, Shampoo and eyebrows', 
		ES: '',
		price: '$45.00',
		time: '30 min',
	},
	{
		title: 'Haircut & Beard', 
		EN: 'Hot towel shave and shampoo does not include temporary paint', 
		ES: '',
		price: '$70.00',
		time: '60 min',
	},
	{
		title: 'Kids Haircut', 
		EN: '9 year old and under ', 
		ES: '',
		price: '$40.00',
		time: '30 min',
	},
	{
		title: 'Haircut', 
		EN: 'Eyebrows included , shampoo and styled hair with our line of products', 
		ES: '',
		price: '$50.00',
		time: '60 min',
	},
	{
		title: 'Haircut And Beard Shave', 
		EN: 'Eyebrows included , shampoo and styled hair with our line of products', 
		ES: '',
		price: '$60.00',
		time: '60 min',
	},
	{
		title: 'Kids Haircut', 
		EN: 'Eyebrows included (optional) , shampoo and styled hair with our line of products', 
		ES: '',
		price: '$50.00',
		time: '60 min',
	}
]

let ID = 0

// Генерируем все карточки
servicesArr.forEach(service => {
	ID += 1
	let element = document.createElement('div')

	element.classList.add('services-list__li');
	element.id = ID;

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
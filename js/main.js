const header = document.querySelector(".header")
const burger = document.querySelector(".menu-burger")
const menu = document.querySelector(".menu")
const app = document.querySelector(".app")
const links = document.querySelectorAll(".menu__link")

burger.addEventListener( "click", () => {
	header.classList.toggle('active');
	menu.classList.toggle('active');
	burger.classList.toggle('active')
	app.classList.toggle('active')
})

const screenSizeCheck = () => {
	let screenWidth = document.documentElement.clientWidth
	if (screenWidth < 767) {
		links.forEach(link => (
			link.onclick = function(){
				header.classList.toggle('active');
				menu.classList.toggle('active');
				burger.classList.toggle('active')
				app.classList.toggle('active')
			}
		)) 
	}
}

screenSizeCheck()

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('show-menu');
  }
});

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
		price: '$45.00',
		time: '30 min',
		link: "https://getsquire.com/booking/book/jg-barber-studio-aurora/barber/josue-ruiz/schedule?cart=7656568b-c678-4d62-b9b8-a959aaba6414"
	},
	{
		title: 'Haircut And Eyebrows / Corte y Cejas', 
		EN: 'Regular haircut, Shampoo and eyebrows', 
		ES: 'Corte regular, shampoo y cejas',
		price: '$50.00',
		time: '30 min',
		link: "https://getsquire.com/booking/book/jg-barber-studio-aurora/barber/josue-ruiz/schedule?cart=dc5d666a-7295-4835-99be-81e24604685c"
	},
	{
		title: 'Haircut & Beard / Corte y Barba', 
		EN: 'Hot towel shave and shampoo does not include temporary paint', 
		ES: 'Rasurado con toalla caliente, shampoo, no incluye pintura temporal',
		price: '$70.00',
		time: '60 min',
		link: "https://getsquire.com/booking/book/jg-barber-studio-aurora/barber/josue-ruiz/schedule?cart=99310da3-8e31-4039-b87a-0e31681ac06e"
	},
	{
		title: 'only Beard / Solo Barba', 
		EN: 'Hot towel and shave, hair line up can be added ', 
		ES: 'Toalla caliente y rasurado, delineado de cabello puede ser agregado',
		price: '$45.00',
		time: '30 min',
		link: "https://getsquire.com/booking/book/jg-barber-studio-aurora/barber/josue-ruiz/schedule?cart=b7f9f5b8-0431-4ff0-a9ea-d12a3cdaa4f4"
	},
	{
		title: 'Kids Haircut / Corte de niño', 
		EN: '9 year old and under ', 
		ES: '9 años o menos',
		price: '$45.00',
		time: '30 min',
		link: "https://getsquire.com/booking/book/jg-barber-studio-aurora/barber/josue-ruiz/schedule?cart=8dc88025-b7f2-4637-a0c3-10c7309dbbda"
	}
]

// Генерируем все карточки
servicesArr.forEach(service => {
	let element = document.createElement('div')

	element.classList.add('services-list__li');

	imgPath = './img/main.svg'

	let template = `
	<a href="${service.link}" class="service-link">
		<div class="service__header">
			<h4 class="service__title">${service.title}</h4>
			<p class="service__txt text">${service.EN}</p>
			<p class="service__txt text">${service.ES}</p>	
		</div>
		<div class="service__info">
			<span class="service__price bold-text">${service.price}</span>
			<span class="service__time bold-text">${service.time}</span>
		</div>
	</a>
	`
	
	element.innerHTML = template
	servicesList.appendChild(element)
});



/* ----------------------------------- */


const reviewsList01 = document.querySelector('.reviews__first-row')

// Массив с данными всех категорий меню
let reviewsArr01 = [
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	},
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	},
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	}
]

const reviewsList02 = document.querySelector('.reviews__second-row')

// Массив с данными всех категорий меню
let reviewsArr02 = [
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `I have been taking my son to see Gabe since forever! He is super professional and does an amazing job! Not to mention the way he treats my son. He is always so nice! My son loves him and always lets him do «free style» that’s how much he trusts him! Gabe does an impeccable job all the time!!`, 
		author: `Devin Cruz`
	},
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `I have been taking my son to see Gabe since forever! He is super professional and does an amazing job! Not to mention the way he treats my son. He is always so nice! My son loves him and always lets him do «free style» that’s how much he trusts him! Gabe does an impeccable job all the time!!`, 
		author: `Devin Cruz`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	},
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	},
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `I have been taking my son to see Gabe since forever! He is super professional and does an amazing job! Not to mention the way he treats my son. He is always so nice! My son loves him and always lets him do «free style» that’s how much he trusts him! Gabe does an impeccable job all the time!!`, 
		author: `Devin Cruz`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	},
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	},
	{
		text: `Josue and Gabriel will take great care of you. Get a cut as simple or as complex as you like here, and always feel welcome. Easy 5 stars!`, 
		author: `Borna Arjomandi`
	},
	{
		text: `Amazing attention, service and work quality!`, 
		author: `Luis Rivas`
	},
	{
		text: `I have been taking my son to see Gabe since forever! He is super professional and does an amazing job! Not to mention the way he treats my son. He is always so nice! My son loves him and always lets him do «free style» that’s how much he trusts him! Gabe does an impeccable job all the time!!`, 
		author: `Devin Cruz`
	},
	{
		text: `Excellent work, very professional, clean and helpful`, 
		author: `Luis Roberto Ninffert`
	}
]

// Генерируем все карточки
reviewsArr01.forEach(review => {
	let element = document.createElement('div')

	element.classList.add('reviews__review');
	element.classList.add('review');

	let template = `
<div class="review__stars">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
</div>
<p class="review__txt text">${review.text}</p>
<p class="review__author text">- ${review.author}</p>
	`
	
	element.innerHTML = template
	reviewsList01.appendChild(element)
});


// Генерируем все карточки
reviewsArr02.forEach(review => {
	let element = document.createElement('div')

	element.classList.add('reviews__review');
	element.classList.add('review');

	let template = `
<div class="review__stars">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
	<img src="./img/star.svg" alt="">
</div>
<p class="review__txt text">${review.text}</p>
<p class="review__author text">- ${review.author}</p>
	`
	
	element.innerHTML = template
	reviewsList02.appendChild(element)
});


function initMap() {
	var uluru = {lat: 39.6668716, lng: -104.8602724};

	let map = new google. maps. Map (document. getElementById ('map'), {
		mapId: "e31bdd6c7d81467e",
		zoom: 17.5, 
		disableDefaultUI: true,
		center: uluru
	});

	let marker = new google. maps .Marker({
		position: uluru, map: map
	});
}
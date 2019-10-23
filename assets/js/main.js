const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons 
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;
console.log(size);

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners

nextBtn.addEventListener('click', ()=>{
	if(counter >= carouselImages.length -1) return;
	carouselSlide.style.transition = "transform 0.4s ease";
	counter++;
	console.log("you are on image " + counter );
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click', ()=>{
	if(counter <=0 ) return;
	carouselSlide.style.transition = "transform 0.4s ease";
	counter--;
	console.log("you are on image " + counter );
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

carouselSlide.addEventListener('transitionend', ()=>{
	if (carouselImages[counter].id === 'lastClone' ){
	carouselSlide.style.transition = "none";
	counter = carouselImages.length -2;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	console.log(counter);

	}

	if (carouselImages[counter].id === 'firstClone' ){
	carouselSlide.style.transition = "none";
	counter = carouselImages.length - counter;
	carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	console.log(counter);

	}
});

nextBtn.classList.add('next', 'button');
prevBtn.classList.add('prev', 'button');




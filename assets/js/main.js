$(document).ready(function(){
	
	// //Init ScrollMagic
	// var controller = new ScrollMagic.Controller();
	
	// //Build a scene
	
	// var firstscene = new ScrollMagic.Scene({
	// 	triggerElement: '#footer',
	// 	triggerHook: 0.9
	// })
	// .setClassToggle('.footer-content', 'move-in') //add class to #footer
	// // .addIndicators({
		
	// // })
	// .addTo(controller);
	// var galleryscene = new ScrollMagic.Scene({
	// 	triggerElement: '#gallery',
	// 	triggerHook: 0.7
	// })	
	// .setClassToggle('.intro-item-column', 'move-in-up') //add class to #footer
	// // .addIndicators({
		
	// // })
	// .addTo(controller);


	//animate words
	// var wordsTxt = $('#content-txt');



	//Timeline to animate out and in

	
	
	
});


var blob = document.getElementById("blob");
var loader = document.querySelector("#loader")
var docStyles = document.documentElement.style,
	themesBtnsCnt = document.querySelector("#themes .themes-btns-cnt"),
	themesBtnsCntCnt = document.querySelector("#themes"),
	optionsBtns = document.querySelectorAll(".item-options");
var colors = [
	[
		["#232329"],
		["rgba(255, 255, 255, 0.364)"],
		["#ffd431"],
		["inset 0 10px 40px rgba(0, 0, 0, 0.5)"],
		["#fff"],
		["#232329"],
		["Yelo-Dark"]

	],
	[
		["#fff"],
		["rgba(35, 35, 41, 0.358)"],
		["#ffd431"],
		["inset 0 10px 40px rgba(255, 255, 255, 0.5)"],
		["#232329"],
		["#fff"],
		["Yelo-Light"]

	],
	[
		["#fff"],
		["rgba(35, 35, 41, 0.358)"],
		["#3197ff"],
		["inset 0 10px 40px rgba(255, 255, 255, 0.5)"],
		["#232329"],
		["#fff"],
		["Blu-Light"]

	],
	[
		["#232329"],
		["rgba(255, 255, 255, 0.364)"],
		["#3197ff"],
		["inset 0 10px 40px rgba(0, 0, 0, 0.6)"],
		["#fff"],
		["#232329"],
		["Blu-Dark"]

	]
];

function setStorage(val){
	for(let k in val){
		localStorage.setItem(val, val[k]);
		console.log(val, val[k]);
	};
};

function setProp(el, val){
	for(let k in val){
		el.setProperty(k, val[k]);
	};
};

// loader functionality
function loaderFunc(val){
	docStyles.setProperty("--width", val + "%");
	loader.style.width = val + "%";
};

// theme selector functionality
function checkStorage(){
    if( localStorage.getItem("theme") === null){
        localStorage.setItem("theme", JSON.stringify(colors[0]));
    };
	theme = JSON.parse(localStorage.getItem("theme"));
	console.log(theme);
	setTheme(theme);
};

//set theme functionality
function setTheme(colors){
	localStorage.setItem("theme", colors);
	console.log(localStorage.getItem("theme"));

	setProp(docStyles, {"--background" : colors[0],
						"--background-write-up" : colors[1],
						"--background-variant" : colors[2],
						"--shadow" : colors[3],
						"--display-text" : colors[4],
						"--text" : colors[5]
						});
	
	setStorage({"background" : colors[0], "backgroundWriteUp" : colors[1], "backgroundVariant" : colors[2], "shadow" : colors[3], "displayText" : colors[4], "text" : colors[5]});
	localStorage.setItem("theme", JSON.stringify(colors));
}

// landing text functionality
function landingTxt(){
	var index = 0,
		duration = 6000; //duration
		contentTxt = document.getElementById("content-txt"); //display text
		contentImgMain = document.querySelector(".image-wrapper img.main"); //display img
		contentImgSub = document.querySelector(".image-wrapper img.sub"); //display img
		contentImgSub2 = document.querySelector(".image-wrapper img.sub2"); //display img
		words = []; //array for possible words
		txt = document.querySelector(".txt-contain").children[0];
		pos = 0;

	var indicatorContainer = document.querySelector("#indicator-container");
	var indicatorSvgContainer = document.querySelectorAll(".indicator-svg-container");
	var indicators = document.querySelectorAll("#indicator-circle2");
		
	//words list
	words[0] ='Designer';
	words[1] ='"Coder"';
	words[2] ='Developer';
	words[3] ='Techie';
	
	var images = [
				'assets/images/ipad.png',
				'assets/images/developement.png',	
				'assets/images/alphas-laptop.png',
				'assets/images/airpods-cont.png'
	];
	var subImages = [
				'assets/images/stylus.png',
				'assets/images/blob2.png',	
				'assets/images/blob.png',
				'assets/images/airpods-pod.png'
	];

	var subImages2 = [
				'assets/images/ico.png',
				'assets/images/box.png',	
				'assets/images/ico.png',
				'assets/images/icosphere.png'
	];

	//precahe images by assigning them to an image object to be loaded before they are used
	var allImages = images.concat(subImages, subImages2);

	function precache(){
		for(let i = 0; i < allImages.length; i++){
			let img = [];
			img[i] = new Image();
			img[i].src = allImages[i];
		};
	};	
	precache();

	for(let i = 0; i < words.length; i++){
		//create indicators
		var indicatorClone = indicatorSvgContainer[0].cloneNode(true);
        indicatorContainer.appendChild(indicatorClone);
		indicatorSvgContainer[0].remove();
		var newIndicators = document.querySelectorAll("#indicator-circle2"),
			newIndicatorSvgContainer = document.querySelectorAll(".indicator-svg-container");
	}

	for(let i = 0; i < words.length; i++){
		newIndicators[i].parentElement.parentElement.addEventListener("click", function currentSlide(){
			console.log(`indicator${i + 1} clicked`);
			showSlides(slideIndex = i + 1);
		});
		newIndicatorSvgContainer[i].setAttribute("data-tag", words[i]);
	}
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n){
		showSlides(slideIndex += n);
	}


	// setTimeout(function currentSlide(n){
	// 	let i = 1;

	// 	if( i < words.length){
	// 		i++;
	// 	}
	// 	else{
	// 		i= 0;
	// 	}
	// 	console.log(i)
	// 	showSlides(slideIndex = i)
	// }, duration);

	function showSlides(n){
		var i,
			animeComplete = false;

		console.log(words.length);

		if(n > words.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = words.length;
		}
		var dispTl = anime.timeline({
			easing: 'easeOutExpo',
			// autoplay: false,
			direction: 'alternate-reverse',
			loop: 1,
		});

		// for( let i = 0; i < words.length; i++){

		dispTl.add({
			targets: "#content-txt",
			translateY: "150%",
			easing: 'easeOutExpo',
		});
		dispTl.add({
			targets: ".image-wrapper img",
			translateY: "150%",
			easing: 'easeOutExpo',
			opacity: 0,
			changeComplete: function(){
				changetxt();
			}
		});

		// }
		for( let  i = 0; i < newIndicators.length; i++){
			newIndicators[i].style.strokeDashoffset = 120 - (120 * 0) / 100 + "px";
		}
		function changetxt(){
			console.log(i);
			contentTxt.innerHTML = words[slideIndex - 1];
			contentTxt.dataset.name = words[slideIndex - 1];
			contentImgMain.setAttribute("src", images[slideIndex - 1]);
			contentImgSub.setAttribute("src", subImages[slideIndex - 1]);
			contentImgSub2.setAttribute("src", subImages2[slideIndex - 1]);
		}
		// newIndicators[slideIndex - 1].addEventListener("transitionend", function(){
			dispTl.add({
				targets: "#content-txt",
				translateY: "0",
			});
			dispTl.add({
				targets: ".image-wrapper img",
				translateY: "0",
				opacity: 1
			});
			// changetxt();
			// dispTl.play();
			console.log("some")
		// })
		
		newIndicators[slideIndex - 1].style.strokeDashoffset = "0px";
		console.log(animeComplete)
	}

	// function slideTimer(){

	// 	anime({
	// 		targets: newIndicators[i],
	// 		easing: 'easeOutExpo',
	// 		strokeDashoffset: 120 - (120 * 0) / 100
	// 	})

	// 	if( i < words.length - 1){
	// 		i++;
	// 	}
	// 	else{
	// 		i = 0;
	// 	}

	// }
	
	// setTimeout(slideTimer, duration);

	/************* Second attempt ***********/
	// var dispTl = anime.timeline({
	// 	easing: 'easeOutExpo',
	// 	direction: 'alternate-reverse',
	// 	loop: true,
	// });

	// dispTl.add({
	// 	targets: "#content-txt",
	// 	translateY: "100%",
	// });
	// dispTl.add({
	// 	targets: ".image-wrapper img",
	// 	translateY: "100%",
	// 	delay: 0
	// });
	// dispTl.add({
	// 	targets: "#content-txt",
	// 	changeBegin: 
	// 		function changetxt(){
	// 			console.log(i);

	// 			anime({
	// 				easing: 'easeOutExpo',
	// 				targets: newIndicators,
	// 				// strokeDashoffset: 120 - (120 * 0) / 100
		
	// 			});
	// 			anime({
	// 				easing: 'easeOutExpo',
	// 				targets: newIndicators[i - 1],
	// 				begin: function(){
	// 					console.log(i);
	// 					newIndicators[i - 1].style.transitionDuration = "3s";
	// 					newIndicators[i - 1].style.strokeDashoffset = "0px";
	// 				}
	// 				// strokeDashoffset: 120 - (120 * 100) / 100
		
	// 			});				
	// 			console.log(i);
	// 			contentTxt.innerHTML = words[i];
	// 			contentTxt.dataset.name = words[i];
	// 			contentImgMain.setAttribute("src", images[i]);
	// 			var wordsLength = words.length -1;
	// 			if( i < wordsLength){
	// 				i++;
	// 			}
	// 			else{
	// 				i = 0;
	// 			}
	// 		}
	// });
	// dispTl.add({
	// 	targets: "#content-txt",
	// 	translateY: "0",
	// 	// delay: 1800,
	// 	changeComplete: function(){
	// 		anime({
	// 			easing: 'easeOutExpo',
	// 			targets: newIndicators[i - 1],
	// 			strokeDashoffset: 120 - (120 * 0) / 100
	// 		});
	// 	}

	// });
	// dispTl.add({
	// 	targets: ".image-wrapper img",
	// 	translateY: "0",
	// });





	// var animeTl = anime.timeline({
	// 	easing: 'easeOutExpo',
	// 	direction: 'alternate-reverse',
	// 	loop: true,
	// 	duration: 1050
	// });
	
	// animeTl.add({
	// 	targets: "#content-txt",
	// 	translateY: "100%",
	// 	delay: 1050
	// });
	// animeTl.add({
	// 	targets: ".image-wrapper img",
	// 	translateY: "100%",
	// 	delay: 0
	// });


	// animeTl.add({
	// 	targets: "#content-txt",
	// 	changeBegin: 
	// 		function changetxt(){

	// 			anime({
	// 				targets: indicators[i],
	// 				easing: 'easeOutExpo',
	// 				duration: 1050,
	// 				strokeDashoffset: 120 - (120 * 100) / 100
	// 				// begin: function(){
	// 				// 	i
	// 				// }
	// 			})
				
	// 			contentTxt.innerHTML = words[i];
	// 			contentTxt.dataset.name = words[i];
	// 			contentImgMain.setAttribute("src", images[i]);
	// 			var wordsLength = words.length -1;
	// 			if( i < wordsLength){
	// 				i++;
	// 			}
	// 			else{
	// 				i = 0;
	// 			}
	// 		}
	// });
	// animeTl.add({
	// 	targets: "#content-txt",
	// 	translateY: "0"
	// });
	// animeTl.add({
	// 	targets: ".image-wrapper img",
	// 	translateY: "0",
	// });
	
}

//Using the MiParallax plugin
function MiParallax(e){
    var Milax = document.querySelectorAll(".Milax");
    var rate;
    for(i = 0; i < Milax.length; i++){
        var scrolled = window.pageYOffset,
            elRate = parseFloat(Milax[i].getAttribute("data-rate")),
            translateY = Milax[i].getAttribute("");
        if(Milax[i].getAttribute("data-rate") == null){
           elRate = -2;
        }
        rate = scrolled / elRate;
        console.log(rate);
        Milax[i].style.transform = 'translate3d(0, '+ rate + 'px, 0px)';    
    }
    
};

function themeSelector(){
	var background,
		backgroundWriteUp,
		backgroundVariant,
		shadow,
		displayText,
		text;

	
	for(let i = 0; i < colors.length; i++){
		var themeBtn = [],
			newThemeBtn;
		

		themeBtn[i] = document.createElement("button");
		themesBtnsCnt.appendChild(themeBtn[i]);
		newThemeBtn = themesBtnsCnt.querySelectorAll("button");
		newThemeBtn[i].style.background = colors[i][2];
		newThemeBtn[i].style.borderColor = colors[i][0];
		newThemeBtn[i].setAttribute("data-tag", colors[i][6]);


		newThemeBtn[i].addEventListener("click", function(){setTheme(colors[i])});

	}

	console.log(themesBtnsCnt);
}


function galleryOptions(e){
	console.log(e.target.parentElement);

	var itemOptionsCont = e.target.parentElement,
		introItem,
		itemOverlay,
		expandBtn = itemOptionsCont.querySelector(".expand"),
		detailsBtn = itemOptionsCont.querySelector(".details")
	;

	//get the .intro-item
	if(itemOptionsCont.parentElement) {
		introItem = itemOptionsCont.parentElement;
		itemOverlay = introItem.querySelector(".item-overlay");
		console.log(introItem);
	}

	detailsBtn.addEventListener("click", ()=>{
		itemOverlay.classList.toggle("show-overlay");
	})
	console.log(expandBtn, detailsBtn);
	if(itemOptionsCont.querySelector(".options")){
		itemOptionsCont.classList.toggle("options-cont-display");
		
		itemOptionsCont.querySelector(".options").classList.toggle("options-display");
	}
	// for(let x = 0; x < itemOptionsCont; x++){
	// 	itemOptionsCont.querySelectorAll(".options button")[i].classList.toggle("display");
	// }
	//toggle options display
	
}


window.addEventListener("scroll", function(){
	if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
		console.log((window.innerHeight + window.scrollY) , document.body.offsetHeight);
		themesBtnsCntCnt.style.opacity = "0";
	}
	else{
		themesBtnsCntCnt.style.opacity = "1";
	}
	
});

//loader functionality
document.addEventListener('readystatechange', e => {
	console.log(e.target.readyState);
	if(e.target.readyState === "interactive"){
		loaderFunc(66.67);
	}
	if(e.target.readyState === "complete"){
		loaderFunc(100);

		var loadTl = new TimelineMax();
		var loadBlind = document.querySelector("#hoves-preloader");
		
		loadTl
		.to(loadBlind, 1.8, {y:"-100%"}, delay=1)
		.from(blob, 1.8, {autoAlpha: 0, y: "90%"}, delay=1)
		.from(wordsTxt, 1.8, {autoAlpha: 0, x: "-90%"}, delay=1)



	}
});
//options buttons
for(i = 0; i < optionsBtns.length; i++){
	optionsBtns[i].addEventListener("click", galleryOptions);
}
window.addEventListener("load", loaderFunc(33.33));
window.addEventListener("scroll", MiParallax);
window.addEventListener("load", landingTxt);
window.addEventListener("load", themeSelector);
window.addEventListener("load", checkStorage);













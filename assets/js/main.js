$(document).ready(function(){
	
	//Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	//Build a scene
	
	var firstscene = new ScrollMagic.Scene({
		triggerElement: '#footer',
		triggerHook: 0.9
	})
	.setClassToggle('.footer-content', 'move-in') //add class to #footer
	// .addIndicators({
		
	// })
	.addTo(controller);
	var galleryscene = new ScrollMagic.Scene({
		triggerElement: '#sct1',
		triggerHook: 0.7
	})	
	.setClassToggle('.intro-item-column', 'move-in-up') //add class to #footer
	// .addIndicators({
		
	// })
	.addTo(controller);


	//animate words
	var wordsTxt = $('#content-txt');
	var blob = document.getElementById("blob");
	var loadTl = new TimelineMax();

	// var indicatorsWrap = document.getElementById("indicator-container");
	// var indicators = document.getElementById("indicator-container").childNodes;
	// var indicators1 = indicators[0];
	// var indicators2 = indicators[1];
	// var indicators3 = indicators[2];
	// var indicators4 = indicators[3];
	var indicators = $("#indicator-container");
	var loadBlind = $(".hoves-preloader");
	
	loadTl
	.to(loadBlind, 1.8, {y:"-100%"})
	.from(blob, 1.8, {autoAlpha: 0, y: "90%"}, delay=1)
	// .from(wordsTxt, 1.8, {autoAlpha: 0, x: "-90%"}, delay=1)




	//Timeline to animate out and in

	
	
	
});



function landingTxt(){
	var index = 0,
		duration = 6000; //duration
		contentTxt = document.getElementById("content-txt"); //display text
		contentImgMain = document.querySelector(".image-wrapper img.main"); //display img
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
				'assets/images/alphas-laptop.png',
				'assets/images/hoves.png',
				'assets/images/helo.png',
				'assets/images/airpods.png'
	];
	console.log(index);

	for(let i = 0; i < words.length; i++){
		//create indicators
		var indicatorClone = indicatorSvgContainer[0].cloneNode(true);
        indicatorContainer.appendChild(indicatorClone);
		indicatorSvgContainer[0].remove();
		var newIndicators = document.querySelectorAll("#indicator-circle2");
	}

	console.log(index);

	for(let i = 0; i < words.length; i++){
		newIndicators[i].parentElement.parentElement.addEventListener("click", function currentSlide(){
			console.log(`indicator${i + 1} clicked`);
			showSlides(slideIndex = i + 1);
		});
	}
	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n){
		showSlides(slideIndex += n);
	}

	function currentSlide(n){
		showDivs(slideIndex = n)
	}

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
		for( let i = 0; i < words.length; i++){
			anime({
				targets: "#content-txt",
				translateY: "100%",
				easing: 'easeOutExpo',
			});
			anime({
				targets: ".image-wrapper img",
				translateY: "100%",
				easing: 'easeOutExpo',
			});
		}
		for( let  i = 0; i < newIndicators.length; i++){
			newIndicators[i].style.strokeDashoffset = 120 - (120 * 0) / 100 + "px";
		}
		var dispTl = anime.timeline({
			easing: 'easeOutExpo',
			autoplay: false
			// direction: 'alternate-reverse',
			// loop: true,
		});
		function changetxt(){
			console.log(i);
			contentTxt.innerHTML = words[slideIndex - 1];
			contentTxt.dataset.name = words[slideIndex - 1];
			contentImgMain.setAttribute("src", images[slideIndex - 1]);
		}
		newIndicators[slideIndex - 1].addEventListener("transitionend", function(){
			dispTl.add({
				targets: "#content-txt",
				translateY: "0",
			});
			dispTl.add({
				targets: ".image-wrapper img",
				translateY: "0",
			});
			changetxt();
			dispTl.play();
			console.log("some")
		})
		
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




window.addEventListener("load", landingTxt);














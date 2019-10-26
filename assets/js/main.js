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
	var i = 0;
	var duration = 6000; //duration
	var contentTxt = document.getElementById("content-txt"); //display text
	var words = []; //array for possible words
	var txt = document.querySelector(".txt-contain").children[0];
	var pos = 0;
	//words list
	words[0] ='Designer';
	words[1] ='"Coder"';
	words[2] ='Developer';
	words[3] ='Techie';
	
	var animeTl = anime.timeline({
		easing: 'easeOutExpo',
		direction: 'alternate-reverse',
		loop: true,
		duration: 1050
	});
	
	animeTl.add({
		targets: "#content-txt",
		translateY: "100%",
		delay: 1050
	});
	animeTl.add({
		targets: "#content-txt",
		changeBegin: 
			function changetxt(){
				
				contentTxt.innerHTML = words[i];
				contentTxt.dataset.name = words[i];
				var wordsLength = words.length -1;
				if( i < wordsLength){
					i++;
				}
				else{
					i = 0;
				}
			}
	});
	animeTl.add({
		targets: "#content-txt",
		translateY: "0"
	});
	
}




window.addEventListener("load", landingTxt);














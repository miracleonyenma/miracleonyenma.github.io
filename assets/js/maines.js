$(document).ready(function(){
	
	//Init ScrollMagic
	var controller = new ScrollMagic.Controller();
	
	//Build a scene
	
	var firstscene = new ScrollMagic.Scene({
		triggerElement: '#footer',
		triggerHook: 0.9
	})
	.setClassToggle('.footer-content', 'move-in') //add class to #footer
	.addIndicators({
		
	})
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
	.from(wordsTxt, 1.8, {autoAlpha: 0, x: "-90%"}, delay=1)




	//Timeline to animate out and in

	
	
	
});

var i = 0;
var duration = 6000; //duration
var contentTxt = document.getElementById("content-txt"); //display text
var words = []; //array for possible words
var txt = document.querySelector(".txt-contain").children[0];
var pos = 0;
//words list
words[0] ='Hola';
words[1] ='Sup';
words[2] ='Hello';
words[3] ='Ha far';
words[4] ='Hi';


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
	
	setTimeout("changetxt()", duration);
}


function animatetxt(){

}


/* //time to try ECMAScript6 
const delay = ms => new Promise(res => setTimeout(res, ms));

const animatetxt = async () => {

await delay(5000);
  alert("Waited 5s");

  await delay(5000);
  alert("Waited an additional 5s");

} */


window.onload =  changetxt;


/*// number of loaded images for preloader progress

var loadedCount = 0; //current number of images loaded
var imagesToLoad = $('.bcg').length; //number of slides with .bcg container

$('.bcg'.imagesLoaded({
	background: true
}).progress( function( instance, image ){
	loadProgress();
});

function loadProgress(imgLoad, image){
	// one more image has neen added
	loadedCount++;
	
	loadingProgree = (loadedCount/imagesToLoad);
	
	// GSAP tween of our progress bar timeline
	TweenLite.to(progresssTl, 0.7, {progress:loadingProgree, ease:linear.ease.None});
}

// progress timeline
var progressTl = new TimelineMax({
	paused: true,
	onUpdate: progressUpdate,
	onComplete: loadComplete
});

progressTl
	// tween the progress bar width
	.to($('.progress span'), 1, {width:100, ease:Linear.easeNone});
	
// as the progress bar width updates and grows we put the percentage loaded in the screen
function progressUpdate(){
	// the percentage loaded based on the tween's progress
	loadingProgress = Math.round(progressTl.progress()*100);
	
	// we put the percentage in the screen
	$(".txt-perc").text(loadingProgress + '%');
	
}

function loadComplete(){
	// preloader out
	var preloaderOutTl = new TimelineMax();
	
	preloaderOutTl
		.to($('.progress'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn })
		.to($('.txt-perc'), 0.3, {y: 100, autoAlpha: 0, ease:Back.easeIn}, 0.1)
		.set($('body'), {className: '-=is-loading'})
		.set($('#intro'), {className: '+=is-loaded'})
		.to($('#preloader'), 0.7, {yPercent: 100, ease:Power4.easeInOut})
		.set($('#preloader'), {className: '+=is-hidden'})
		.from($('#intro .title'), 1, {autoAlpha: 0, ease:Power1.easeOut}, '-=0.2')
		.from($('#intro p'), 0.7, {autoAlpha: 0, ease:Power1.easeOut}, '+=0.2')
		.from($('.scroll-hint'), 0.3, {y: -20, autoAlpha: 0, ease:Power1.easeOut}, '+=0.1');
 
    return preloaderOutTl;

}*/


















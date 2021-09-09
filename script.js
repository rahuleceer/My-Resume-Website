var about=document.getElementById("anc2");
var skills=document.getElementById("anc3");
var experience=document.getElementById("anc4");
var education=document.getElementById("anc5");
var portfolio=document.getElementById("anc6");
var contact=document.getElementById("anc7");

about.addEventListener("click",function(event){
	event.preventDefault();
	var target=292.47918701171875;
	var curr=0;
	let id=setInterval(function(){
		if(curr>=target)
		{
			clearInterval(id);
			return;
		}
		curr+=20;
		scrollBy(0,20);
	},5);
});

skills.addEventListener("click",function(event){
	event.preventDefault();
	var target=700;
	var curr=0;
	let id=setInterval(function(){
		if(curr>=target)
		{
			clearInterval(id);
			return;
		}
		curr+=20;
		scrollBy(0,20);
	},5);
});

experience.addEventListener("click",function(event){
	event.preventDefault();
	var target=1070;
	var curr=0;
	let id=setInterval(function(){
		if(curr>=target)
		{
			clearInterval(id);
			return;
		}
		curr+=20;
		scrollBy(0,20);
	},7);
});

education.addEventListener("click",function(event){
	event.preventDefault();
	var target=2070;
	var curr=0;
	let id=setInterval(function(){
		if(curr>=target)
		{
			clearInterval(id);
			return;
		}
		curr+=20;
		scrollBy(0,20);
	},10);
});

portfolio.addEventListener("click",function(event){
	event.preventDefault();
	var target=3050;
	var curr=0;
	let id=setInterval(function(){
		if(curr>=target)
		{
			clearInterval(id);
			return;
		}
		curr+=20;
		scrollBy(0,20);
	},10);
});

contact.addEventListener("click",function(event){
	event.preventDefault();
	var target=3500;
	var curr=0;
	let id=setInterval(function(){
		if(curr>=target)
		{
			clearInterval(id);
			return;
		}
		curr+=20;
		scrollBy(0,20);
	},10);
});



////////////////Skills bar//////////////

var progressBars = document.querySelectorAll(".skill-progress > div");



function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
            (barCoordinates.top <= (window.innerHeight - barCoordinates.height))) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}



window.addEventListener("scroll", checkScroll);

// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);
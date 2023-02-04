
var addEvent = function(object, type, callback) {
	if (object == null || typeof(object) == 'undefined') return;
	if (object.addEventListener) {
	    object.addEventListener(type, callback, false);
	} else if (object.attachEvent) {
	    object.attachEvent("on" + type, callback);
	} else {
	    object["on"+type] = callback;
	}
};


addEvent(window, "load", function(event) {
	var landing = document.getElementById("landing");
	var everything = document.getElementById("fadewrapper");

	


	window.requestAnimationFrame(function(){
		//initiation
		landing.style.opacity = 1;
		everything.style.opacity = 0;
		
		window.requestAnimationFrame(function(){
			landing.style.transition = "opacity 4s";
			everything.style.transition = "opacity 4s";

			window.requestAnimationFrame(function(){
				setTimeout(function() {
					//make them all transition pls
					//fadeout
					landing.style.opacity = 0;
					//fadein
					everything.style.opacity = 1;
				},1000);
				
			});
		});
	});
	console.log("what?");
});

console.log("hmmm");


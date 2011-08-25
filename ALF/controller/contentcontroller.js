window.addEventListener( 'webkitTransitionEnd', function( event ) { transitionEndHandler(event.target.className); 
                          console.log( "Finished transition! " + event); }, false );

window.addEventListener( 'webkitTransitionStart', function( event ) { transitionEndHandler(event.target.className); 
                          console.log( "Started transition! " + event); }, false );

                         
//model.addEventListener('currentslide', slidechangehandler, true);

function transitionEndHandler(transitionId) {
    if(transitionId == "frontLeg") {
         model.startpresentation = true;

       }
}

function toArray (obj) { 
    return [].slice.call(obj, 0); 
}

var efficacyanimation = true;

function slidechangehandler() {
     
      if(model.currentSlide != undefined) {
      var array = toArray(model.slides);
      var slide = array.indexOf(model.currentSlide);
      if(model.currentSlide.id == 'efficacy_slide2' && efficacyanimation == true) {
               setTimeout(function () { efficacy.slide6enter() }, 300);
               efficacyanimation = false;
      }
      }
         console.log("Controller current slide sent by Model " + model.currentSlide);
       }
function addClass(element,className) {
	  if (element==undefined) {return; };
		/* Do not add the className if element.className already contains it */
		if (element.className.indexOf(className) <= -1) {
			element.className += " " + className;
		}
	}
	
function removeClass(element,className) {
	if (element.className.indexOf(" " + className) > -1) {
		element.className = element.className.replace(new RegExp(" "+className+"\\b"), "");
	}
	else if (element.className.indexOf(className) > -1) {
		element.className = element.className.replace(new RegExp(className+"\\b"), "");
	}
}

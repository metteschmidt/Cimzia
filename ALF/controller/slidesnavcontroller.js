var SlidesController = (function(){
   
   var firsttime = true;
   
   this.markActive = function (scrollerId) {
     
       var monitorID;
   
	   var array = toArray(model.menuItems);
	   var nextItem = array.indexOf(model.currentMenuItem)+1;
	   var prevItem = array.indexOf(model.currentMenuItem)-1;
	   //var navigationOffset = model.menuItems[0].offsetParent.offsetParent.offsetLeft;
	   
	   if(firsttime == false) { 
	     
	   	 if (model.currentMenuItem == model.menuItems[1]) {
	   	         model.navScroller.scrollTo(-model.menuItems[1].offsetLeft+31, 100);
	   	    }
	   	   
	   	 if (-model.currentMenuItem.offsetLeft > (-model.menuItems[1].offsetLeft+31) && model.menuItems[prevItem] != null) {
	   	        model.navScroller.scrollTo(-model.menuItems[prevItem].offsetLeft+31, 100);
	   	    }
	   	} 
	   	firsttime = false;	           
	    //console.log("Submit slide enter " + model.currentSlide.id + " "+ model.currentSlideIndex + model.innerSlideIndex)
	    /*submitSlideEnter(
	                monitorId,
	     			model.currentSlide.id,
	     			model.currentSlideIndex,
	     		    model.currentSection.id
	     		);*/
	     
    }
    //Helper functions move to utils later
    function toArray (obj) { 
        return [].slice.call(obj, 0); 
    }
	function addClass(element,className) {
	  if (element==undefined) {return; };
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

});
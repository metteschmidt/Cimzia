var Model = (function() {
            
    this.extendAsEventDispatcher();
    
    customEvents = {
      slidechange: ''
    }
     modelEvents = ['slidechange'];
     
    function createEvents () {
      modelEvents.forEach(function(evt) {
 
        customEvents[evt] = document.createEvent('UIEvents');
        customEvents[evt].initEvent(evt, true, true);
      });
     
    }
    createEvents();
    var message;
    
    this.__defineGetter__("message",function() { return message});
    this.__defineSetter__("message",function(val) {message=val});
    
   
    var dynamic;
    
    this.__defineGetter__("dynamic",function() { return dynamic});
    
    this.__defineSetter__("dynamic",function(val) {dynamic=val;});
    
    
    var currentSection;
    
    this.__defineGetter__("currentSection",function() { return currentSection});
    
    this.__defineSetter__("currentSection",function(val) {currentSection=val;
                             this.dispatchEvent("currentslidethumbs");
    });
    
    
    var currentSlide;
    
    this.__defineGetter__("currentSlide",function() { return currentSlide});
    
    this.__defineSetter__("currentSlide",function(val) {currentSlide=val;
                    this.dispatchEvent("currentslide");
                    this.dispatchEvent("slidechange");
                  
    });
    
    var currentSectionIndex;
    
    this.__defineGetter__("currentSectionIndex",function() { return currentSectionIndex});
    
    this.__defineSetter__("currentSectionIndex",function(val) {currentSectionIndex=val;
                          this.dispatchEvent("currentSectionIndex");
                          });
    
    var currentVSectionIndex;
    
    this.__defineGetter__("currentVSectionIndex",function() { return currentVSectionIndex});
    
    this.__defineSetter__("currentVSectionIndex",function(val) {currentVSectionIndex=val;
                          this.dispatchEvent("currentVSectionIndex");
                      
                          });
                          
    var currentSlideIndex;
    
    this.__defineGetter__("currentSlideIndex",function() { return currentSlideIndex});
    
    this.__defineSetter__("currentSlideIndex",function(val) {currentSlideIndex=val;});
    
    
    var currentMenuItem;
    
    this.__defineGetter__("currentMenuItem",function() { return currentMenuItem});
    
    this.__defineSetter__("currentMenuItem",function(val) {/*alert(val);*/currentMenuItem=val; 
    });
    
    var currentScroller;
    
    this.__defineGetter__("currentScroller",function() { return currentScroller});
    
    this.__defineSetter__("currentScroller",function(val) {currentScroller=val; 
    });
    
    var navScroller;
    
    this.__defineGetter__("navScroller",function() { return navScroller});
    
    this.__defineSetter__("navScroller",function(val) {navScroller=val; 
    });
    
    var refScroller;
    
    this.__defineGetter__("refScroller",function() { return refScroller});
    
    this.__defineSetter__("refScroller",function(val) {refScroller=val; 
    });
    
    var internalScrollerArray;
    
    this.__defineGetter__("internalScrollerArray",function() { return internalScrollerArray});
    
    this.__defineSetter__("internalScrollerArray",function(val) {internalScrollerArray=val; 
    });
    
    
    var slides;
    
    this.__defineGetter__("slides",function() { return slides});
    
    this.__defineSetter__("slides",function(val) {slides=val;});
    
    
    var internalSlides;
    
    this.__defineGetter__("internalSlides",function() { return internalSlides});
    
    this.__defineSetter__("internalSlides",function(val) {internalSlides=val;});
    
    
    
    var sections;
    
    this.__defineGetter__("sections",function() { return sections});
    
    this.__defineSetter__("sections",function(val) {sections=val;});
    
    var currentThumbSection;
    
    this.__defineGetter__("currentThumbSection",function() { return currentThumbSection});
    
    this.__defineSetter__("currentThumbSection",function(val) {currentThumbSection=val;});
    
    
    
    
    var menuItems;
    
    this.__defineGetter__("menuItems",function() { return menuItems});
    
    this.__defineSetter__("menuItems",function(val) {menuItems=val});
  
    
    var slidescroller;
    
    this.__defineGetter__("slidescroller",function() { return slidescroller});
    
    this.__defineSetter__("slidescroller",function(val) {slidescroller=val;
                          this.dispatchEvent("slidesready");
                          });
        
    var openthumbs;
    
    this.__defineGetter__("openthumbs",function() { return openthumbs});
    
    this.__defineSetter__("openthumbs",function(val) {openthumbs=val; 
         this.dispatchEvent("openthumbs");   
    });
    
    var innerscroller = null;
    
    this.__defineGetter__("innerscroller",function() { return innerscroller});
    
    this.__defineSetter__("innerscroller",function(val) {innerscroller=val; 
         this.dispatchEvent("innerscroller");
    });
    
    var opennavigation;
    
    this.__defineGetter__("opennavigation",function() { return opennavigation});
    
    this.__defineSetter__("opennavigation",function(val) {opennavigation=val; 
         this.dispatchEvent("opennavigation");   
    });
    
    var startpresentation;
    
    this.__defineGetter__("startpresentation",function() { return startpresentation});
    
    this.__defineSetter__("startpresentation",function(val) {startpresentation=val; 
         this.dispatchEvent("startpresentation");   
    });
    
    var swipe;
    
    this.__defineGetter__("swipe",function() { return swipe});
    
    this.__defineSetter__("swipe",function(val) {swipe=val; 
         this.dispatchEvent("swipe");   
    });
    
    var longtouchevent;
    
    this.__defineGetter__("longtouchevent",function() { return longtouchevent});
    
    this.__defineSetter__("longtouchevent",function(val) {longtouchevent=val; 
         this.dispatchEvent("longtouchevent");  
    });
    
    var longtouchtarget;
    
    this.__defineGetter__("longtouchtarget",function() { return longtouchtarget});
    
    this.__defineSetter__("longtouchtarget",function(val) {longtouchtarget=val; 
         this.dispatchEvent("longtouchtarget"); 
    });
    
    
    var direction = null;
    
    this.__defineGetter__("direction",function() { return direction});
    
    this.__defineSetter__("direction",function(val) {direction=val;   
    });
    
    var currentthumb = null;
    
    this.__defineGetter__("currentthumb",function() { return currentthumb});
    
    this.__defineSetter__("currentthumb",function(val) {currentthumb=val;});
    
    var thumbsections = null;
    
    this.__defineGetter__("thumbsections",function() { return thumbsections});
    
    this.__defineSetter__("thumbsections",function(val) {thumbsections=val; console.log('model thumb sections set')  });
    
   

});
(function() {

  window.SlideScroller = function(id, config) {
    config = config || {};
    this.direction = config.direction || 'horizontal';
    this.ele = document.getElementById(id);
    this.ele.obj = this;
    this.scrollEle = this.ele;
    //this.scrollEle.style.cssText = '-webkit-transition:all 20s ease-out;';
    
    this.x =  this.scrollEle.offsetLeft;
    this.y =  this.scrollEle.offsetTop;
    this.staticX =  this.scrollEle.offsetLeft;
    this.currentNr = 0;
  
    this.limit = config.nrOfSlides || 50;
    this.horzHeight = config.horzHeight || 718;
    this.horzWidth = config.horzWidth || 1024;
    this.vertHeight = config.vertHeight || 1024;
    this.vertWidth = config.vertWidth || 718;
    this._init();
  };
   
  SlideScroller.prototype = {
    _init: function() {
      if (this.direction === 'horizontal') {
         this.register('swipeleft', 'next');
         this.register('swiperight', 'previous');
      }
      else {
          this.register('swipeup', 'next');
          this.register('swipedown', 'previous');
      }
      this.active = false;

    },

    _setCurrentNr: function(nr) {
       this.currentNr = nr;
       console.log('current slide number ' + nr + " " +this.currentNr);
    },

    _scroll: function(nr) {
 
       var that = this;
       var css = '',  val;
      
       model.currentScrollerId = this.scrollEle.id;
       model.currentScroller = this.scrollEle;
       this.ele.dispatchEvent(slideEnter);
  
      if (typeof nr === 'object') {
         if (this.direction === "horizontal") {
             val = nr.offsetLeft * -1;
             css = '-webkit-transform:translate3d(' + val + 'px, 0, 0);';
             this.x = val;
             model.currentSectionIndex = nr;
             model.direction = "horizontal";
         }
         else {
             val = nr.offsetTop * -1;
             css = '-webkit-transform:translate3d(0px,' + val + 'px, 0);';
             this.y = val;
             model.currentVSectionIndex = nr;
             model.direction = "vertical";
         }
      }
      if (typeof nr != 'object') {
         if (this.direction === "horizontal") {
	        val = nr * -this.horzWidth;
	        css = '-webkit-transform:translate3d(' + val + 'px, 0, 0);';
	        this.x = val;
	        model.currentSectionIndex = nr;
	        model.direction = "horizontal";
	      }
	      else {
	         val = nr * -this.horzHeight;
	         css = '-webkit-transform:translate3d(0px,' + val + 'px, 0);';
	         this.y = val;
	         model.currentVSectionIndex = nr;
	         model.direction = "vertical";
	      }
      }
      
      this.scrollEle.style.cssText = css;
      model.currentSection = model.sections[model.currentSectionIndex];
    
      this._setCurrentNr(nr);
      //this.ele.addEventListener( 'webkitTransitionEnd', function(event){alert('OUT!!!');}, false );
      setTimeout(function(){that.transitionEnd();}, 1000);
    },
    transitionEnd: function (e) {
    		var that = this;
    		if (e) e.stopPropagation();
    		
    		that.deregister('webkitTransitionEnd');
    		that.ele.dispatchEvent(slideExit);
    		if(this.direction === "horizontal" && this.scrollEle.id === 'scroller') {
    		
    		  for(var i = 0; i<model.internalScrollerArray.length; i++){
    		        css = '-webkit-transform:translate3d(0,0,0);';
    		        model.internalScrollerArray[i]._scroll(0);
    	      }
    	    }
    	    
    	},
    bind: function(scope, callback) {
      return function() {
        callback.apply(scope, arguments);
      };
    },
    register: function(eventname, action) {
      var self = this;
      //console.log('register ' + this)
      this.handler = function() { self[action]() };
      this.ele.addEventListener(eventname, self.bind(self, self[action]), false);
    },
    deregister: function(eventname, action) {
      var self = this;
      //console.log('deregister ' + this)
      this.ele.removeEventListener(eventname, this.handler, false);
    },
    update: function(id, limit) {
      this.scrollId = id;
      this.scrollEle = document.getElementById(id);
      this.limit = limit;
    },

    activate: function() {
      this.ele.style.zIndex = '101';
      this.active = true;
    },

    isActive: function() {
      return this.active;
    },

    reset: function() {
      var self = this;
      self.scrollEle.style.cssText = '-webkit-transform:translate3d(0px,0px,0px);';
    },

    setLimit: function(limit) {
      this.limit = limit;
    },

    scrollTo: function(nr) {
      this._scroll(nr);
      if (model.currentSection.slides[nr] != undefined) {
            //console.log(' slides section ' + model.currentSection.slides[nr].id);
            model.currentSlide = model.currentSection.slides[nr];
      } 
      if (model.direction === "horizontal") {
           model.currentSlide = model.sections[nr];
      }
      document.getElementById('debugdiv').innerHTML = model.currentSlide.id +  model.direction;
    },
    scrollToPage: function(element) {
         this._scroll(element);
    },
    scrollToElement: function(element) {
         this._scroll(element);
     
    },
    scrollToStart: function() {
          this.scrollTo(0);
    },

    next: function() {
      var nextNr = this.currentNr + 1;
      if (nextNr < this.limit) {
        this.scrollTo(nextNr);
      }
    },
    
    previous: function() {
      var prevNr = this.currentNr - 1;
      if (prevNr > -1) {
        this.scrollTo(prevNr);
      }
    }
  };
  
  (function createSlideEvents () {
      window.slideEnter = document.createEvent('UIEvents');
      window.slideExit = document.createEvent('UIEvents');
      window.slideshowChange = document.createEvent('UIEvents');
      slideEnter.initEvent('scrollIn', true, true);
      slideExit.initEvent('scrollOut', true, true);
      slideshowChange.initEvent('slideshowChange', true, true);
  })();  
})();

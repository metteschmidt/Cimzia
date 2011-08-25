var NavigationController = (function (){
   this.gotoslide =function(e) {
         
	    if(e.target.parentNode.id == 'nav') {
	        console.log('Navigation seek ' + e.target.element)
	        model.slidescroller.scrollTo(e.target.element, 100);
	        //model.currentSlide = e.target.element;
	        model.currentMenuItem = e.target;

	    }
	  }
     
     this.autogotoslide = function (element) {
        var element = element;
        console.log('Navigation autoseek ' + element)
        //model.slidescroller.scrollTo(element, 100);
        //model.currentSlide = element;
        model.currentMenuItem = element.target;
   
       }
    });
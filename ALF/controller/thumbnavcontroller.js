var ThumbController = (function (){
       this.gotoslide = function(e) {  
         for(var i= 0; i< model.internalScrollerArray.length; i++) {
		       if(model.currentSection.id == model.internalScrollerArray[i].id) {
			     var sectionscroller = model.internalScrollerArray[i];
			     model.currentthumb = e.target.parentNode;
			     sectionscroller.scrollTo(e.target.parentNode.element, 100);
			     //model.currentSlide = e.target.parentNode.element;
			 }
		 }
		  model.openthumbs = true;
       }
});
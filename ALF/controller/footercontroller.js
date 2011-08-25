var FooterController = (function (){
   
    this.openthumbs = function () {
       if(model.sections[model.currentSectionIndex].id.indexOf('home') != -1) {return} 
	   if (model.openthumbs == true || model.openthumbs == undefined) {
	         model.openthumbs = false;
	         return
	   }
	   if (model.openthumbs == false) {
	         model.openthumbs = true;
	         return
	   }
	}

});
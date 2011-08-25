var App = (function(){
     
    var navigation = new Navigation();
    var footer = new Footer();
    var thumbnavigation = new ThumbNavigation();
     
    this.__defineGetter__("dynamic",function() { return dynamic});
    this.__defineSetter__("dynamic",function(val) {dynamic=val;});
    
    this.init = function() {
          monitoringEnabled = true;
          model.addEventListener("slidesready", setviews, false);
          //CALLED BY START ANIMATION WHEN FINISHED
          model.addEventListener("startpresentation", initpresentation, false);
          model.addEventListener("swipe", initwithoutanimation, false);
         
      }
      
     var introplayed = false; 
     var viewset = false; 
     
     function toArray (obj) { 
         return [].slice.call(obj, 0); 
     }
     
     function initwithoutanimation() {
                 //introplayed = true;
                 //gestures.removeSwipeListener('swipebutton');
                 if(introplayed == false) {
	                 document.getElementById('cover').style.display = 'none'
	                 initpresentation();
	                 model.slidescroller.scrollTo(2); 
                 }
                
     }	
     function setviews() {
              model.slidescroller.scrollTo(1);
             include('content/js/home.js');	
             include('ALF/controller/contentcontroller.js');
             include('content/js/dragdealer.js');
             include('ALF/utils/drag.js');
             
             /*for(var i = 0; i<slidesarray.length; i++) {
                 if(slidesarray[i].length > 1) {
                    for(var col = 0; col<slidesarray[i].length; col++) {  
                         utils.includeJS(slidesarray[col]);
                         console.log('Many js ' + slidesarray[i])
                     }
                  } else if(slidesarray[i].length == 1){
                     utils.includeJS(slidesarray[i]);
                     console.log('Single js ' + slidesarray[i])
                  }
             }*/	 
             
             include('content/js/current_treatment.js');
             include('content/js/efficacy.js');
             include('content/js/stroke_in_af.js');
             include('content/js/xarelto.js');
             include('content/js/administration.js');
             include('content/js/references.js');
             include('content/js/moa.js');
             include('content/js/referencepopup.js');
             
    }
    function hidepopup(event) {
            event.target.style.display = 'none';
    }
	function initpresentation() {
	
         if (introplayed == false) {
            
            introplayed = true; 
            navigation.init = true; 
            thumbnavigation.init = true;
            footer.init = true;
            model.opennavigation = true;
            
           
            model.currentSectionIndex = 1;
            model.currentMenuItem = 1;
            
            document.getElementById('referencecontent').style.display = 'block';	            
            setTimeout(document.getElementById('cover').style.display = 'none', 300);
         }  
	} 
   
});
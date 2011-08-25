var ThumbNavigation = (function(){ 
    
    var controller = new ThumbController();
    var utils = new Utils();
    var thumbitems;
    var thumbsections;
    var sectionid;
    var thumbmenu;
    var thumbs = new Array();
    var thumbsectionsarray = new Array();
    var thumbScroll;
	var init = false;
	
	this.__defineGetter__("init",function() { return init});
	this.__defineSetter__("init",function(val) {init=val; initthumbnav();});
	
   //model.addEventListener('currentslidethumbs', markactivesection, true);
   	var prevSection;
		
	function initthumbnav() { 
	
	    var thumbmenu = document.getElementById('thumbnav');
	    //var thumbmenu = document.createElement('div'); 
	    //thumbmenu.id = 'thumbnav';

        for (var i = 0; i < slidesarray.length; i++) {
            //utils.newElement('ul',newthumbsection,thumbmenu,'section-id',slidesarray[i][0]);
         
	        var newthumbsection = document.createElement('ul');
	        newthumbsection.setAttribute('id', slidesarray[i][0]);
	        thumbmenu.appendChild(newthumbsection);         
	        thumbsectionsarray.push(newthumbsection);
	        
	        if (slidesarray[i].length > 1) { 
	             for (var col = 0; col < slidesarray[i].length; col++) {
			             var slidethumb = document.createElement('li');
			             thumbs.push(slidethumb);
			             slidethumb.innerHTML = '<img src="content/images/thumbnails/'+slidesarray[i][col]+'.png">';
			             newthumbsection.appendChild(slidethumb);
	             }
	        } else {
	            var slidethumb = document.createElement('li');
	            thumbs.push(slidethumb);
	            slidethumb.innerHTML = '<img src="content/images/thumbnails/'+slidesarray[i]+'.png">';
	            newthumbsection.appendChild(slidethumb);
	        } 
	        createEvents(newthumbsection);
	     }    	    
       //End for loop
	 
	   model.thumbsections = thumbsectionsarray;
	   model.addEventListener('currentslide', markactive, false);
	   model.addEventListener('openthumbs', toggleopen, false);
	   
	 }
	 function createEvents(section) {
	           section.thumbs = section.getElementsByTagName("li");
	       	   for(var i = 0; i<section.thumbs.length; i++) {
	              navitem = section.thumbs[i];
	              addEvent(navitem, section, i);     
	            }
	 
	 }
	 function markactive() {	 
	 	 
	      if (model.direction == 'horizontal') {
	             model.currentthumb = model.thumbsections[model.currentSectionIndex].thumbs[0];
	      } else {
	            model.currentthumb = model.thumbsections[model.currentSectionIndex].thumbs[model.currentVSectionIndex];
	            console.log('CURRENT THUMB ' + model.currentthumb)
	      }
	     
	 	 for (var i = 0; i< thumbs.length; i++) {
	 	       if (thumbs[i].className.indexOf('current') != -1) {
	 	             console.log('mark' + thumbs[i].className)
	 	             removeClass(thumbs[i], 'current');
	 	        }
	 	    } 
	 	  addClass(model.currentthumb, 'current'); 
	 }
	 	
	 function toggleopen(){
	 	   
	 	    if(!model.currentSection) { return } 
	 	     
	 	    for(var i = 0; i<thumbsectionsarray.length; i++) {
	 	         thumbsectionsarray[i].style.display = 'none';
	 	 	}
	 	    //console.log('thumbsection allowed ' + thumbsectionsarray[model.currentSectionIndex].id);
	 	    thumbsectionsarray[model.currentSectionIndex].style.display = 'block';
	 	   
	 	    if (model.openthumbs == false) {
	 	           addClass(document.getElementById('thumbnav'), 'open');
	 	     }
	 		else if (model.openthumbs == true) {
	 		       removeClass(document.getElementById('thumbnav'), 'open');
	 		}
	 		
	 	}
	 	 
	 function addEvent(navitem, section, slidenum) {
	 	   navitem.element = slidenum;
	 	   navitem.addEventListener('click', controller.gotoslide, false);
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


});
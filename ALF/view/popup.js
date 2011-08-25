var popups = {
    init: function() {
     
        var refbutton = document.getElementById('references_button');
        var zoombutton = document.getElementById('safety_zoom');
        var zoombutton2 = document.getElementById('efficacy_zoom');
        var zoombutton3 = document.getElementById('safety_zoom2');
        
        var zoomWindow =  document.getElementById('zoomWindow');
        var zoomWindow2 =  document.getElementById('zoomWindow2');
         
        var popupWindow =  document.getElementById('popupWindow');
        var currentref;

	     //gestures.addLongTouchListener(refbuttons[i]);
	     refbutton.addEventListener('click', openwindow, false);
	     zoombutton.addEventListener('click', openzoom, false);
         zoombutton2.addEventListener('click', openzoom2, false);
         zoombutton3.addEventListener('click', openzoom2, false);
	     //model.addEventListener('longtouchevent', openwindow, false);
		
		function getcontent() {

			  var req = new XMLHttpRequest();
			      req.open('GET', path +'referencepopups.html', false)
			      req.setRequestHeader("Content-type", "text/html");
			      req.send(null);
			      
			      if(req.readyState == 4 && req.status == 0){
			     	      content = req.responseText;
			     	      document.append(content);
			     }              	                                
		 }
		 
		function openwindow (e) {
		       showcontent(e);
		       //document.getElementById('popupWindow').addEventListener('touchstart', hidepopup, false);
		       document.getElementById('popupclosebutton').addEventListener('click', closewindow, false);
		       //gestures.removeLongTouchListener(refbutton);
		      
		} 
		function closewindow () {
		       removeClass(document.getElementById('popupWindow'), 'active');
		        //gestures.addLongTouchListener(refbuttons[i]);		       
		       document.getElementById('popupclosebutton').removeEventListener('click', closewindow, false);
		 } 
		
		function showcontent (e) {
		     var refcontent = popupWindow.getElementsByTagName("ul");		  
		     for(var i = 0; i<refcontent.length; i++) {
		          refcontent[i].style.display = 'none';
		          if (refcontent[i].getAttribute('slide-id') == model.currentSlide.id) {
		                //console.log('content slide name ' + refcontent[i].getAttribute('slide-id') + ' model target  ' + model.longtouchtarget)
		              addClass(document.getElementById('popupWindow'), 'active');
		              refcontent[i].style.display = 'block';
		          } 
		     }
		}
		
	
		function openzoom(e) {
		       addClass(document.getElementById('zoomWindow'), 'active');
		       document.getElementById('zoomWindow').addEventListener('click', closezoom, false);
		} 
		function closezoom() {
		       removeClass(document.getElementById('zoomWindow'), 'active');
		        //gestures.addLongTouchListener(refbuttons[i]);		       
		       document.getElementById('zoomWindow').removeEventListener('click', closezoom, false);
		 } 
		
		function openzoom2(e) {
		       addClass(document.getElementById('zoomWindow2'), 'active');
		       document.getElementById('zoomWindow2').addEventListener('click', closezoom2, false);
		} 
		function closezoom2() {
		       removeClass(document.getElementById('zoomWindow2'), 'active');
		        //gestures.addLongTouchListener(refbuttons[i]);		       
		       document.getElementById('zoomWindow2').removeEventListener('click', closezoom2, false);
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
	   
}

};
references.init();
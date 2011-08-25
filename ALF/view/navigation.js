var Navigation = (function(){


	var controller = new NavigationController();
	var topmenu;
	
	var init = false;
	
	this.__defineGetter__("init",function() { return init});
	this.__defineSetter__("init",function(val) {init=val; initnav();});
	
	
	function markactivemenu() {
	     //console.log('Mark menu ' + model.currentSectionIndex)
	     model.currentMenuItem = model.menuItems[model.currentSectionIndex];
	     console.log('Menu ' + model.currentMenuItem)
		 for(var i = 0; i< model.menuItems.length; i++)
		   {
		     removeClass(model.menuItems[i], 'active');
		   }
		   addClass(model.currentMenuItem, 'active');
	}
		
	
	function addEvent(navitem, slidenum) {
	   navitem.element = slidenum;
	   navitem.addEventListener('click', controller.gotoslide,false);
       //navitem.addEventListener('click', react,false);
       //navitem.addEventListener('click', dereact,false);
	}
	function react(e) {

	    if (e.target.tagName == 'LI') {
	       addClass(e.target, 'react');
	    }
	    if (e.target.tagName != 'LI') {
	       addClass(e.target.parentNode, 'react');
	    }
	}
	function dereact(e) {
	    if (e.target.tagName == 'LI') {
	       removeClass(e.target, 'react');
	    }
	    if (e.target.tagName != 'LI') {
	       removeClass(e.target.parentNode, 'react');
	    }
	}
	function toggleopen() {
	    addClass(topmenu, 'open');
	    if(topmenu.className != 'open') {
	        addClass(topmenu, 'topmenu open');
	    }
	}
	
	function initnav() { 

	    var topnavwrapper = document.getElementById("topnavwrapper");
	    var topnav = document.createElement('nav');
	    topnav.setAttribute('id', 'topnav');
	    topnav.setAttribute('class', 'topnav');
	    
	    topnavwrapper.appendChild(topnav);  
	    var navul = document.createElement('ul');
	    navul.setAttribute('id', 'nav');
	    topnav.appendChild(navul); 
	     
	    for(var i =0; i<topmenuarray.length; i++) {
	         var navli = document.createElement('li');
	         navli.innerHTML = topmenuarray[i];
	         
	         if(topmenuarray[i].indexOf('home') != -1) {
	             navli.innerHTML = '';
	             navli.setAttribute('id', 'homebutton');
	             navli.setAttribute('class', 'home');
	         }
	         navul.appendChild(navli); 
	    }
	    
	    topmenu = document.getElementById("topnav");
	    var items = topmenu.getElementsByTagName("li");
	    var navitem;
	    model.menuItems = items;
	    
	    console.log('navigation set ' + topnav.children[0].offsetLeft);

	    for(var i = 0; i<items.length; i++) {
	         navitem = items[i];
	         addEvent(navitem, i);
	    }
	    
	    model.addEventListener('opennavigation', toggleopen, false);
	    model.addEventListener('currentSectionIndex', markactivemenu, true);
	    //Make it draggable
	    new DragElement(topnav.children[0],'125','-2');
	 }

	 function addClass(element,className) {
		    if (element==undefined) {return}
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
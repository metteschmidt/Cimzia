//INIT CODE
var SlideShow = (function() {

var slidescontroller = new SlidesController();

var init = false;

var sectionarray = new Array();
var contentarray = new Array();


this.__defineGetter__("init",function() { return init});
this.__defineSetter__("init",function(val) {
                     init=val; 
                  
                     if(init==false) { 
                        //unbindscroller();
                        }
                     if(init==true) {
                        initslides();
                        }
                        });
                        
function initslides() {
        
        if (model.dynamic == true) {
           initslideloader();
           
        }
        if (model.dynamic == false) {
           initscroller();
        }
    }

function initslideloader() {
 
    var filename;
    var primaryscroller = document.getElementById('scroller');
    
    for (var col = 0; col < slidesarray.length; col++) {
                    
                var newsection = document.createElement('section');
                newsection.setAttribute('class', 'slide');
                newsection.setAttribute('id', slidesarray[col][0]);
                primaryscroller.appendChild(newsection);	
                sectionarray.push(newsection); 
                
                if(slidesarray[col].length > 1) {
                       console.log('Make many slide sections ' + slidesarray[col].length)
                       for(var i = 0; i< slidesarray[col].length; i++) { 
                           var newslide = document.createElement('article');
                           newslide.setAttribute('class', 'innerslide');
                           newslide.setAttribute('id', slidesarray[col][i]);
                           sectionarray[col].appendChild(newslide);
                        }
                      }
                    
                 if(slidesarray[col].length == 1) {
                         console.log('Make single slide sections ' + sectionarray[col])
                         var newslide = document.createElement('article');
                         //newslide.setAttribute('class', 'more below');
                         newslide.setAttribute('id', slidesarray[col][0]);
                         sectionarray[col].appendChild(newslide);
                    }
  
          }//End for loop
       getcontent();
 }
function getcontent() {
  var filename;
  for (var col = 0; col < slidesarray.length; col++) {
       var req = new XMLHttpRequest();
       
       for(var i = 0; i < slidesarray[col].length; i++) { 
            filename = slidesarray[col][i];
            setTimeout( construct(filename), 200);
       }  
         
    function construct(filename) {
          req.open('GET', path + filename + '.html', false)
          req.setRequestHeader("Content-type", "text/html");
          req.send(null);
      
          if(req.readyState == 4 && req.status == 0){
     	      content = req.responseText;
     	      contentarray.push(content);
     }              	                                
    }
    }
    insertcontent();
 }
function insertcontent() {
     var slides = document.getElementsByTagName("article");
     for(var i = 0; i<slides.length; i++) {
          slides[i].innerHTML = contentarray[i];
      
     }
    initscroller();
} 
function initscroller() {
        //console.log("scrollers")
        var sections = document.getElementsByTagName("section");
        var slides = document.getElementsByTagName("article");
        var mainscroller = document.getElementById("scroller");
        
        model.sections = sections;
        model.slides = slides;
        model.internalScrollerArray = [];
                    
       for(var i = 0; i< sections.length; i++) {
       
             var sectionslides = sections[i].getElementsByTagName("article");
             model.sections[i].slides = sectionslides;
             
             if (sectionslides.length > 1) {
                   
                   var newscroller = document.createElement('div');
                   newscroller.setAttribute('class', sections[i].id + 'scroller');
                   newscroller.setAttribute('id', sections[i].id + 'scroller');
                   
                   for(var j = 0; j <sectionslides.length; j++) {
                          var clone = sectionslides[j].cloneNode(true);
                          newscroller.appendChild(clone);
                          //console.log("This section has many slides so I am making a scroller " + sections[i].id + ' slides ' + clone.id)
                   } 
                  
                 
                    sections[i].appendChild(newscroller);
                    clean(sections[i], sectionslides)
                    vscroller = sections[i].id;
               
                    //console.log('Make Scroller ' + vscroller + ' section ' + sections[i].id)
                    sections[i].style.height = (718*sectionslides.length)+'px'; 
                    
                    vscroller = new SlideScroller(sections[i].id, {
                     					          direction: 'vertical',
                     					          nrOfSlides: sectionslides.length
                     					     });
                     					     
                    vscroller.id = sections[i].id; 	
                    vscroller.domId = newscroller.id;
                    model.internalScrollerArray.push(vscroller); 
             }
             
       }
       mainscroller.style.width = (1024*model.sections.length)+'px';  
       //console.log('Scroller width set: ' + mainscroller.style.width);     
       
       slideScroll =  new SlideScroller('scroller', {
 						          direction: 'horizontal',
 						          nrOfSlides: model.sections.length
 						        });
       //document.addEventListener('scrollIn', scrollEnterHandler, false);	
       //document.addEventListener('scrollOut', scrollExitHandler, false);
      					     					     					     
       model.slidescroller = slideScroll;
}

function clean(section, contentarray) {
     for(var i = 0; i <contentarray.length; i++) { 
            section.removeChild(contentarray[0]);
     }
     
}
function scrollExitHandler() {
			       //Tell controller
			       //slidescontroller.markActive(model.currentScrollerId);
			       //model.slidescroller.deregister();
			       console.log('OUT!! ');
			       
}
function scrollEnterHandler () {
             
}			

    
});
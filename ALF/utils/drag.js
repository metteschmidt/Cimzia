function DragElement(inElement,boundryLeft,boundryRight)
{
    var self = this;
    console.log('new drag element ');
    this.element = inElement;
    this.position = '0,0';
    this.boundryRight = boundryRight;
    this.boundryLeft = boundryLeft;
    this.element.addEventListener('touchstart', function(e) { return self.onTouchStart(e) }, false);
}
DragElement.prototype = {
	 get position()
	 {
	     return this._position;
	 },
	 set position(pos)
	 {
	     this._position = pos;
	  
	     var components = pos.split(',');
	     var x = components[0];
	     var y = components[1];
	  
	     const kUseTransform = true;
	     if (kUseTransform) {
	         this.element.style.webkitTransform = 'translate(' + x + 'px, ' + y + 'px)';
	     }
	     else {
	         this.element.style.left = x + 'px';
	         this.element.style.top = y + 'px';
	     }
	 },
	 get x()
	 {
	     return parseInt(this._position.split(',')[0]);
	 },
	  
	 set x(inX)
	 {
	     var comps = this._position.split(',');
	     comps[0] = inX;
	     this.position = comps.join(',');
	 },
	  
	 get y()
	 {
	
	     return parseInt(this._position.split(',')[1]);
	
	 },
	  
	 set y(inY)
	 {
	     var comps = this._position.split(',');
	     comps[1] = inY;
	     this.position = comps.join(',');
	 },
	 onTouchStart: function(e)
	 {
	     //Start tracking when the first finger comes down in this element
	     if (e.targetTouches.length != 1)
	         return false;
	  
	     this.startX = e.targetTouches[0].clientX;
	     this.startY = e.targetTouches[0].clientY;
	  
	     var self = this;
	     this.element.addEventListener('touchmove', function(e) { return self.onTouchMove(e) }, false);
	     this.element.addEventListener('touchend', function(e) { return self.onTouchEnd(e) }, false);
	  
	     return false;
	 },
	 onTouchMove: function(e)
	 {
	     // Prevent the browser from doing its default thing (scroll, zoom)
	     e.preventDefault();
	
	     // Don't track motion when multiple touches are down in this element (that's a gesture)
	     if (e.targetTouches.length != 1)
	         return false;
	  
	     var leftDelta = e.targetTouches[0].clientX - this.startX;
	     var topDelta = 0;
	     
	     var newLeft = (this.x) + leftDelta;
	     var newTop = (this.y) + topDelta;
	     var newRight = (this.x) +  e.targetTouches[0].clientX + this.startX;
	     
	     //document.getElementById('debugdiv').innerHTML = 'left '+newLeft+' right '+ newRight;
	      
	     this.position = newLeft + ',' + newTop;
	     this.positionX = newLeft;
	     
	     this.startX = e.targetTouches[0].clientX;
	     this.startY = 0;
	     
	     if (newLeft > this.boundryLeft) {
	     	    this.position = this.boundryLeft+',0';
	         } 
	   	 if (newLeft < this.boundryRight) {
	   	 	    this.position = '0,0';
	   	     } 
	   	     
	     return false;
	 },
	 onTouchEnd: function(e)
	 {
	     // Prevent the browser from doing its default thing (scroll, zoom)
	     e.preventDefault();
	  
	     // Stop tracking when the last finger is removed from this element
	     if (e.targetTouches.length > 0)
	         return false;
	 
	    
	  
	     this.element.removeEventListener('touchmove', function(e) { return self.onTouchMove(e) }, false);
	     this.element.removeEventListener('touchend', function(e) { return self.onTouchEnd(e) }, false);
	  
	     return false;
	 }
 
}
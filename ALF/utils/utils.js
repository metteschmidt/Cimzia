var Utils = (function(){

       this.newElement = function(element,name,parent,attributes,attributename) {
         
          this.name = name;
          this.parent = parent;
          this.attributes = attributes;
          this.element = element;
          this.attributename;
          
          this.name = document.createElement(this.element);
          this.name.setAttribute(this.attributes, this.attributename);
          console.log('Utils: new element ' + this.element)
          this.parent.appendChild(name);
          
          return this.elementname 	        
        } 
        
        this.includeJS = function (file) {
        
            var script  = document.createElement('script');
            script.src  = jspath + file + '.js';
            script.type = 'text/javascript';
            //script.defer = true;
            document.getElementsByTagName('head').item(0).appendChild(script);
        }
        this.includeCSS = function(file) {
            var link  = document.createElement('link');
            link.href   =  csspath + file + '.css';
            link.rel    = 'stylesheet'
            link.type = 'text/css';
            link.charset= 'utf-8';
            //script.defer = true;
            document.getElementsByTagName('head').item(0).appendChild(link);
        }   
});
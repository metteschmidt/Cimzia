var administration = {
	initFoldouts: function() {

		var foldouts = document.getElementsByClassName("clickAndAnimate");
		var i;
		var x;

        initHeadingLinks();

        function clearAnimation(element) {
			$(element).removeClass("animating");
		}

        var clickActions = [];

        function addClickAction(element) {
        	clickActions.push(element);
        }

        function removeClickAction(element) {
        	var i;
        	for (i = clickActions.length - 1; i > -1; i--) {
        		if (clickActions[i] === element) {
        			clickActions.splice(i, 1);
        			        		}
        	}
        }

        function testClickAction(element) {
        	var i;

        	for (i = 0; i < clickActions.length; i++) {
        		if (clickActions[i] === element) {
        			return true;
        		}
        	}
        	addClickAction(element);
        	return false;
        }

		var togglerClick = function() {
			var article = $(this).closest("article")[0];
			if (article.className.indexOf("endState") < 0) {
				var me = this;
				var z;

				if (testClickAction(me) === true) {
					return false;
				}

				//The current element is not in an active clickAction
				if (me.parentNode.className.indexOf("active") < 0) {
					this.parentNode.addEventListener('webkitTransitionEnd', function( event ) { removeClickAction(me); this.removeEventListener('webkitTransitionEnd',arguments.callee,false); }, false);
					$(me).parent().addClass("active");

				}
				else {
					this.parentNode.addEventListener('webkitTransitionEnd', function( event ) { removeClickAction(me); this.removeEventListener('webkitTransitionEnd',arguments.callee,false); }, false);
					$(me).parent().removeClass("active");
				}
			}
			return false;
		}

		for (i = 0; i < foldouts.length; i++) {
			var togglers = foldouts[i].getElementsByClassName("toggler");

			for (x = 0; x < togglers.length; x++) {
				togglers[x].onclick = togglerClick;
			}
		}

	   function initHeadingLinks() {
	   		var headings = document.getElementsByTagName("h1");
	   		var i;

			function clearFoldouts(article) {
				/*console.log("clearFoldouts");
				console.log(article);*/
				var activeElements = article.getElementsByClassName("active");
				/*console.log("activeElements.length: " + activeElements.length);*/
				var z;

				for (z = activeElements.length; z > -1; z--) {
					$(activeElements[z]).removeClass("active");
				}
			}


	   		var anchorClick = function() {
	   			var me = this;

	   			if (testClickAction(me) === true) {
	   				return false;
	   			}

	   			var article = $(this).closest("article")[0];


	   			if (article.className.indexOf("endState") < 0) {
	   				$(article).addClass("endState");
	   				clearFoldouts(article);
	   			}
	   			else {
	   				$(article).removeClass("endState");
	   			}

	   			// Prevent second click-event on iPad
	   			window.setTimeout(function(thisObj) {
	   					try {
	   						removeClickAction(me);
	   					}
	   					catch(e) {}
	   				},400,this
	   			);
	   		}

	   		for (i = 0; i < headings.length; i++) {
	   			if (headings[i].getElementsByTagName("a")[0]) {
	   				headings[i].getElementsByTagName("a")[0].onclick = anchorClick;
	   			}
	   		}
	   	}
	}
};
administration.initFoldouts();

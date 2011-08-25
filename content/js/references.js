function referencesinit() {

		var referencesList = document.getElementById("references_scroller");		
		referencesList.addEventListener("swipeup", sliderefup, false);
		referencesList.addEventListener("swipedown", sliderefdown, false);
		
		function sliderefup() {
		      referencesList.style.cssText = '-webkit-transform:translate3d(0px,-500px,0px);'; 
		}
		function sliderefdown() {
		     referencesList.style.cssText = '-webkit-transform:translate3d(0px,0px,0px);';
		}
	
};
referencesinit();
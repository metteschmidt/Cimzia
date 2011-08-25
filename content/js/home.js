$(document).ready(function () {
   
	var slide0 = {
	    setupMenu: function () {
	        //$('article[data-id="problem0"]').unbind('articleenter', slide0.setupMenu);
	
	        slide0.startPageAnimation();
	       // $("#mainmenu").css("-webkit-transform", "translate3d(0, 50px, 0)");    
	    },
	
	    startPageAnimation: function () {
	        
	        var legObj = $(".frontLeg");
	        var brainObj = $(".frontSpafContainer");
	        var veinObj = $(".frontVein");
	
	        veinObj.css("-webkit-transform", "translate3d(-300px, 0, 0)");
	
	        setTimeout(function () { brainObj.css("-webkit-transform", "translate3d(-500px, 0, 0)") }, 200);
	        setTimeout(function () { legObj.css("-webkit-transform", "translate3d(-500px, 0, 0)"); }, 200);
	        
	    },
	
	    heavyImage: new Image(),
	    heavyImage:src = "content/images/home/BrainTitleimage.png",
	
	    heavyImage2: new Image(),
	    heavyImage2:src = "content/images/home/VeinIntroimage.png",
	
	    heavyImage3: new Image(),
	    heavyImage3:src = "content/images/home/leg.png",
	};
	
	    //Assign tap to start frontpage animation 
	    $(".slide_cover").bind('click', function () {
	     
	        slide0.startPageAnimation();        
	        //setTimeout(function () { $("#mainmenu").css("-webkit-transform", "translate3d(0, 50px, 0)"); }, 2000);
	    });
	    $(".slide0").bind('click', function () {
	    
	         slide0.startPageAnimation();        
	         //setTimeout(function () { $("#mainmenu").css("-webkit-transform", "translate3d(0, 50px, 0)"); }, 2000);
	     });
});

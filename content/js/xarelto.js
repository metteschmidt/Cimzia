var xeralto = {

  Init: function () {
 
      solutionPage();
  
      $(".slide5 h1 span").bind('click', function (event) {
          title();});
      
          
	  function title() {
		
			$(".slide5 table tr td.warfarin.stateChecked").css("background-image","url(content/images/xeralto/check0.png)");
			$(".slide5 table tr td.xarelto.stateChecked").css("background-image", "url(content/images/xeralto/check1.png)");
			$(".endStatement p").css("display", "block");
		    $("#pilldrag .handle").css("top", "456px");
	  }	
				
	  function solutionPage () {
		//Make sure that the Dragdealer is only initialized once or else it will not function if the slide is revisited
		       if (model.dd == null) {
		      
					dd = new Dragdealer('pilldrag',
					{   
					 
						horizontal: false,
						vertical: true,
					
						animationCallback: function( x, y )
						{
							$( 'table tr' ).each( function ( i, el ) {
								$( el )[ i < y * 9 ? 'addClass' : 'removeClass' ]( 'voodoo' );
							});
						}
					});
					model.dd = dd;
				}
         }
    }
};

xeralto.Init();

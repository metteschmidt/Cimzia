var slide3State = 0;
var slide3ClickState = 0;
var slide3Dead = false;
var slide3Title = "toEnd";
var slide3TitleClick = 0;
var slide3Element;
var slide3isTouch = ('ontouchstart' in window);


function moveStickMan(className, x, y, animate) {

    if (!animate) {
        document.getElementsByClassName(className)[0].style.webkitTransitionDuration = "0s";
    }

    // find the distance between the current pos and the new pos
    var newX = x - $("." + className).css("left").replace("px", "");
    var newY = y - $("." + className).css("top").replace("px", "");
    // move to the new pos
    document.getElementsByClassName(className)[0].style.webkitTransform = "translate3d(" + newX + "px, " + newY + "px, 0)";
    
}

function moveStickMen(animate) {

    // make sure all stick men are indicated
    showSilde2Fold("fold5");

    // turn off other fold buttons
    $(".foldContainer li").css("display", "none");
    $(".foldContainer li.foldButton5").css("display", "inline-block");

    var leftPos = 280; // Left pos of where the stick men should start to line up
    var leftSpace = 45; // space between the stick men
    var topPos = 348; // Top pos of where the stick men should start to line up
    var stickMenCount = document.getElementsByClassName("stickMan").length;

    // loop through all stick men to re-pos them
    for (i = 0; i < stickMenCount; i++) {
        moveStickMan("stickMan" + i, leftPos, topPos, animate);
        leftPos += leftSpace;
    }

    // Stick men moved to final place, change state to 1
    slide3State = 1;
}

// show selected fold of stick men
function showSilde2Fold(fold) {
    // reset fold buttons
    $(".foldContainer li").css("background-position", "0 -135px").css("color", "rgb(153,153,153)");

    if (fold != "fold5") {
        // reset all stick men
        $(".slide3 .stickMan").css("background-position", "0 0");

        // set the corrent stick men
        $(".slide3 .stickMan." + fold).css("background-position", "0 -40px");

        // set fold button
        $(".foldContainer li.foldButton" + fold.replace("fold", "")).css("background-position", "0 0").css("color", "White");
    }
    else {
        // set all stick men
        $(".slide3 .stickMan").css("background-position", "0 -40px");

        // set fold button
        $(".foldContainer li.foldButton5").css("background-position", "0 0").css("color", "White");
    }
}

// function to show risk of death on stick men
function slide3WD(animate,WD) {

    var stickMenCount = document.getElementsByClassName("stickMan").length;
    var newPos = "0px -120px";
    if (WD == "death") {
        newPos = "0px -80px";
    }
    if (!slide3Dead) {
        for (i = stickMenCount - 1; i >= Math.round(stickMenCount / 2); i--) {

            if (slide3State != 2) {
                $(".stickMan" + i).css("background-position", "0px -158px");

                // append deadStickMan
                $(".stickMan" + i).append("<div class='deadStickMan deadStickMan" + i + "'></div>");
            }

            if (animate) {

                // flip to dead or wheelchair
                setTimeout('document.getElementsByClassName("deadStickMan' + i + '")[0].style.webkitTransform = "rotateX(360deg)"', (800 - (i * 40)));
                setTimeout('$(".deadStickMan' + i + '").css("background-position", "' + newPos + '")', (800 - (i * 40)) + 125);
            }
            else {
                $(".deadStickMan" + i).css("background-position", newPos);
            }
        }
        slide3Dead = true;
    }
    else {
        for (i = stickMenCount - 1; i >= Math.round(stickMenCount / 2); i--) {

            if (slide3State != 2) {
                $(".stickMan" + i).css("background-position", "0px -158px");

               // show deadStickMan
               $(".deadStickMan").css("display", "block");
            }

            if (animate) {

                // flip to dead or wheelchair
                setTimeout('document.getElementsByClassName("deadStickMan' + i + '")[0].style.webkitTransform = "rotateX(360deg)"', (800 - (i * 40)));
                setTimeout('$(".deadStickMan' + i + '").css("background-position", "' + newPos + '")', (800 - (i * 40)) + 125);
            }
            else {

                $(".deadStickMan" + i).css("background-position", newPos);
            }
        }
    }


    // Death or wheelchair in stick men shown, change state to 2
    slide3State = 2;
}

  var slidelement = document.getElementById('stroke_stickmen');
// function to set elements to final statement without animations
  function slide3title() {

      slide3TitleClick++;

      if (slide3TitleClick < 2) {

          if (slide3Title === "toEnd") {

              slidelement.className = "slide3 off";
              // show module box
              $(".slide3 .module").css("display", "block");

              // if stick men hasn't been moved yet
              if (slide3State < 1) moveStickMen(false);
              slide3WD(false, "Wheelchair");
              // show statements
              $(".slide3Statement0").css("display", "block");
              $(".slide3Statement1").css("display", "none");
              $(".slide3Statement2").css("display", "list-item");
              slide3Title = "toStart"
              slide3ClickState = 4;
             
          }
          else {
              slide3Reset();
              slide3Title = "toEnd"
          }
      }

      var t = setTimeout("slide3TitleResetClick()", 1000);
}


function slide3TitleResetClick() {
    slide3TitleClick = 0;
}

// function to show statements
function slide3Statement() {

    switch (slide3ClickState) {
        case 0: // show the correct folds
            showSilde2Fold("fold5");
            slide3ClickState = 1;
            break;
        case 1: // line up stick men
            // turn off background with stick men
              slidelement.className = "slide3 off";
            // show module box
            setTimeout('$(".slide3 .module").css("display", "block")',300);
            setTimeout('moveStickMen(true)', 300);
            // Show statement 0
            setTimeout('$(".slide3Statement0").css("display", "block")', 700);
            slide3ClickState = 2;
            break;
        case 2: // show death in stick men and first list statement
            slide3WD(true, "death");
            // Show statement 1
            $(".slide3Statement1").css("display", "list-item");
            slide3ClickState = 4;
            slide3End = true;
            slide3Title = "toStart";
            break;
        case 3: // show wheelchairs and last statement
            slide3WD(true, "wheelchair");
            // hide statement 1
            $(".slide3Statement1").css("display", "none");
            // Show statement 2
            $(".slide3Statement2").css("display", "list-item");
            slide3ClickState = 3;
            slide3End = true;
            slide3Title = "toStart";
            break;
    }

}

function slide3Reset() {

    var stickMenCount = document.getElementsByClassName("stickMan").length;

    // turn background on
    document.getElementById('stroke_stickmen').className = "slide3";

    // reset all stick men
    $(".slide3 .stickMan").css("background-position", "0 0");



    // move stick men to original pos (remember to check for animattion)
    for (i = 0; i < stickMenCount; i++) {
        var el = "stickMan" + i;
        document.getElementsByClassName(el)[0].style.webkitTransitionDuration = "500ms";
        document.getElementsByClassName(el)[0].style.webkitTransform = "translate3d(0, 0, 0)";
    }
  
    // hide deadStickMan class elements
    $(".deadStickMan").css("display","none");


    // reset fold buttons
    $(".foldContainer li").css("display", "inline-block");
    $(".foldContainer li").css("background-position", "0 -135px").css("color", "rgb(153,153,153)");
    $(".foldContainer li.foldButton0").css("background-position", "0 0").css("color", "White");


    // hide statement 1 and 2
    $(".slide3Statement1").css("display", "none");
    $(".slide3Statement2").css("display", "none");

    // hide module box
    $(".slide3 .module").css("display", "none")

    // reset state

    slide3State = 0;
    slide3ClickState = 0;

}



function slide3Init() {

    
    slide3Element = document.getElementsByClassName("slide3")[0];

    // removeClickAction(slide3Element.getElementsByTagName("h1")[0].getElementsByTagName("span")[0]);

    slide3Element.addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        slide3Statement();
        //event.stopPropagation();
        //event.preventDefault(); 
    }, false);

    slide3Element.getElementsByTagName("h1")[0].getElementsByTagName("span")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        
        slide3title();
        event.stopPropagation();
        event.preventDefault();

    }, false);

    slide3Element.getElementsByClassName("foldButton0")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        showSilde2Fold("fold0");
        event.stopPropagation();
        event.preventDefault();
    }, false);

    slide3Element.getElementsByClassName("foldButton2")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        showSilde2Fold("fold2");
        event.stopPropagation();
        event.preventDefault();
    }, false);

    slide3Element.getElementsByClassName("foldButton3")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        showSilde2Fold("fold3");
        event.stopPropagation();
        event.preventDefault();
    }, false);

    slide3Element.getElementsByClassName("foldButton4")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        showSilde2Fold("fold4");
        event.stopPropagation();
        event.preventDefault();
    }, false);

    slide3Element.getElementsByClassName("foldButton5")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        if (slide3ClickState < 1) showSilde2Fold("fold5");
        event.stopPropagation();
        event.preventDefault();
    }, false);



    slide3Element.getElementsByClassName("slide3Statement1")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        slide3WD(true, "wheelchair");
        $(".slide3Statement1").css("display", "none");
        $(".slide3Statement2").css("display", "list-item");
        event.stopPropagation();
        event.preventDefault();
    }, false);



    slide3Element.getElementsByClassName("slide3Statement2")[0].addEventListener(slide3isTouch ? 'touchstart' : 'mousedown', function (event) {
        slide3WD(true, "death");
        $(".slide3Statement2").css("display", "none");
        $(".slide3Statement1").css("display", "list-item");
        event.stopPropagation();
        event.preventDefault();
    }, false);
    


}

// start nitialization of slide3
slide3Init();

var slide4TitleClick = 0;
var slide4CardClick = 0;

$(document).ready(function () {
    //Assign the Slide 4 functions
    $(".card-container").bind('click', function () {
        slide4.assignNextStepCurrentTreatment(event);
    });

    //Assign H1 end state functions
    $(".slide4 h1").bind('click', function () {
        slide4.resetToggle();
    });
});
var slide4 = {
    currTreat: 0, //State of the Slide 4 flow (0, 1, 2 or 3)
    assignNextStepCurrentTreatment: function (event) {
        slide4CardClick++;

        if (slide4CardClick < 2) {
            switch (slide4.currTreat) {
                case 0:
                    $(".slide4 .card").css("-webkit-transform", "rotateX(180deg)");
                    $(".card .back").css("-webkit-backface-visibility", "visible");
                    $(".card .front").css("-webkit-backface-visibility", "hidden");
                    slide4.showElem($(".slide4 .subTextMain"), "block");
                    slide4.currTreat = 1
                    event.stopPropagation();
                    event.preventDefault();
                    break;
                case 1:
                    setTimeout(function () { slide4.fadeMen("men", 5) }, 300);
                    slide4.showElem($(".slide4 .subText1"), "list-item");
                    slide4.currTreat = 2;
                    break;
                case 2:
                    setTimeout(function () { slide4.fadeMen("men", 1) }, 300);
                    slide4.showElem($(".slide4 .subText2"), "list-item");
                    slide4.currTreat = 3;
                default:
                    break;
            }
        }
        var tt = setTimeout("slide4.slide4CardResetClick()", 200);
    },
    fadeMen: function (elem, amtLeft) {
        $("." + elem + " li").each(function (index) {
            if (index >= amtLeft) {
                $(this).css("-webkit-transform", "rotateY(360deg)");
                $(this).css("opacity", "0.2");
            }
        });
    },
    showElem: function (elem, elemType) {
        elem.css("display", elemType);
    },

    resetToggle: function () {
        slide4TitleClick++;
        console.log(slide4.currTreat)
        if (slide4TitleClick < 2) {
            if (slide4.currTreat == 3) {
                $(".card").css("-webkit-transform", "rotateX(360deg)");
                $(".card .back").css("-webkit-backface-visibility", "hidden");
                $(".card .front").css("-webkit-backface-visibility", "visible");

                slide4.showElem($(".slide4 .subTextMain"), "none");
                slide4.showElem($(".slide4 .subText1"), "none");
                slide4.showElem($(".slide4 .subText2"), "none");

                $(".men li").each(function (index) {
                    if (index >= 1) {
                        $(this).css("opacity", "1");
                    }
                });
                slide4.currTreat = 0;
            }
            else {
                $(".card").css("-webkit-transform", "rotateX(180deg)");
                $(".card .back").css("-webkit-backface-visibility", "visible");
                $(".card .front").css("-webkit-backface-visibility", "hidden");


                slide4.showElem($(".slide4 .subTextMain"), "block");
                slide4.showElem($(".slide4 .subText1"), "list-item");
                slide4.showElem($(".slide4 .subText2"), "list-item");
                $(".men li").each(function (index) {
                    if (index >= 1) {
                        $(this).css("opacity", "0.2");
                    }
                });
                slide4.currTreat = 3;
            }
        }

        var t = setTimeout("slide4.slide4TitleResetClick()", 200);
    },

    slide4TitleResetClick: function () {
        slide4TitleClick = 0;
    },
    slide4CardResetClick: function () {
        slide4CardClick = 0;
    }
};
/**
 * 
 *  TASK:
 *  1. USE THE ARROWS TO MOVE THE SLIDER LEFT AND RIGHT WITH YOUR MOUSE
 *  2. DO THE SAME FOR THE ARROWS ON YOUR KEYBOARD
 *  3. BONUS: CLICK ON THE LITTLE CIRCLES TO MOVE BETWEEN SLIDES WITHOUT ARROWS
 * 
/**/

$(document).ready(function(){

    // REFS
    var nextBtn = $('.next');
    var prevBtn = $('.prev');

    // EVENTS ON CLICK
    nextBtn.click(function(){
        nextPrevSlide('next');
    });

    prevBtn.click(function(){
        nextPrevSlide('prev');
    });

    //END OF DOCUMENT READY
});


/****************************************
*
* FUNCTIONS
*
 ****************************************/

function nextPrevSlide(direction) {

    // ACTIVE SLIDE
    var activeSlide = $('.images img.active');
    // ACTIVE CIRCLE
    var activeCircle = $('.nav i.active');
    
    // RESET
    activeSlide.removeClass('active');
    activeCircle.removeClass('active');

    // DIRECTION NEXT
    if(direction === 'next'){

        // CHECK IF LAST SLIDE && LAST CIRCLE IS REACHED TO START AGAIN FROM THE BEGINNING
        if(activeSlide.hasClass('last')) {
            $('.images img.first').addClass('active');
            $('.nav i.first').addClass('active');
        }

        activeSlide.next('img').addClass('active');
        activeCircle.next('i').addClass('active');
    } 

    // DIRECTION PREV
    else if(direction === 'prev') {

        // CHECK IF FIRST SLIDE && CIRCLE IS REACHED TO START AGAIN FROM THE END
        if (activeSlide.hasClass('first')) {
            $('.images img.last').addClass('active');
            $('.nav i.last').addClass('active');
        }

        activeSlide.prev('img').addClass('active');
        activeCircle.prev('i').addClass('active');
    }
}

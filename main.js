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

    // RESET
    activeSlide.removeClass('active');

    // DIRECTION NEXT
    if(direction === 'next'){
        activeSlide.next('img').addClass('active');
    } 
    // DIRECTION PREV
    else if(direction === 'prev') {
        activeSlide.prev('img').addClass('active');
    }
}

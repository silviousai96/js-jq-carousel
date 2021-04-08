//SLIDER

//seleziono con il $ la freccetta destra che ha classe .c-right atrraverso jQuery.
var rightArrow = $('.c-right');
//quando clicco su rightArrow tolgo la classe 'active' all'immagine visibile.
rightArrow.click(function(){
    var currentActive = $('.images .active')
    currentActive.removeClass('active');
    
    //se l'immagine nello slider attiva(quindi con classe 'active') ha la classe 'last', 
    //aggiungo la classe active alla prima immagine.
    if( currentActive.hasClass('last') ) {
        $('.images .first').addClass('active');
    } else {
        //se no, aggiungo la classe 'active' all'elemento successivo.
        var nextImg = currentActive.next();
        nextImg.addClass('active');
    }
   
})
//seleziono con il $ la freccetta sinistra che ha classe .c-left atrraverso jQuery.
var leftArrow = $('.c-left');
//quando clicco su leftArrow tolgo la classe 'active' all'immagine visibile.
leftArrow.click(function(){
    var currentActive = $('.images .active')
    currentActive.removeClass('active'); 

    //se l'immagine nello slider attiva(quindi con classe 'active') ha la classe 'first', 
    //aggiungo la classe active all' ultima immagine che ha classe 'last'.
    if( currentActive.hasClass('first') ) {
        $('.images .last').addClass('active');
    } else {
        //se no, aggiungo la classe 'active' all'elemento precedente.
        var prevImg = currentActive.prev();
        prevImg.addClass('active');
    }
});
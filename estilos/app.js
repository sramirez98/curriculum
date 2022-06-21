$(document).ready(function(){
    const hamburger = $('.hamburger')
    const nav = $('.nav__container')
    let state = 'close'
    let navItem = $('.nav__item')

    
    hamburger.on('click',function(){
        state = 'open'
        nav.addClass('active')
        $(this).on('click',function(e){
            if(state == 'open'){
                state = 'close'
                nav.removeClass('active')
            }
            
            else{
                state = 'open'
                nav.addClass('active')
            }
        })
    })

    navItem.on('click',function(){
        state = 'close'
        nav.removeClass('active')
    })
})
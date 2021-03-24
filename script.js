$(document).ready(function () {
    let flag = false
    $('.hoocah').click(function(){
        if(!flag){
            $('.drop-one').slideDown();
            $('.up').slideUp();
            $('.img-drop-one').css('transform', 'rotate(360deg)')
            $('.img-drop').css('transform', 'rotate(-90deg)')
        }else{
            $('.drop-one').slideUp();
            $('.img-drop-one').css('transform', 'rotate(-90deg)')
        }
        flag=!flag
    })
    

    $('.tabbaco').click(function(){
        if(!flag){
            $('.drop-two').slideDown();
            $('.drop-one').slideUp();
            $('.img-drop').css('transform', 'rotate(360deg)')
            $('.img-drop-one').css('transform', 'rotate(-90deg)')
        }else{
            $('.drop-two').slideUp();
            $('.img-drop').css('transform', 'rotate(-90deg)')
        }
        flag=!flag
    })


    // __________________________________________________________420

    $('.menu-elem-drop').click(function(){
        if(!flag){
            $('.subdrop-one').slideUp()
            
        }else{
            $('.up-two').slideUp();
            $('.up-three').slideUp();            
            $('.up-four').slideUp();
            $('.up-six').slideUp();
            $('.up-five').slideUp();
            $('.up-seven').slideUp();
            $('.subdrop-one').slideDown()
        }
        flag=!flag
    })

    // __________________________________________________________DARKSIDE

    $('.menu-elem-drop-two').click(function(){
        if(!flag){
            $('.subdrop-two').slideUp()
            
        }else{
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-three').slideUp();            
            $('.up-four').slideUp();            
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-two').slideDown()
        }
        flag=!flag
    })

    // __________________________________________________________ELEMENT

    $('.menu-elem-drop-three').click(function(){
        if(!flag){
            $('.subdrop-three').slideUp()
            
        }else{
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-four').slideUp();            
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-three').slideDown()
        }
        flag=!flag
    })

    // __________________________________________________________SERBETLI

    $('.menu-elem-drop-four').click(function(){
        if(!flag){
            $('.subdrop-four').slideUp()
            
        }else{
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();            
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-four').slideDown()
        }
        flag=!flag
    })

    // __________________________________________________________BUTA

    $('.menu-elem-drop-five').click(function(){
        if(!flag){
            $('.subdrop-five').slideUp()
            
        }else{
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-five').slideDown()
        }
        flag=!flag
    })

    // __________________________________________________________TANGIRES

    $('.menu-elem-drop-six').click(function(){
        if(!flag){
            $('.subdrop-six').slideUp()
            
        }else{
            $('.up-one').slideUp();
            $('.up-seven').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-five').slideUp();
            $('.subdrop-six').slideDown()
        }
        flag=!flag
    })

    // __________________________________________________________CULT

    $('.menu-elem-drop-seven').click(function(){
        if(!flag){
            $('.subdrop-seven').slideUp()
            
        }else{
            $('.up-one').slideUp();
            $('.up-two').slideUp();
            $('.up-three').slideUp();
            $('.up-four').slideUp();
            $('.up-five').slideUp();
            $('.up-six').slideUp();
            $('.subdrop-seven').slideDown()
        }
        flag=!flag
    })
  })

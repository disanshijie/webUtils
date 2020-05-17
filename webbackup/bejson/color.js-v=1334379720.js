$(document).ready(function(){
    $('div.Color_td_L').each(function(i){
        $(this).click(function(){ //colorDemo colorText
            $('#colorDemo').css('background-color',$(this).css('background-color'));
            $('#colorText').val($(this).attr('style').replace('background-color:','').replace(';','').replace('BACKGROUND-COLOR:',''));
            $('.select').removeClass('select');
            $(this).addClass('select');
        })
    })
})
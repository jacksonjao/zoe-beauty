/**
 * Created by Juliana on 12/03/2017.
 */
$(document).ready(function() {

    var cp=false;
    $(".visible").fadeOut(0);
    $('.holi').click(function(){

        if(cp==false){
            $(this).toggleClass('fa-bars fa-times');
            $(".menu").animate({left:"0"});
            $(".visible").fadeIn(500);
           // $(".visible").css("opacity","0.8");
            cp=true;
        } else{
            if(cp==true){
                $(this).toggleClass('fa-times fa-bars');
                $(".menu").animate({left:"-100%"});
                cp=false;
                $(".visible").fadeOut(500);;
               // $(".visible").css("opacity","0");
            }
        }
    });

});
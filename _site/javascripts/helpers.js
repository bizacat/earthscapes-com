$(document).ready(function(){
   $('.menu-icon').click(function(){
       $('.nav').toggle();
       $(this).toggleClass('open');
   });

});
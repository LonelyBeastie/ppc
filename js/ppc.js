$(document).ready(function() {
  var fade_time = 3000;
  setTimeout(function(){ loop_slide_fading(fade_time) }, 1000);
});

function loop_slide_fading(fade_time){
  slide_fading(fade_time).then(function() {
    loop_slide_fading(fade_time);
  });
}
function slide_fading(fade_time){
  return new Promise(function (fulfill, reject){
    $('.blur_1').fadeIn(fade_time, function() {
      $('.blur_2').fadeIn( fade_time, function() {
        $('.blur_3').fadeIn( fade_time, function() {
          $('.blur_4').fadeIn( fade_time, function() {
            $('.blur_0').fadeIn( fade_time, function() {
              $('.blur_2, .blur_3, .blur_4, .blur_0').fadeOut( fade_time, function() {
                fulfill(true); //if the action succeeded
              });
            });
          });
        });
      });
    });
  });
}

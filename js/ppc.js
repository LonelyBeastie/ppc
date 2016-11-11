$(document).ready(function() {
  var fade_time = 2000;
  setTimeout(function(){
    $(".opening, .opening-enclosure").hide();
    loop_slide_fading(fade_time);
  }, 3000);
});

function loop_slide_fading(fade_time){
  slide_fading(fade_time).then(function() {
    // loop_slide_fading(fade_time);
    window.location.href = "main.html";
  });
}
function slide_fading(fade_time){
  return new Promise(function (fulfill, reject){
    $('.fade_pic_words').removeClass("not_shown")
    $('.blur_1').fadeIn(fade_time, function() {
      $('.fade_pic_words').text("Social");
      $('.blur_2').fadeIn( fade_time, function() {
        $('.fade_pic_words').text("Friends");
        $('.blur_3').fadeIn( fade_time, function() {
          $('.fade_pic_words').text("Community");
          $('.blur_4').fadeIn( fade_time, function() {
            $('.fade_pic_words').addClass("long").text("We all need neighborhoods");
            $('.blur_0').fadeIn( fade_time, function() {
              // $('.blur_2, .blur_3, .blur_4, .blur_0').fadeOut( fade_time, function() {
                fulfill(true); //if the action succeeded
              // });
            });
          });
        });
      });
    });
  });
}

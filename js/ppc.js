$(document).ready(function() {
  var fade_time = 2000;
  setTimeout(function(){
    $(".opening, .opening-enclosure").hide();
    loop_slide_fading(fade_time);
  }, 3000);
});

function loop_slide_fading(fade_time){
  slide_fading(fade_time)//.then(function() {

}
function slide_fading(fade_time){
  var promise = new Promise(function(resolve) {
    var fade_time = 2000;
  // return new Promise(function (fulfill, reject){
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
                // fulfill(true); //if the action succeeded
                resolve(true); //if the action succeeded
              // });
            });
          });
        });
      });
    });
  });
  promise.then(function(result) {
    // loop_slide_fading(fade_time);
    window.location.href = "main.html";
  });
}
//
// 'use strict';
//
//
//     setTimeout(function() {
//         resolve("result");
//     }, 1000);
// });
//
// promise.then(function(result) {
//     alert("Fulfilled: " + result);
// }, function(error) {
//     alert("Rejected: " + error);
// });

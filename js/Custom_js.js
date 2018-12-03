	$(document).ready(function() {
      $("#video-icon1").mouseover(function(){
	      $("#video-icon1-1").css('display','none');
	  });
$('#video-icon1').mouseleave(function() {
    $("#video-icon1-1").css('display','block');
});	  
  $("#video-icon2").mouseover(function(){
	      $("#video-icon2-1").css('display','none');
	  });
$('#video-icon2').mouseleave(function() {
    $("#video-icon2-1").css('display','block');
});	  
$("#video-icon3").mouseover(function(){
	      $("#video-icon3-1").css('display','none');
	  });
$('#video-icon3').mouseleave(function() {
    $("#video-icon3-1").css('display','block');
});	  
$("#video-icon4").mouseover(function(){
	      $("#video-icon4-1").css('display','none');
	  });
$('#video-icon4').mouseleave(function() {
    $("#video-icon4-1").css('display','block');
});	  
$("#video-icon5").mouseover(function(){
	      $("#video-icon5-1").css('display','none');
	  });
$('#video-icon5').mouseleave(function() {
    $("#video-icon5-1").css('display','block');
});	  
$("#video-icon6").mouseover(function(){
	      $("#video-icon6-1").css('display','none');
	  });
$('#video-icon6').mouseleave(function() {
    $("#video-icon6-1").css('display','block');
});	  
$("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1199,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: false,
        autoPlay:true,
    });
});

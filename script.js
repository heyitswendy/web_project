$(function() {
    console.log( "ready!" );
});


// Contact form regex.
  // Email
function validateEmail(email) {
  var re = /^(http|https):\/\/[a-zA-Z0-9]+.[a-z]{1,10}$/;
  return re.test(email);
}

function validate() {
  $(".result").text("");
  var email = $("input[type='Email']").val();
  if (validateEmail(email)) {
    $(".result").text(email + " is valid :)");
    $(".result").css("color", "green");
  } else {
    $(".result").text(email + " is not valid :(");
    $(".result").css("color", "red");
  }
  return false;
}

$(".contactform").bind("button", validate);



//Map
$("#map"). function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 49.2827, lng: 123.1207},
    scrollwheel: false,
    zoom: 10
  });
}

//Ads elastic bar.
$(function() {

  // Get the toggle sidebar button from the DOM
  var $adbarButton = $('.adbar-button');
  var $adbar = $('.ads');
  var $adbarButtonIcon = $('.fa fa-bars adbar-button-icon');
  var adbarIsOpen = false;

  // First, make sure the sidebar is out of sight
  $adbar.css('height', '20px');

  // When the user clicks the button
  $adbarButton.on('click', function() {
    var adbarHeight;

    if (adbarIsOpen) {
      // We want to close the sidebar
      $adbarButtonIcon.removeClass('fa-times').addClass('fa-bars');
      adbarHeight = '20px';
    } else {
      // We want to open the sidebar
      $adbarButtonIcon.removeClass('fa-bars').addClass('fa-times');
      adbarWidth = '30%';
    }

    $adbar.animate({height: adbarHeight}, 300);
    adbarIsOpen = !adbarIsOpen;
  });

});

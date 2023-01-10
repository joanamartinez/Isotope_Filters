/* var contents = $('#contents')[0]; //returns a HTML DOM Object */

function openNav() {
  $("#side-nav-bar").toggleClass("hidden");
  $("#side-nav-bar").toggleClass("side-nav-bar");
  $("#cards").toggleClass("cards");
  $("#filter-button").toggleClass("filter-button-active");
}

function closeNav() {
  $("#side-nav-bar").addClass('hidden').siblings().removeClass('side-nav-bar cards');
  $("#filter-button").removeClass("filter-button-active");
}
//https://stackoverflow.com/questions/47476061/pushing-the-content-without-it-changing-width-when-opening-sidebar



  $('.nav-bar-right').children().each( function( i, liElement ) {
    var $liElement = $( liElement );
    $liElement.click( function(e) {
        $(this).toggleClass('nav-bar-item-selected').siblings().removeClass('nav-bar-item-selected'); 
        e.preventDefault();
    });
    i++;
  });

  


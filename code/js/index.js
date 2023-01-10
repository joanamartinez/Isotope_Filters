var qsRegex;

/* Filters with Isotope */
var $cards = $('.cards-container').isotope({
  itemSelector: '.card',
  layoutMode: 'fitRows',
  masonry: {
    columnWidth: '.cards'
    },
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});

var $searchBar = $('.search-bar').keyup(  function() {
  qsRegex = new RegExp( $searchBar.val(), 'gi' );
  $cards.isotope();
});

/* Open and close the side bar */
function openSideNav() {
  $("#side-nav-bar").toggleClass("hidden");
  $("#side-nav-bar").toggleClass("side-nav-bar");
  $("#cards").toggleClass("cards");
  $("#filter-button").toggleClass("filter-button-active");
}

function closeSideNav() {
  $("#side-nav-bar").addClass('hidden').siblings().removeClass('side-nav-bar cards');
  $("#filter-button").removeClass("filter-button-active");
}

/* Top Nav Bar change element color to blue when clicked */
  $('.nav-bar-right').children().each( function( i, liElement ) {
    var $liElement = $( liElement );
    $liElement.click( function(e) {
        $(this).toggleClass('nav-bar-item-selected').siblings().removeClass('nav-bar-item-selected'); 
        e.preventDefault();
    });
    i++;
  });

  


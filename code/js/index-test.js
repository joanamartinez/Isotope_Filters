/*******************************************************************************************************************/
/*
var qsRegex;

/* Filters with Isotope *//*
var filters = {};

$('.filters').on( 'click', '.nav-bar-item', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $filterGroup = $button.parents('.nav-bar-right');
  var filterGroup = $filterGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $cards.isotope({ filter: filterValue });
});

/* Search bar with Isotope *//*
var $cards = $('#cards-container').isotope({
  itemSelector: '.card',
  animationEngine: 'best-available',
  masonry: {
    fitWidth: true
  },
  filter: function() {
    return qsRegex ? $(this).text().match( qsRegex ) : true;
  }
});

var $searchBar = $('.search-bar').keyup(  function() {
  qsRegex = new RegExp( $searchBar.val(), 'gi' );
  $cards.isotope();
});



/*$('.nav-bar-right').children().each( function( i, liElement ) {
  var $liElement = $( liElement );
  $liElement.click( function(e) {
      $(this).toggleClass('nav-bar-item-selected').siblings().removeClass('nav-bar-item-selected'); 
      e.preventDefault();
  });
  i++;
});*/
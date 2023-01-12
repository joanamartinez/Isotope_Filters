
var navItemFilters = {};
var navItemFilter;

var sideNavItemFilters = {};
var sideNavItemFilter;
// quick search regex
var qsRegex;

// init Isotope
var $cards = $('#cards-container').isotope({
  itemSelector: '.card',
  filter: function() {
    var $this = $(this);
    var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
    var navItemResult = navItemFilter ? $this.is( navItemFilter ) : true;
    return searchResult && navItemResult;
  },
});

$('.filters').on( 'click', '.nav-bar-item', function() {
  /* Top Nav Bar change element color to blue when clicked */
  $(this).addClass('nav-bar-item-selected').siblings().removeClass('nav-bar-item-selected'); 
  var $navItemGroup = $(this).parents('.nav-bar-group');
  var filterGroup = $navItemGroup.attr('data-filter-group');
  navItemFilters[ filterGroup ] = $(this).attr('data-filter');
  navItemFilter = concatValues( navItemFilters );
  $cards.isotope();
});

$('.filters').on( 'click', '.side-nav-bar-item', function() {
  /* Side Nav Bar change element color to blue when clicked */
  $(this).addClass('side-nav-bar-item-selected').siblings().removeClass('side-nav-bar-item-selected'); 
  var $sideNavItemGroup = $(this).parents('.side-nav-bar-group');
  var filterGroupSide = $sideNavItemGroup.attr('data-filter-group');
  sideNavItemFilters[ filterGroupSide ] = $(this).attr('data-filter');
  sideNavItemFilter = concatValues( sideNavItemFilters );
  $cards.isotope();
});

// use value of search field to filter
var $searchBar = $('.search-bar').keyup(function() {
  qsRegex = new RegExp( $searchBar.val(), 'gi' );
  $cards.isotope();
});

function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

/* Open and close the side bar */
function openSideNav() {
  $("#side-nav-bar").toggleClass("hidden");
  $("#side-nav-bar").toggleClass("side-nav-bar");
  $("#cards").toggleClass("cards");
  $("#filter-button").toggleClass("filter-button-active");
  $cards.isotope();
}

function closeSideNav() {
  $("#side-nav-bar").addClass('hidden').siblings().removeClass('side-nav-bar cards');
  $("#filter-button").removeClass("filter-button-active");
  $cards.isotope();
}

$(window).load(function() {
  $cards.isotope();
});

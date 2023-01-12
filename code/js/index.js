
/* Store all the filters for the top nav bar */
var navItemFilters = {};
var navItemFilter;
/* Store all the filters for the side nav bar */
var sideNavItemFilters = {};
var sideNavItemFilter;
/* Search bar regex to store what the user types in the input */
var sbRegex;

/* Init Isotope */
var $cards = $('#cards-container').isotope({
  itemSelector: '.card',
  filter: function() {
    var $this = $(this);
    var searchResult = sbRegex ? $this.text().match( sbRegex ) : true;
    var navItemResult = navItemFilter ? $this.is( navItemFilter ) : true;
    var sideNavItemResult = sideNavItemFilter ? $(this).is( sideNavItemFilter ) : true;
    return searchResult && navItemResult && sideNavItemResult;
  },
});

$('.filters').on( 'click', '.nav-bar-item', function() {
  /* Top Nav Bar change element color to blue when clicked */
  $(this).addClass('nav-bar-item-selected').siblings().removeClass('nav-bar-item-selected'); 
  /* Apply filters */
  var $navItemGroup = $(this).parents('.nav-bar-group');
  var filterGroup = $navItemGroup.attr('data-filter-group');
  navItemFilters[ filterGroup ] = $(this).attr('data-filter');
  navItemFilter = concatValues( navItemFilters );
  $cards.isotope();
});

$('.filters').on( 'click', '.side-nav-bar-item', function() {
  /* Side Nav Bar change element color to blue when clicked */
  $(this).addClass('side-nav-bar-item-selected').siblings().removeClass('side-nav-bar-item-selected'); 
  /* Apply filters */
  var $sideNavItemGroup = $(this).parents('.side-nav-bar-group');
  var filterGroupSide = $sideNavItemGroup.attr('data-filter-group');
  sideNavItemFilters[ filterGroupSide ] = $(this).attr('data-filter');
  sideNavItemFilter = concatValues( sideNavItemFilters );
  $cards.isotope();
});

/* Use value of search bar to filter */
var $searchBar = $('#search-bar').keyup(function() {
  sbRegex = new RegExp( $searchBar.val(), 'gi' );
  $cards.isotope();
});

/* Same search bar function but for the responsive vesion */
var $mobileSearchBar = $('#search-bar-mobile').keyup(function() {
  sbRegex = new RegExp( $mobileSearchBar.val(), 'gi' );
  $cards.isotope();
});

function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}

/* Open and close the side nav bar */
function openSideNav() {
  $("#side-nav-bar").toggleClass("hidden");
  $("#side-nav-bar").toggleClass("side-nav-bar");
  $("#filter-button").toggleClass("filter-button-active");
  $cards.isotope();
}

function closeSideNav() {
  $("#side-nav-bar").addClass('hidden').siblings().removeClass('side-nav-bar');
  $("#filter-button").removeClass("filter-button-active");
  $cards.isotope();
}


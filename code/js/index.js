/* var contents = $('#contents')[0]; //returns a HTML DOM Object */

function openNav() {
    $(".side-nav-bar").toggleClass('is-active');
    //$("#side-nav-bar")[0].style.width = "250px";
}

function closeNav() {
    $("#side-nav-bar")[0].style.width = "0px";
}
//https://stackoverflow.com/questions/47476061/pushing-the-content-without-it-changing-width-when-opening-sidebar
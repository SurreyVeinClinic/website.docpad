new WOW().init();

$(document).ready(function() {
    $("#starting-slider").owlCarousel({
    autoPlay: 3000,
    navigation : false, // Show next and prev buttons
    slideSpeed : 900,
    paginationSpeed : 2000,
    rewindNav: false,
    singleItem:true
    });
});

$( function() {
    // init Isotope
    var $container = $('.isotope').isotope
    ({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
    });
    // bind filter button click
    $('#filters').on( 'click', 'button', function()
    {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    $container.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup )
    {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function()
    {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
    });
    });
});

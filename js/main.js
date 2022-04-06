$(document).ready(function() {
    $('#fullpage').fullpage({      
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        navigationTooltips: ['Brand Story', 'Our Philosophy', 'Brand identity', 'Brand identity', 'Brand identity', 'Sustainability', 'Archives', 'Product'],
        showActiveTooltip: true,
        navigation:true,
        menu: '#myMenu'
    });
});
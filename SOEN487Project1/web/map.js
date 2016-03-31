function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.503168, lng: -73.569747},
        zoom: 11
    });
    markers = [];

    var $businessList = $("<div>");
    var $defaultLocation = "Montreal, QC";
    var $defaultTerm = "dinner";

    $businessList.append("</div>");
    $('#business_div').append($businessList);
}
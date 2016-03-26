function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.503168, lng: -73.569747},
        zoom: 11
    });
    markers = [];

    var $businessList = $("<div>");
    var $defaultLocation = "Montreal, QC";
    var $defaultTerm = "dinner";

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/SOEN487Project1/webresources/yelp",
        dataType: "json",
        success: function (businesses) {
            $businessList.append('<h1><u>Results found for "' + $defaultTerm + '" in ' + $defaultLocation + '</u></h1>');

            $.each(businesses, function (index, business) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(business.location.coordinate.latitude,
                            business.location.coordinate.longitude),
                    map: map,
                    title: business.name
                });

                $businessList.append("<h3>" + business.name + "</h3>" +
                        business.location.display_address + "<br>");
                
                markers.push(marker);
            });
        },
        error: function () {
            alert("Error initializing map");
        }
    });

    $businessList.append("</div>");
    $('#business_div').append($businessList);
}
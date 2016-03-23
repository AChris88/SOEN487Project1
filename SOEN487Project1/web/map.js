function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.503168, lng: -73.569747},
        zoom: 20
    });

    $.ajax({
        method: "GET",
        url: "http://localhost:8080/SOEN487Project1/webresources/yelp",
        dataType: "json",
        success: function (businesses) {
            console.log(businesses);
            $.each(businesses, function (index, business) {
                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(business.location.coordinate.latitude,
                            business.location.coordinate.longitude),
                    map: map,
                    title: business.name
                });
            });
        },
        error: function () {
            alert("init map error");
        }
    });
}
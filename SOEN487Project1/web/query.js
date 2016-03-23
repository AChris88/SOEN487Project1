$(function () {
    $("#goBtn").click(function () {

        var term = $("#term").val();

        // geocode city to set map's center
        var geocoder = new google.maps.Geocoder();
        var location = $("#city").val();
        geocoder.geocode({'address': location}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                map.setCenter(results[0].geometry.location);

                // query businesses with added location and term
                $.ajax({
                    method: "GET",
                    url: "http://localhost:8080/SOEN487Project1/webresources/yelp/" + location + "/" + term,
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
                        alert("Error retrieving query results");
                    }
                });

            } else {
                alert("Could not find location: " + location);
            }
        });




    });
});
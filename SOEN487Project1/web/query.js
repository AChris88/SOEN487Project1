$(function () {
    $("#business_div").hide();
    $("#goBtn").click(function () {

        var term = $("#term").val();
        $("#business_div").html("");
        var $businessList = $("<div>");
        // geocode city to set map's center
        var geocoder = new google.maps.Geocoder();
        var location = $("#city").val();
        geocoder.geocode({'address': location}, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {

                // remove markers
                for (i = 0; i < markers.length; i++) {
                    markers[i].setMap(null);
                }

                map.setCenter(results[0].geometry.location);

                // query businesses with added location and term
                $.ajax({
                    method: "GET",
                    url: "http://localhost:8080/SOEN487Project1/webresources/yelp/" + location + "/" + term,
                    dataType: "json",
                    success: function (businesses) {

                        $businessList.append('<div class="title"><h1>Results found for "' + 
                                term + '" in ' + location + '</h1></div>');

                        $.each(businesses, function (index, business) {
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(business.location.coordinate.latitude,
                                        business.location.coordinate.longitude),
                                map: map,
                                title: business.name
                            });
                            
                            $businessList.append('<ul class="list-group">');

                            $businessList.append('<li class="list-group-item"><div class="businessTitle"><h3>' + business.name + '</h3></div><div  class="businessAddress">' +
                                    business.location.display_address + "</div></li>");

                            markers.push(marker);
                        });
                        
                        $businessList.append('</ul>');



                    },
                    error: function () {
                        alert("No businesses found");
                    }
                });

                $businessList.append("</div>");
                $('#business_div').append($businessList);
                $("#business_div").show();

            } else {
                alert("Could not find location: " + location);
            }
        });
    });
});
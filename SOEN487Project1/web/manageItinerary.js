/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function positionFromAddress(address, title) {
    new google.maps.Geocoder().geocode( { 'address': address}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location,
            title: title,
            icon: 'green_pin.png',
            class: 'itinerary'
        });
        markers.push(marker);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });;
}

$(document).ready(function () {
    $("body").on('click', '.addButton', function(event){
        $("#itinerary").show();
        var businessLi = $(event.target).closest('li');
        var anchor = $(businessLi).find('.add');
        $(anchor).replaceWith('<div  class="remove"><a class="removeButton">Remove</a></div>');
        $(businessLi).remove();
        var address = $(businessLi).find('.businessAddress').html();
        var title = $(businessLi).find('h3').html();
        for(var i = 0; i < markers.length; ++i) {
            if (markers[i]['title'] === title) {
                markers[i].setMap(null);
                markers.splice(i, 1);
                i = markers.length;
            }
        }
        positionFromAddress(address, title);
        
        $("#itinerary_list").append('<li class="list-group-item">' + $(businessLi).html() + '</li>');

    });
    
    $("body").on('click', '.removeButton', function(event){
        
        var itineraryLi = $(event.target).closest('li');
        $(itineraryLi).remove();
        var title = $(itineraryLi).find('h3').html();
        for(var i = 0; i < markers.length; ++i) {
            if (markers[i]['title'] === title && markers[i]['class'] === 'itinerary') {
                markers[i].setMap(null);
                markers.splice(i, 1);
                i = markers.length;
            }
        }
        
        // Check if itinerary list is empty. If so, hide div.
        if ($('#itinerary_list li').length === 0) {
            $("#itinerary").hide();
        }
    });
});
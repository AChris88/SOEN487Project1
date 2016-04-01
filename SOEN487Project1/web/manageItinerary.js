/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("body").on('click', '.addButton', function(event){
        $("#itinerary").show();
        var businessLi = $(event.target).closest('li');
        var anchor = $(businessLi).find('.add');
        $(anchor).replaceWith('<div  class="remove"><a class="removeButton">Remove</a></div>');
        $(businessLi).remove();
        /*marker = new google.maps.Marker({
                                position: new google.maps.LatLng(45.5230253487909,
                                        -73.5950717593209),
                                map: map,
                                title: "ninja"
                            });
        markers.push(marker);*/
        $("#itinerary_list").append('<li class="list-group-item">' + $(businessLi).html() + '</li>');

    });
    
    $("body").on('click', '.removeButton', function(event){
        
        var itineraryLi = $(event.target).closest('li');
        $(itineraryLi).remove();
        
        // Check if itinerary list is empty. If so, hide div.
        if ($('#itinerary_list li').length === 0) {
            $("#itinerary").hide();
        }
    });
});
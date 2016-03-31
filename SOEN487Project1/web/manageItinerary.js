/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function () {
    $("body").on('click', '.addButton', function(){
        var businessLi = $(event.target).closest('li');
        var anchor = $(businessLi).children()[3];
        if (anchor === null) {
            anchor = $(businessLi).children()[2];
        }
        $(anchor).replaceWith('<div  class="remove"><a class="removeButton">Remove</a></div>');
        $(businessLi).remove();
        $("#itinerary_list").append('<li class="list-group-item">' + $(businessLi).html() + '</li>');

    });
    
    $("body").on('click', '.removeButton', function(){
        var itineraryLi = $(event.target).closest('li');
        $(itineraryLi).remove();

    });
});
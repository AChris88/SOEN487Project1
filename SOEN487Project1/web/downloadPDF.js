$(function () {
    $("#downloadPDF_button").click(function () {
        var doc = new jsPDF();

        var specialElementHandlers = {
            '#map': function (element, renderer) {
                return true;
            }
        };
        
        var divToPrint = $('#itinerary').get(0);
        var htmlToPrint = $(divToPrint).clone();
        alert($(divToPrint).html());
        alert($(htmlToPrint).html());
        $(htmlToPrint).find('.remove').remove();
        alert($(htmlToPrint).html());
        doc.fromHTML($(htmlToPrint).html(), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });

        doc.save('itinerary.pdf');
    });
});
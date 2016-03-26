$(function () {
    $("#downloadPDF_button").click(function () {
        var doc = new jsPDF();

        var specialElementHandlers = {
            '#map': function (element, renderer) {
                return true;
            }
        };

        doc.fromHTML($('#business_div').get(0), 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });

        doc.save('itinerary.pdf');
    });
});
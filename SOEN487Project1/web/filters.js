$(function () {

    $("#city").val("Montreal, QC");
    $("#term").val("dinner");

    var availableCities = [
        "Montreal, QC",
        "Vancouver, BC",
        "Ottawa, ON",
        "Toronto, ON",
        "Calgary, AB",
        "Edmonton, AB",
        "Winnipeg, MB",
    ];
    $("#city").autocomplete({
        source: availableCities
    });


    var availableTypes = [
        "restaurants",
        "breakfast",
        "dinner",
        "lunch",
        "snack",
        "bar",
        "clubbing",
        "shopping",
        "food",
        "movies",
        "hair salons"
    ];
    $("#term").autocomplete({
        source: availableTypes
    });
});
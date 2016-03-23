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
        "Halifax, NS",
        "Quebec City, QC",
        "Hamilton, ON",
        "Kitchener, ON",
        "Windsor, ON"
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
        "food"
    ];
    $("#term").autocomplete({
        source: availableTypes
    });
});
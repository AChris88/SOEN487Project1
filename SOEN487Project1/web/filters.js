function Filters(){

    
}

Filters.availableTypes = [
       "Restaurants",
       "Breakfast",
       "Dinner",
       "Lunch",
       "Snack",
       "Bar",
       "Clubbing",
       "Shopping",
       "Food",
       "Movies",
       "Salons"
    ];
        
Filters.availableCities = [
       "Montreal QC",
       "Vancouver BC",
       "Ottawa ON",
       "Toronto ON",
       "Calgary AB",
       "Edmonton AB",
       "Winnipeg MB"
    ];

$(function () {

    $("#city").val("Montreal QC");
    $("#term").val("Dinner");
    
    // typeahead autocomplete
    var substringMatcher = function(strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };
    
    $('#availableCities .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'availableCities',
        source: substringMatcher(availableCities)
    });

    $('#availableTypes .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
    {
        name: 'availableTypes',
        source: substringMatcher(availableTypes)
    });
    
});
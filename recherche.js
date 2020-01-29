var ps = false;
var pl = false;
$("#personne").click(function() {
    ps = true;
    pl = false;
});
$("#planetb").click(function() {
    ps = false;
    pl = true;
});
$("#recherchetext").keyup(function() {
    if (ps) {
        recherchepersonne($("#recherchetext").val())

    } else { rechercheplanet($("#recherchetext").val()); }

});

function rechercheplanet(x) {
    $("tbody").empty();

    $.get({
        url: "https://swapi.co/api/planets/?name=" + x,
        data: {},
        success: function(data) {
            charger(data);

        },
        dataType: "json"
    })
}

function charger(data) {

    $("tbody").empty();


    data.results.forEach(element => {


        var l = $("<tr></tr>");
        var nom = $("<td></td>").text(element["name"]);
        l.append(nom);
        $("tbody").append(l);

    });



}

function recherchepersonne(y) {
    $("tbody").empty();

    $.get({
        url: "https://swapi.co/api/people/?name=" + y,
        data: {},
        success: function(data) {
            charger(data);

        },
        dataType: "json"
    })
}
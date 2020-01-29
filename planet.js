planets("https://swapi.co/api/planets/");

function planets(adr) {
    $("tbody").empty();

    $.get({
        url: adr,
        data: {},
        success: function(data) {
            chargerplanet(data);

        },
        dataType: "json"
    })
}

function chargerplanet(data) {

    $("tbody").empty();
    $("#next").click(function() {
        planets(data.next);
    });
    $("#Previous").click(function() {
        if (data.previous != null) {
            planets(data.previous);
        }


    });

    data.results.forEach(element => {


            var l = $("<tr></tr>");
            var nom = $("<td></td>").text(element["name"]);
            nom.on("click", function() {

                detailleplanet(element["url"]);

            });
            l.append(nom);

            $("tbody").append(l);
        }

    );
}
$(".card").hide();

function detailleplanet(url1) {
    $(".card").show();
    $.get({
        url: url1,
        data: {},
        success: function(data) {

            $("#nom").text("Nom : " + data.name);
            $("#population").text("Taille : " + data.population);
            data.residents.forEach(element => {
                residentplanet(element);
                alert(element);

            });

        },
        dataType: "json"
    })
}

function residentplanet(url_planet) {


    $.get({
        url: url_planet,
        data: {},
        success: function(data) {
            var nom = $("<li></li>").text(data.name);
            $("#nbrp").append(nom);

        },
        dataType: "json"
    })
}
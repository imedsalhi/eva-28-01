 welcome("https://swapi.co/api/people/");

 function welcome(adresse) {
     $("tbody").empty();

     $.get({
         url: adresse,
         data: {},
         success: function(data) {
             charger(data);

         },
         dataType: "json"
     })
 }

 function charger(data) {

     $("tbody").empty();
     $("#next").click(function() {
         welcome(data.next);
     });
     $("#Previous").click(function() {
         if (data.previous != null) {
             welcome(data.previous);
         }


     });

     data.results.forEach(element => {


             var l = $("<tr></tr>");
             var nom = $("<td></td>").text(element["name"]);
             nom.on("click", function() {
                 detaille(element["url"]);

             });
             l.append(nom);

             $("tbody").append(l);
         }

     );



 }
 $(".card").hide();

 function detaille(url1) {
     $(".card").show();
     $.get({
         url: url1,
         data: {},
         success: function(data) {

             $("#nom").text("Nom : " + data.name);
             $("#taille").text("Taille : " + data.height);
             $("#poids").text("Poids : " + data.mass);
             $("#couleur").text("Couleur cheveux : " + data.hair_color);

         },
         dataType: "json"
     })
 }
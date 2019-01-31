/*
Nom :
Prenom :
Machine :
 */
var imageFolder = "./images/tuxs/";

$(document).ready(
		function() {
			// normalement réalisé en ajax mais réalisé ici en File
			var nb = 11;
			var images = new Object();
			var nom;
			var image;
			var i;
			for (i = 0; i < nb; i++) {
				image = new Image();
				if (i < 10) {
					nom = "tux0" + i + ".png";
				} else {
					nom = "tux" + i + ".png";
				}
				image.src = imageFolder + "small/" + nom;
				images[nom] = image;

			}

			// images est un tableau associatif qui a tux00.png associe l'image
			// de
			// source :
			// file:///Z:/workspace/INF350_programmation_examen_sujet1_Nom_Prenom/www/images/tuxs/small/tux00.png
			// (exemple de chemin physique)
			// et ainsi de suite.

			// Votre travail commence ici.
			// à compléter
			var divimg = $("#mesimages");
			console.log(images);
			$("#mesImages").after($(document.createElement("ul")));
			for (i = 0; i < nb; i++) {
				if (i < 10) {
					nom = "tux0" + i + ".png";
				} else {
					nom = "tux" + i + ".png";
				}
				$("ul").append(
						$(document.createElement("li")).append(
								$(document.createElement("a")).attr({
									href : imageFolder + "big/" + nom
									

								}).append(
										$(images[nom]))).css({
											display:"inline"
											})
										
										);

			}
			
			$("ul").after($(document.createElement("p")).attr({id:"viewer"}).append($(document.createElement("img")).attr({
				src: imageFolder + "big/tux00.png"
				})));
			$("a").click(function(e){
		
		e.preventDefault();
		var b= $(this).attr('href');
		console.log(b);
		$("#viewer>img").attr({
			src: $(this).attr('href')
		});
	});
			
		});
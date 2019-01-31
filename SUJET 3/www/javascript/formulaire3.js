/*
 * Nom :
 * Prénom :
 * Groupe TP :
 * Numéro de machine :
 * 
 */
$.validator.setDefaults({
	highlight : function(input) {
		$(input).addClass("ui-state-highlight");
	},
	unhighlight : function(input) {
		$(input).removeClass("ui-state-highlight");
	}
});

$(document).ready(function() {
	// à compléter
	$("#form3").validate({
		rules : {
			identifiant : {
				required : true,
				
			},
			numero : {
				required : true,
				number:true,
				minlength:8,
				maxlength:8
				
			},
			
			adressemail:{
				required:true,
				email:true
			},
			confirmadressemail:{
				required : true,
				equalTo: "#adressemail"
				
			},
			aeroport:{
				required:true
			},
			repas:{
				required:true
			}
			

		},
		messages : {
			identifiant : {
				required : "Nom obligatoire ",
				
			},
			numero : {
				required : "Veuillez entrer un numéro ",
				number:"Veuillez saisir un nombre de 8 chiffres",
				minlength:"8 chiffres au minimum ",
				maxlength:"8 chiffres au maximum "
				
			},
			
			adressemail:{
				required:"Veuillez entrer votre email  ",
				email:"Veuillez saisir une adresse mail correcte "
			},
			confirmadressemail:{
				required:"Veuillez entrer la confirmation de votre email",
				equalTo :"Confirmation incorrecte "
			},
			aeroport:{
				required:"Veuillez sélectionner un aéroport  "
			},
			repas:{
				required:"Veuillez sélectionner un repas "
			}
			}
		}
	);

	
});
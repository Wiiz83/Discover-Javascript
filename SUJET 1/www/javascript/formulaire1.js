/*
 * Nom :
 * Pr�nom :
 * Groupe TP :
 * Num�ro de machine :
 * 
 */

//ceci c'est moi qui l'ai rajout� sinon �a ne marchait pas j'pense que �a correspond a peu pres au 2.3 un peu d'aide
$.validator.setDefaults({
	highlight : function(input) {
		$(input).addClass("ui-state-highlight");
	},
	unhighlight : function(input) {
		$(input).removeClass("ui-state-highlight");
	}
});

$(document).ready(function() {
	// � compl�ter
	$("#form1").validate({
		rules : {
			login : {
				required : true,
				minlength : 5,
				maxlength : 5
			},
			motpasse : {
				required : true
			},
			confirmmotpasse :{
				required:true,
				equalTo: "#motpasse"
			},
			email:{
				required:true,
				email:true
			},
			preferences:{
				required : true,
			},
			conditions:{
				required:true
			}
			

		},
		messages : {
			login : {
				required : "login obligatoire",
				minlength : "entrez 5 carac",
				maxlength : "entrez 5 carac"
			},
			motpasse : {
				required : "mdp obli"
			},
			confirmmotpasse :{
				required : "mdp obli",
				equalTo:"veuillez entrez meme"
			},
			email:{
				required:"entrez mail",
				email:"valid"
			},
			preferences:{
				required:"Veuillez pr�ciser vos pr�f�rences"
			},
			conditions:{
				required:"Veuillez valider les conditions d'utilisation "
			}
			}
		}
	);

});
/*
 * Nom :
 * Prénom :
 * Groupe TP :
 * Numéro de machine :
 * 
 */

$(document).ready(function() {
	// à compléter
	

	
	$("a").click(function(e){
		e.preventDefault();
		$( this ).remove();
		var compteur=$("a").length;
		$("#viewer").text(compteur);
	});
	

	
});

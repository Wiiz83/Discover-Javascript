/*
 * Nom :
 * Pr�nom :
 * Groupe TP :
 * Num�ro de machine :
 * 
 */

$(document).ready(function() {
	// � compl�ter
	

	
	$("a").click(function(e){
		e.preventDefault();
		$( this ).remove();
		var compteur=$("a").length;
		$("#viewer").text(compteur);
	});
	

	
});

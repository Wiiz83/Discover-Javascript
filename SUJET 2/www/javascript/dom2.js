/*
 * Nom :
 * Prénom :
 * Groupe TP :
 * Numéro de machine :
 * 
 */

//DOM 2

$(document).ready(function() {
	// à compléter
	
	
	$("a").click(function(e){
		
		e.preventDefault();
		var b= $(this).attr('href');
		console.log(b);
		$("#viewer>img").attr({
			src: $(this).attr('href')
		});
	});
	

	
});

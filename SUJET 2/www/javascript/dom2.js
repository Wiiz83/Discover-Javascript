/*
 * Nom :
 * Pr�nom :
 * Groupe TP :
 * Num�ro de machine :
 * 
 */

//DOM 2

$(document).ready(function() {
	// � compl�ter
	
	
	$("a").click(function(e){
		
		e.preventDefault();
		var b= $(this).attr('href');
		console.log(b);
		$("#viewer>img").attr({
			src: $(this).attr('href')
		});
	});
	

	
});

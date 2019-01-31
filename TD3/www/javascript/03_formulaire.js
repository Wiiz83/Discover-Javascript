$(document).ready(function() {

	$("#form3").validate({

		rules : {

			pays : {
				required : true,

			},
			
			"matieres[]" : {
				required : true,
				minlength: 2

			}
		},
		messages : {
			
		},
		ignore: ".ignore "


	});
	$("select").multiselect({

	});

});
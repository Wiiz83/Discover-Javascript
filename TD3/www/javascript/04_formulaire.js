$.validator.setDefaults({
	highlight : function(input) {
		$(input).addClass("ui-state-highlight");
	},
	unhighlight : function(input) {
		$(input).removeClass("ui-state-highlight");
	}
});

$(document).ready(function() {
	
	
	
	
	$("textarea").markItUp(mySettings);
	$("#date").datepicker();
	$("#form4").validate({
		rules : {
			login : {
				pageRequired : true,
				minlength : 6
			},
			email : {
				pageRequired : true,
				email : true
			},
			url : {
				pageRequired : true,
				url : true
			},
			date : {
				pageRequired : true,
				date : true
			},
			agree : {
				pageRequired : true
			},

			pays : {
				pageRequired : true,

			},

			"matieres[]" : {
				pageRequired : true,
				minlength : 2

			},

		},
		messages : {
			login : {
				pageRequired : "entrez votre login",
				minlength : "au moins 6 caractere"
			},
			email : {
				pageRequired : "entrez votre email",
				email : "valide"
			},
			url : {
				pageRequired : "email",
				url : "valid"
			},
			date : {
				pageRequired : "date",
				date : "valid"
			},
			agree : {
				pageRequired : "important mec"
			}
		},
		ignore : ".ignore "
	});
	$("select").multiselect({

	});
	


	// add * to required field labels
	$('label.required').append('&nbsp;<strong>*</strong>&nbsp;');

	// accordion functions
	var accordion = $("#accordion").accordion();
	var current = 0;

	$.validator.addMethod("pageRequired", function(value, element) {
		
		function match(index) {
			return current == index && $(element).parents("#page" + (index + 1)).length;
		}
		if (match(0) || match(1)) {
			return !this.optional(element);
		}
		return "dependency-mismatch";
	}, $.validator.messages.required);

	var v = $("#form4").validate({
		errorClass: "warning",
		onkeyup: false,
		onblur: false,
		submitHandler: function() {
			alert("Submitted, thanks!");
		}
	});

	// back buttons do not need to run validation
	$("#page2 .prev").click(function(){
		accordion.accordion("option", "active", 0);
		current = 0;
	});
	
	// these buttons all run the validation, overridden by specific targets above
	
	$(".next").click(function() {
	  if (v.form()) {
	    accordion.accordion("option", "active", 1);
	    current = 1;
	  }
	});
	
	

});

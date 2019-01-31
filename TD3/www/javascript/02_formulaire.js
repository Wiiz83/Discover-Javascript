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
	$( "#date" ).datepicker();
	$( "#form2" ).validate({
		  rules: {
		    login :  {
		        required: true,
		        minlength: 6
		      },
		    email : {
		        required: true,
		        email: true
		      },
		    url: {
		        required: true,
		        url: true
		      },
		    date : {
		        required: true,
		        date: true
		      },
		    agree: {
		          required: true
		        }
		    	
		  },
		  messages: {
			  login :  {
			        required: "entrez votre login",
			        minlength: "au moins 6 caractere"
			      },
			    email : {
			        required: "entrez votre email",
			        email: "valide"
			      },
			    url: {
			        required: "email",
			        url: "valid"
			      },
			    date : {
			        required: "date",
			        date: "valid"
			      },
			    agree: {
			          required: "important mec"
			        }
		  }
	});
	
});
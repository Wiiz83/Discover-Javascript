$.validator.setDefaults({
	highlight : function(input) {
		$(input).addClass("ui-state-highlight");
	},
	unhighlight : function(input) {
		$(input).removeClass("ui-state-highlight");
	}
});

$(document).ready(function() {
	$("#form5").validate({

		rules : {

			login : {
				required : true,
				remote: "logins.php"

			},
			
			password : {
				required : true,
				
			},
			password_confirm :{
				 equalTo: "#password"
				
				
			},
			cp:{
				required : true
			},
			ville : {
				required : true
			}
			
		},
		messages :{
			login :{
				required: "Enter a username",
				minlength: jQuery.format("Enter at least {0} characters"),
				remote: jQuery.format("{0} is already in use")
			}
		}
	
});
	
	$(function() {
	   
	    $( "#cp" ).autocomplete({
	      source: 'cps.php'
	    });
	  });
	
	
	
});
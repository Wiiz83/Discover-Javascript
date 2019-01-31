$(document).ready(function() {

	$( "#form1" ).validate({
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

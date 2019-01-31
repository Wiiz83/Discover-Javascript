$(document).ready(function() {
	$( "#dialog" ).dialog({ 
		autoOpen: false,
	});
	
	$("#a").click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$( "#dialog" ).dialog({ 
			buttons: {
			        "Confirm": function() {
			          console.log(target);
			          window.location = target;
			        },
			        Cancel: function() {
			          $( this ).dialog( "close" );
			        }
			}
		});		
		
		$( "#dialog" ).dialog("open" );
	});

});
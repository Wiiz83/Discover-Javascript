$(document).ready(function() {
	$( "#d1" ).draggable({ containment: "#main", scroll: false });
	$("#d1").resizable();
	$( "#d2" ).draggable({ axis: "y" , containment: "#main", scroll: false  });

	$( "#d3" ).droppable({
		over: function(event,ui) {
			console.log(ui.draggable);
			console.log(event.type);
			$(ui.draggable)
			.addClass("colorDropped");
		}
	});
	$( "#d3" ).droppable({
		out: function(event,ui){
			$(ui.draggable)
			.removeClass("colorDropped");
		}
	});

});
$(document).ready(function() {
	var li =$("li").lenght;
	console.log(li);
	var li1 =$("ul:first>li");
	console.log(li1);
	var form=$("form>fieldset:last-child>input").attr('value');
	console.log(form);
	var a=$("form>fieldset>input:submit");
	console.log(a);
	$(".red").addClass('jaune');
	$(".red").removeClass('red');
	$(".etat-civil>label").addClass('red');
	
	$("ul:last>li:last").after($(document.createElement("li")).text('Item 7'));
	
	
	var reset =$(document.createElement("input")).attr({
		type:"reset",
		value:"effacer"
	});
	
	$("form>fieldset:last-child>input").after(reset);
	
	$("#lien1>a").click(function(e) {
		e.preventDefault();
		$("#lien1>a").text('nouveau texte');
	});
	
	$("form>fieldset>input:submit").click(function(e)	{
		e.preventDefault();
		alert('lol');
	});
	
	
});
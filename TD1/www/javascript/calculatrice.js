function gererChiffre() {
	var t = document.getElementById('affiche') ;
	t.value =0 ;
	return t;
}

function afficheChiffre(value) {
	var t = document.getElementById('affiche') ;

	if (t.value==0) {
		t.value =value ;
	}
	else {
		t.value=t.value+value;
	}

	return t;
}

var tmp;
var op='';

function gererOperateur(value) {
	tmp = document.getElementById('affiche').value ;
	op=value;

	console.log(op);
	var p = document.getElementById('affiche') ;
	p.value=0;
	return 'p';

}

function gererresultat() {
	var t = document.getElementById('affiche').value ;
	var res = document.getElementById('affiche');
	console.log(tmp);
	console.log(t);

	var res = document.getElementById('affiche') ;
	if (op=='+'){
		res.value=parseFloat(tmp)+parseFloat(t);	
	}
	else if (op=='-') {
		res.value=parseFloat(tmp-t);
	}
	else if (op=='*') {
		res.value=parseFloat(tmp*t);
	}
	else if (op='/') {
		res.value=parseFloat(tmp/t);
	}
	

	return res;

}

function gererVirgule(){
	var t = document.getElementById('affiche');
	t.value=t.value*0.1;
	console.log(t);
	return t;
}
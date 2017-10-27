
//sumatoria(12,6);
//sumatoria(6,45);
var igv;
igv=calcular_igv(100);

si igv>1000{
	tienes que pagar
}
si no{
	no tienes que pagar
}


// función con parametros
function sumatoria(num1,num2){
console.log(num1+num2);
}

// función con parametros
function imprimir(valor){
	console.log(valor);
}
// función sin parametros
function verhora(){
	var fecha=new Date();
	console.log(fecha);
}

/*
función con retorno
*/

function calcular_igv(monto){
	var igv=monto*0.18;
	return igv;
}

function limpiarInput(){
	input.clear="";
}

/*
función sin retorno
*/
var btn_calcular;
btn_calcular=document.getElementById('calcular');

btn_calcular.addEventListener("click",cambioDolar)
function cambioDolar(){
	var inp_dolares;
	inp_dolares=document.getElementById('dolares');
	var valor_ingresado=inp_dolares.value;
	var resultado;
	resultado=valor_ingresado*3.26;
	
	var resultadohtml;
	resultadohtml=document.getElementById('resultado');
	resultadohtml.innerHTML="El cambio a soles es : S/."+resultado;	
}

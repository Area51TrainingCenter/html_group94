var ele_cambiar;

ele_cambiar=document.getElementById('cambiar');

ele_cambiar.addEventListener("mouseenter",cambiarTexto);


function cambiarTexto(){
	var elemento1;
	elemento1=document.getElementById('titulo');
	elemento1.innerHTML="BIENVENIDO AL MUNDO DE JS";
}

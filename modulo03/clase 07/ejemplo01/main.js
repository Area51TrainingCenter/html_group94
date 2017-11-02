$(window).ready(function(){

	$("#inpnombre").keyup(function(){
		//console.log("presionando la tecla");
		var textousuario=$("#inpnombre").val();
		
		if($.trim(textousuario)==""){
			//console.log("caja vacia");
			$("#enviar").attr("disabled",true);
		}
		else{
			$("#enviar").attr("disabled",false);
			//console.log("caja llena");	
		}
	})

	$("#inpcorreo").keyup(function(){
			var correo=$("#inpcorreo").val();
			var letras=correo.split("");
			var arroba=letras.indexOf("@");
			var punto=letras.indexOf(".");
			if(arroba==-1 || punto==-1){
				console.log("ingresa un correo valido")
			}
			else{
				console.log("haz ingresado un correo");
			}

				/*for(var i=0;i<letras.length;i++){
				//console.log(letras[i]);
				if(letras[i]=="@"){
					console.log("existe el arroba")
				}
			}*/

			})


})
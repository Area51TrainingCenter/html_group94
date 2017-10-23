
alert("Bienvenido a la 3era clase");
var n1,n2,n3;
n1=prompt("ingresa un primer valor");
n2=prompt("ingresa un segundo valor");
n3=prompt("ingresa un tercer valor");
confirm("esta seguro de continuar");

var num1,num2,num3;
num1=parseInt(n1);
num2=parseInt(n2);
num3=parseInt(n3);

var res;
res=calculo(num1,num2,num3);

console.log(res);


function calculo(valor1,varlo2,valor3){
	var resultado;
	resultado=valor1+varlo2+valor3;
	return resultado;
}
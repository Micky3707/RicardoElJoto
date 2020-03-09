//Validar solo numeros positivos, negativos y con decimal
function validarn(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado==8)return true;
	var expresion = /[0-9\d.-]/
	var tec = String.fromCharCode(teclado);
	return expresion.test(tec);
}
//Validar solo numeros enteros positivos
function validarne(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if (teclado==8)return true;
	var expresion = /[0-9\d]/
	var tec = String.fromCharCode(teclado);
	return expresion.test(tec);
}
//Validar solo numeros positivos con decimal
function validarnd(e){
	var teclado = (document.all)?e.keyCode:e.which;
	if(teclado==8)return true;
	var expresion = /[0-9\d.]/
	var tec = String.fromCharCode(teclado);
	return expresion.test(tec);
}
//Primer Problema
function operaciones(){
	var num1 = document.Formulario1.num1.value;
	var num2 = document.Formulario1.num2.value;
	try{
		var n1 = parseFloat(num1);
		var n2 = parseFloat(num2);
		//Evaluar is el valor n1 is Not a Number NaN
		if (Number.isNaN(n1) || Number.isNaN(n2)) {
			throw alert("Ño es un numero");
		}else if((n1<(-(2**53-1)) || n1>2**53-1) || (n2<(-(2**53-1)) || n2>2**53-1)){
			throw alert("El limite es +2^53-1 y -2^53-1");	
		}else{
		//Comparar los numeros	
		if (n1==n2) {
			var resul = n1*n2;
			var op = "Multiplicacion";
		}else if(n1>n2){
			var resul = n1-n2;
			var op = "Resta";
		}else{
			var resul = n1+n2;
			var op = "Suma";
		}
		//Enviar resultados a la tabla
		document.Formulario1.oper.value = op;
		document.Formulario1.resul.value = resul;	
		}
	}catch(e){
		alert("Tipo de error "+e);
	}
}
//Segundo Problema
function compararn(){
	var num1 = document.Formulario2.num1.value;
	var num2 = document.Formulario2.num2.value;
	var num3 = document.Formulario2.num3.value;
	try{
		var n1 = parseFloat(num1);
		var n2 = parseFloat(num2);
		var n3 = parseFloat(num3);
		//Evaluar is el valor n1 is Not a Number NaN
		if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3)) {
			throw alert("Ño es un numero");
		}else if((n1<(-(2**53-1)) || n1>2**53-1) || (n2<(-(2**53-1)) || n2>2**53-1) || (n3<(-(2**53-1)) || n3>2**53-1)){
			throw alert("El limite es +2^53-1 y -2^53-1");	
		}else{
			//Comparar los numeros	
			if (n1>n2 && n1>n3) {
				document.Formulario2.mayor.value = n1;
			}else if(n2>n1 && n2>n3){
				document.Formulario2.mayor.value = n2;
			}else if(n3>n1 && n3>n2){
				document.Formulario2.mayor.value = n3;
			}else if(n1==n2 && n1>n3){
				document.Formulario2.mayor.value = n1+" y "+n2;
			}else if(n1==n3 && n1>n2){
				document.Formulario2.mayor.value = n1+ " y "+n3;
			}else if(n2==n3 && n2>n1){
				document.Formulario2.mayor.value = n2+" y "+n3;
			}
		}
	}catch(e){
		alert("Tipo de error "+e);
	}
}
//Tercer problema
function pago(){
	var sb = document.Formulario3.sueldob.value; //sueldo base
	var h = document.Formulario3.horas.value; //Horas
	try{
		var sueldob = parseFloat(sb);
		var horas = parseInt(h);
		//Evaluar is el valor n1 is Not a Number NaN
		if (Number.isNaN(sueldob) || Number.isNaN(horas)) {
			throw alert("Ño es un numero");
		//Evaluar los limites
		}else if( (sueldob<120 || sueldob>1000) || (horas<30 || horas>60) ){
			throw alert("El limite en el sueldo es min 120 y max 1000 \n"+
				"El limite en las hora por semana es min 30 y max 60 ");
		}else{
			//Operaciones
			if (horas <= 40){
				var sueldon = horas*sueldob;
				document.Formulario3.horasn.value = "$ "+sueldon;
				document.Formulario3.horase.value = "$ "+0;
				document.Formulario3.total.value = "$ "+sueldon;
			}else if(horas > 40 && horas <= 48){
				var sueldon = 40*sueldob;
				var horase = horas-40;
				var sueldoe = horase*2*sueldob;
				var total = sueldon+sueldoe;
				document.Formulario3.horasn.value = "$ "+sueldon;
				document.Formulario3.horase.value = "$ "+sueldoe;
				document.Formulario3.total.value = "$ "+total;
			}else if(horas > 48){
				alert("Holi"+horas);
				var sueldon = 80*sueldob;
				var horase = horas-40;
				var sueldoe = horase*3*sueldob;
				var total = sueldon+sueldoe;
				document.Formulario3.horasn.value = "$ "+sueldon;
				document.Formulario3.horase.value = "$ "+sueldoe;
				document.Formulario3.total.value = "$ "+total;
			}
		}
	}catch(e){
		alert("Tipo de error "+e);
	}
}
//Cuarto Problema 
function utilidad(){
	var s = document.Formulario4.sueldom.value;
	var t = document.Formulario4.tiempo.value;
	try{
		var sueldo = parseFloat(s);
		var tiempo = parseFloat(t);
		//Evaluar is el valor n1 is Not a Number NaN
		if (Number.isNaN(sueldo) || Number.isNaN(tiempo)) {
			throw alert("Ño es un numero");
		//Evaluar los limites
		}else if( (sueldo<4000 || sueldo>1000000) || (tiempo<=0.5 || tiempo>60) ){
			throw alert("El limite en el sueldo es min 4000 y max 100000 \n"+
				"El limite en el tiempo por años es min 0.5 y max 60 ");
		}else{
			//Operaciones
			if(tiempo<1){
				var utilidad = sueldo*0.05;
				document.Formulario4.utip.value = " 5%";
				document.Formulario4.uti.value = "$ "+utilidad;
			}else if(tiempo >= 1 && tiempo < 2){
				var utilidad = sueldo*0.07;
				document.Formulario4.utip.value = " 7%";
				document.Formulario4.uti.value = "$ "+utilidad;
			}else if(tiempo >= 2 && tiempo < 5){
				var utilidad = sueldo*0.1;
				document.Formulario4.utip.value = " 10%";
				document.Formulario4.uti.value = "$ "+utilidad;
			}else if(tiempo >= 5 && tiempo < 10){
				var utilidad = sueldo*0.15;
				document.Formulario4.utip.value = " 15%";
				document.Formulario4.uti.value = "$ "+utilidad;
			}else  if(tiempo >= 10){
				var utilidad = sueldo*0.20;
				document.Formulario4.utip.value = " 20%";
				document.Formulario4.uti.value = "$ "+utilidad;
			}
		}
	}catch(e){
		alert("Tipo de error "+e);
	}
}
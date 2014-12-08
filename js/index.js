"use strict"
$(document).ready (function(){
	var indx1=0;
	var indx2=0;
	var indx3=0;
	var paises = ["Selecciona un país","Argentina", "Brasil", "Chile", "Colombia", "México", "Venezuela"];

	var estados =[[],["Selecciona uno","Buenos Aires", "Córdoba"],
	["Selecciona uno","Río de Janeiro", "Paraná"],
	["Selecciona uno","Santiago", "Viña del Mar"],
	["Selecciona uno","Bogotá", "Medellin"],
	["Selecciona uno","DF", "Jalisco"],
	["Selecciona uno","Caracas", "Maracaibo"]];

	var ciudades =[[],[[],["Selecciona ciudad", "Argentina Cd1", "Argentina Cd2", "Argentina Cd3", "Argentina Cd4"],
	["Selecciona ciudad", "Argentina Cd1 E2", "Argentina Cd2 E2", "Argentina Cd3 E2", "Argentina Cd4 E2"]],
	[[],["Selecciona ciudad", "Brasil Cd1", "Brasil Cd2", "Brasil Cd3", "Brasil Cd4"],
	["Selecciona ciudad", "Brasil Cd1 E2", "Brasil Cd2 E2", "Brasil Cd3 E2", "Brasil Cd4 E2"]],
	[[],["Selecciona ciudad", "Chile Cd1", "Chile Cd2", "Chile Cd3", "Chile Cd4"],
	["Selecciona ciudad", "Chile Cd1 E2", "Chile Cd2 E2", "Chile Cd3 E2", "Chile Cd4 E2"]],
	[[],["Selecciona ciudad", "Colombia Cd1", "Colombia Cd2", "Colombia Cd3", "Colombia Cd4"],
	["Selecciona ciudad", "Colombia Cd1 E2", "Colombia Cd2 E2", "Colombia Cd3 E2", "Colombia Cd4 E2"]],
	[[],["Selecciona ciudad", "México Cd1", "México Cd2", "México Cd3", "México Cd4"],
	["Selecciona ciudad", "México Cd1 E2", "México Cd2 E2", "México Cd3 E2", "México Cd4 E2"]],
	[[],["Selecciona ciudad", "Venezuela Cd1", "Venezuela Cd2", "Venezuela Cd3", "Venezuela Cd4"],
	["Selecciona ciudad", "Venezuela Cd1 E2", "Venezuela Cd2 E2", "Venezuela Cd3 E2", "Venezuela Cd4 E2"]]];
	
	
	
	for (var i = paises.length - 1; i >= 0; i--) {
		document.selecciona.pais.options[i]=new Option(paises[i], paises[i]);
	};

	
	// Cuando seleccionas país 
	$("#pais").on("change",function(){
		limpia();
		indx1, indx2, indx3 = 0;
		var valor = $(this).val();
		indx1 = paises.indexOf(valor);
		//console.log (indx1);
		if (indx1 == 0){

		} else {
			for (var i = estados[indx1].length - 1; i >= 0; i--) {
				document.selecciona.estados.options[i]=new Option(estados[indx1][i], estados[indx1][i]);
			};
			
		}
		
	})
	// Cuando seleccionas estado
	$("#estado").on("change",function(){
		var valor = $(this).val();
		indx2 = (estados[indx1]).indexOf(valor);
		//console.log (indx2 + " indx2    " + valor + "  valor   "+ indx1 +  "   indx1");
		//console.log (ciudades[indx1][indx2])
		if (indx2 == 0){

		} else {
			for (var i = ciudades[indx1][indx2].length - 1; i >= 0; i--) {
				document.selecciona.ciudad.options[i]=new Option(ciudades[indx1][indx2][i], ciudades[indx1][indx2][i]);
			};
		}
		
	})

	// Cuando seleccionas ciudad 
	$("#ciudad").on ("change",function (){
		var valor = $(this).val();
		indx3 = (ciudades[indx1][indx2]).indexOf(valor);
	});

	/*function registro(){
		console.log ("kdkkklsd");
		return registro;
	};*/

	$("#forma").on ("submit",function(e){
		e.preventDefault();
		if (indx1 != 0 && indx2 != 0 && indx3 != 0){
			var tabla = document.getElementById("tabla");
			var row = tabla.insertRow(-1);
			var cell0 = row.insertCell(0);
			var cell1 = row.insertCell(1);
			var cell2 = row.insertCell(2);
			var cell3 = row.insertCell(3);
			var cell4 = row.insertCell(4);	
			cell4.id = "cel4" + document.getElementById("tabla").rows.length
			cell0.innerHTML = paises[indx1];
			cell1.innerHTML = estados[indx1][indx2];
			cell2.innerHTML = ciudades[indx1][indx2][indx3];
			cell3.innerHTML = $("#colonia").val();
			var radio = document.createElement("INPUT");
			radio.setAttribute("type", "checkbox");
			radio.id = "radio" + document.getElementById("tabla").rows.length;
			$("#cel4" + document.getElementById("tabla").rows.length).append(radio);
			
		}else{
			alert ("Por favor llena todos los campos")
		}
		
	});

	function reasignaID(selected){
		console.log (selected);
		for (var i = document.getElementById("tabla").rows.length; i >= 2; i--) {
				console.log (i + "  i")
				console.log ("#radio" + selected[i-2] + "  a este ")
				$("#radio" + selected[i-2]).attr("id","radio"+i);
			};
			console.log(tabla);
	}

	$("#delete").on ("submit",function(e){
		e.preventDefault();
		var selected=[];
		console.log(document.getElementById("tabla").rows.length  + "  largo")
		for (var i = document.getElementById("tabla").rows.length ; i >= 2; i--) {
			if ($('#radio'+i).is(':checked')){
				document.getElementById("tabla").deleteRow(i -1);
			} else {
				selected.push(i);
				
			}

		};
		console.log (selected + " selected")
		reasignaID(selected);

	});

	
	function limpia(){
		for (var i = estados[indx1].length - 1; i >= 0; i--) {
				document.selecciona.estados.options[i]=null;
			};
			//console.log (ciudades[indx1]);
		//for (var i = ciudades[indx1][indx2].length - 1; i >= 0; i--) {
		//		document.selecciona.ciudad.options[i]=null;
		//	};
	};

}) ;



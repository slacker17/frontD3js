/*
 * Archivo que inializa componentes y datos en el DOM
 * De aqui parte el contenido principal (graficas) que se muestra al usuario final
 * Autor: Valentin Aguila Fernandez
 *
 */ 

$( document ).ready(function() {
  // Inicializamos datos	
  let data = {
    	"element" : [
    		{
        		"datacircle" : {
            		"a": 60, 
            		"b": 40
        		},
        		"datalines": [1, 4, 5, 9, 10, 14, 15, 15, 11, 10, 5, 5, 4, 8] ,
        		"subject" : {
            		"titulo": "REVENUE", 
         			"cantidadTotal": "20000000€",
         			"descripcionProd1": "Tablet",
         			"porcentajeProd1": 60,
         			"cantidadProd1": "120000€",
         			"descripcionProd2": "Smartphone",
         			"porcentajeProd2": 40,
         			"cantidadProd2": "80000€",
        		},
        		"colores" : ["#65C400" , "#ec7a08"]
    		},
    		{
        		"datacircle" : {
            		"a": 30, 
            		"b": 60
        		},
        
        		"datalines": [10, 8, 9, 1, 3, 6, 2, 5, 6, 10, 17, 19, 12, 6] ,
        		"subject" : {
            		"titulo": "IMPRESIONS", 
         			"cantidadTotal": 20000000,
         			"descripcionProd1": "Tablet",
         			"porcentajeProd1": 30,
         			"cantidadProd1": 120000,
         			"descripcionProd2": "Smartphone",
         			"porcentajeProd2": 60,
         			"cantidadProd2": 80000,
        		},
        		"colores" : ["#0899ec" , "#9608ec"]
    		},
    		{
        		"datacircle" : {
            		"a": 10, 
            		"b": 90
        		},
        
        		"datalines": [10, 16, 15, 23, 45, 32, 21, 10, 5, 1, 3, 2, 6, 1] ,
        		"subject" : {
            		"titulo": "VISITS",
         			"cantidadTotal": 20000000,
         			"descripcionProd1": "Tablet",
         			"porcentajeProd1": 10,
         			"cantidadProd1": 120000,
         			"descripcionProd2": "Smartphone",
         			"porcentajeProd2": 90,
         			"cantidadProd2": 80000, 
        		},
        		"colores" : ["#ec08ec" , "#ec0843"]
    		}
    	]
 }

 // Pintamos datos (se puede pasar mas de uno para mostrarlo mas veces)
 generarDatos(1, data);

});

// Funcion que inserta los datos en el DOM
function generarDatos(numIteraciones, data){
	var cont = 1;
	for(i=1;i<=numIteraciones;i++){
  		$.each( data.element, function( key, val ) {
  			console.log(val);
  			id = "content"+cont;
  			$("#content").append('<div id="'+id+'" class="col-md-6 col-lg-4 col-sm-12 text-center"></div>');
            // Llamamos el metodo dibujaDona que se encuentra en el archivo drawChart
  			dibujaDona("#"+id, val.datacircle, val.datalines, val.subject, val.colores);
    		cont++;
  		});
  	}
}


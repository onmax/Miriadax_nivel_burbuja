var app={
    inicio: function(){        
        app.vigilaSensores();
    },
    
   
    
    vigilaSensores: function(){
        function onError() {
            console.log('onError!');
        }        
        
        function onSuccess(datosAceleracion){
			app.horizontal(datosAceleracion)
        }
        navigator.accelerometer.watchAcceleration(onSuccess, onError, { frequency: 100});
    },  
	
	horizontal: function(datosAceleracion){
		x = datosAceleracion.x;
		y = datosAceleracion.y;
		if(x > -5 && 5 > x && y > -5 && 5 > y){   			//Si en el eje de las x se detecta que está entre -5 y 5 entrará en el if.
			document.querySelector('#bola').style.visibility = "visible";  //se ve la bola
			app.dibujarCirculo(x, y, datosAceleracion);
		}else{
			document.querySelector('#bola').style.visibility = "hidden";    //No se ve la bola
		}
	},
	
	dibujarCirculo: function(x, y, er){
		anchura = (screen.width - 18);                          //Calcula la anchura total de la pantalla y le resta 18px, que es lo que mide la 															bola
		left = ((x+5)*anchura/10) + "px";						//Se calcula a cuanto debería estar desde el margen izquierdo
		margin = "15px 0px 0px " + left;
		document.querySelector('#bola').style.margin = margin;	//Se aplica el margen.
	}
};

if('addEventListener' in document){
    document.addEventListener('deviceready',function() {
        app.inicio();
    },false);
}
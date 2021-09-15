const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display(displayValorAnterior, displayValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));


});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});

var valor1= 30;
var valor2= 15;
var nombre= 'mildre'
var apellido= 'alfaro'

var multiplica = function(){
    console.log(valor1 *valor2)
}


var suma= function(){
    console.log(valor1 + valor2)
}


var resta= function(){
    console.log(valor1 - valor2)
}

var dividir= function(){
    console.log(valor1 / valor2)
}

var nombrecompleto=function(){
    console.log(nombre + ' ' + apellido)
}

var obtener = function(){
    console.log('obteniendo datos')
    var a= document.getElementById('prueba1').value
    var b= document.getElementById('prueba2').value
    valor1 = parseInt(a);
    valor2 = parseInt(b);          
}
var contenedor = document. getElementById('contenedordedatos')
var listadedatos = [];
var agregarinformacion =function(){

    var nombre = document.getElementById('minombre').value
    listadedatos.push(nombre)
   


    contenedor.innerHTML = ''
    for (var a = 0; a < listadedatos.length; a++) {
        
        if(listadedatos[a] != 'jhon'){
            contenedor.innerHTML = contenedor.innerHTML + '' +listadedatos[a] + '<br>'
        }
        else
        {
            contenedor.innerHTML = contenedor.innerHTML + 'profesor <br>'

        }

        console.log(listadedatos[a])

        var tabla = document.getElementById('tablademultiplicar')

        var datox = []
        function agregarcontenido(){
            datox.push('jhon')
            datox.push('juan')
            datox.push('pedro')

        }
        
        

        function mostrardatos(){
            tabla.innerHTML = ''
            for (var a = 0; a < datox.length ; a++) {
                tabla.innerHTML = tabla.innerHTML + datox[a] +" <br>"
    
            }





        }

        





    }

  



}



 












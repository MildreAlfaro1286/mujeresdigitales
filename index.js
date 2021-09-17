console.log('hola mundo')
var misdatos = [];

var guardar = function(){
    var nombre2 = document.getElementById('nombre').value
    var apellido2 = document.getElementById('apellido').value;

    misdatos.push({nombre:nombre2,apellido:apellido2})
    var x = JSON.stringify(misdatos)
    console.log(x)
     localStorage.setItem('datos' ,x)
    //localStorage.setItem('apellido' ,apellido)
}
var cargar = function(){
    //document.getElementById('nombre').value = localStorage.getItem('nombre')
    //document.getElementById('apellido').value =  localStorage.getItem('apellido')
}

misdatos = JSON.parse(localStorage.getItem('datos').toString())



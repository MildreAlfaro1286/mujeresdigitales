console.log('hola mundo')
var misdatos = [];

localStorage.setItem('prueba', 'leonadrian')

var guardar = function(){
    var nombre2 = document.getElementById('nombre').value
    var apellido2 = document.getElementById('apellido').value;

    misdatos.push({nombre:nombre2,apellido:apellido2})
    var x = JSON.stringify(misdatos)
    console.log(x)
    alert('prueba')
    localStorage.setItem('datos' ,x)
    //localStorage.setItem('apellido' ,apellido)
}
var cargar = function(){
    console.log('mildremildre')
    swal("Hello world!");
    swal({
        title: "hola?",
        text: "Mujeres Digitales",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("que tengas un excelente dia!!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    //document.getElementById('nombre').value = localStorage.getItem('nombre')
    //document.getElementById('apellido').value =  localStorage.getItem('apellido')
}

var existe = localStorage.getItem('datos')
console.log(existe)
if (existe != null){
    console.log ('si entro')
    misdatos=JSON.parse(localStorage.getItem('datos').toString())


}

var eliminarlocal = function(){
    console.log('eliminando datos')
    //localStorage.removeItem('datos')
    localStorage.clear()


}






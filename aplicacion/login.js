



var mensajeria = function(mensaje,tipo){

    var contenedormensajes = document.getElementById('divmensajes')  
    contenedormensajes.innerHTML = contenedormensaje.innertHTML + '<div class="alert alert-'+ tipo +' "role="alert">' +
        mensaje +
        '</div>'
 
        setTimeout(function(){
            $('.alert').alert('close')
 
        },5000)
 

}
var ojo = function(){
    
    if document.getElementById('imputPassword').type == "text"
       document.getElementById('imputPassword').type = "password"
    
}
else{
    document.getElementById('inputPassword').type = "text"


}

var validarpassword = function(){


}
var iniciarsesion = function(){
  
}

    var email = document.getElementById('imputEmail').value
    var password = document.getElementById('imputPassword').value

    console.log (email)
    console.log (password)
    
    
    
    
    
    if(email == null || email == '' || email == undefined){

        //alert('email es obligatorio')
        mensajeria('email es obligatorio', 'danger')
        document.getElementById('inputEmail').classList.add = ("borderojo")
        //mensajeria('el email es obligatorio', 'warning')
        //mensajeria('el email es obligatorio', 'success')
        return false;
    }
    
    validarpassword()


    if(password == null || password == '' || password == undefined){

        mensajeria('password es obligatorio', 'warning')
        document.getElementById('inputPassword').classList.add("borderojo")
        return false;


    }

    if(password.length < 8){
        mensajeria('el passworddebe superar 8 caracteres' , 'warning')
        return false;



    }

    if (password >= 11){
        mensajeria('el password debe menor de 10 caracteres', 'warning')
        return false;

    }
    
    if (password >= 11){
        mensajeria('el password debe menor de 10 caracteres', 'warning')
        return false;

    } 





    var mipalabra = password;
    var sihayunaletra = 0;
    for (var index = < mipalabra.length; index++)
    {
        var LetraActual = miPalabra.charAt(index);
        //console.log(letraActual)
        if(LetraActual == LetraActual.toUpperCase()){

            sihayunaletra = 1
            console.log('Existe una letra mayuscula')
        }



    }

    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (passwordRegex.test(password)) 
        mensajeria ('password inseguro', 'seccess')
        return false


    
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-20-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(email)) 
        alert ('correo valido')
      
    } else {
      valido.innerText = "incorrecto";
      alert ('correo invalido', 'success')
      //return false
    }

    
         



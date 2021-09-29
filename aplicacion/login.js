

var iniciarsesion = function(){

    var email = document.getElementById('imputEmail').value
    var password = document.getElementById('imputPassword').value

    console.log (email)
    console.log (password)

    if(email == null || email == '' || email == undefined){

        alert('email es obligatorio')
        return false;
    }


    if(email == null || email == '' || email == undefined){

        alert('password es obligatorio')
        return false;


    }

    
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        //Se muestra un texto a modo de ejemplo, luego va a ser un icono
        if (emailRegex.test(email)) {
            alert ('correo valido')
          
        } else {
          valido.innerText = "incorrecto";
          alert ('correo invalido')
          return false
        }
    });
        
}
function detectarInicio() {
    if (document.getElementById('saludo')){
        async function obtenerPersona(){
            let persona = await fetch('https://randomuser.me/api/?nat=es')
                                 .then(response => response.json())
                                 .then(datos => datos)
            console.log(persona.results);
            document.getElementById('nombre').innerHTML = persona.results[0].name.first;
        }
        obtenerPersona();
    }
    else{  
        async function obtenerPersona(){
            let persona = await fetch('https://randomuser.me/api/?nat=es')
                                 .then(response => response.json())
                                 .then(datos => datos)
            console.log(persona.results);
            document.getElementById('nombre').innerHTML = persona.results[0].name.first;
            document.getElementById('email_dp').innerHTML = persona.results[0].email;
            document.getElementById('fn_dp').innerHTML = persona.results[0].dob.date;
            document.getElementById('direccion_dp').innerHTML = persona.results[0].location.street.name + ' ' +persona.results[0].location.street.number;
            document.getElementById('telefono_dp').innerHTML = persona.results[0].phone;
            }
            obtenerPersona();
    }
}




detectarInicio();


function detectarDatosPersonales() {
    if (document.getElementById('dp')){
        async function obtenerPersona(){
            let persona = await fetch('https://randomuser.me/api/?nat=es')
                                 .then(response => response.json())
                                 .then(datos => datos)
            console.log(persona.results);
            document.getElementById('nombre').innerHTML = persona.results[0].name.first + ' ' + persona.results[0].name.last;
            document.getElementById('email_dp').innerHTML = persona.results[0].email;
            let fn = persona.results[0].dob.date;
            document.getElementById('fn_dp').innerHTML = fn.substr(0, 10);
            document.getElementById('direccion_dp').innerHTML = persona.results[0].location.street.name + ' ' +persona.results[0].location.street.number;
            document.getElementById('telefono_dp').innerHTML = persona.results[0].phone;
            }
        obtenerPersona();
    }
}




detectarDatosPersonales();


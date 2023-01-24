/* 
Esta función primero determina sei estamos en la página de información personal, y de ser así se conecta a la API de Random User para obtener datos de una persona e insertarlos en el DOM.
*/
function detectarDatosPersonales() {
    if (document.getElementById('dp')){
        async function obtenerPersona(){
            let persona = await fetch('https://randomuser.me/api/?nat=es')
                                 .then(response => response.json())
                                 .then(datos => datos)
            console.log(persona.results);
            console.log();
            document.getElementById('foto_perfil').setAttribute('src', persona.results[0].picture.large)
            document.getElementById('nombre').innerHTML = persona.results[0].name.first + ' ' + persona.results[0].name.last;
            document.getElementById('email_dp').innerHTML = persona.results[0].email;
            let fn = persona.results[0].dob.date;
            document.getElementById('fn_dp').innerHTML = fn.substr(0, 10);
            document.getElementById('edad_dp').innerHTML = persona.results[0].dob.age + ' años';
            document.getElementById('direccion_dp').innerHTML = persona.results[0].location.street.name + ' ' +persona.results[0].location.street.number;
            document.getElementById('telefono_dp').innerHTML = persona.results[0].phone;
            }
        obtenerPersona();
    }
}

detectarDatosPersonales();
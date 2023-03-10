//Esta función primero determina si estamos en la página de información personal, y de ser así se conecta a la API de Random User para obtener datos de una persona e insertarlos en el DOM.

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

//Función que muestra u oculta el contenido al interactuar con un botón
let estado = false;
function mostrar_ocultar(div) {
    console.log(estado);
    console.log('Disparo');
    if (estado == false) {
        document.getElementById('contenedor_'+div).classList.remove('oculto');
        estado = true;
    }
    else{
        document.getElementById('contenedor_'+div).classList.add('oculto');
        estado = false;
    }
}

//Se determina que elemento se mostrara u ocultara
if (document.getElementById('habilidades')){
    let boton_tecnicas = document.getElementById('boton_tecnicas');
    boton_tecnicas.addEventListener("click", () => mostrar_ocultar('tecnicas'));
    let boton_blandas = document.getElementById('boton_blandas');
    boton_blandas.addEventListener("click", () => mostrar_ocultar('blandas'));
}
else if (document.getElementById('experiencia_laboral')){
    let boton_representante = document.getElementById('boton_representante');
    boton_representante.addEventListener("click", () => mostrar_ocultar('representante'));

    let boton_mesero = document.getElementById('boton_mesero');
    boton_mesero.addEventListener("click", () => mostrar_ocultar('mesero'));
}

function mensaje_temporizado(){
    let mail_ok = false
    let nombre = document.getElementById('nombre').value;
    let mail = document.getElementById('mail').value;
    for (let i = 0; i < mail.length; i++) { //Este ciclo for valida el email antes de mostrar el mensaje
        if (mail.charAt(i) == '@'){
            for (let j = i; j < mail.length; j++) {
                if (mail.charAt(j) == '.'){
                    mail_ok = true
                }
            }
        }        
    }

    if (nombre != '' && mail_ok) {
        alert("Se ha enviado su información")
        document.getElementById('mensaje').classList.remove('oculto');
        setTimeout(() => document.getElementById('mensaje').classList.add('oculto'), 3000);        
    }
}

//Se dispara la finción mensaje_temporizado al hacer click en el botón enviar
if (document.getElementById('mensaje')){
    enviar.addEventListener("click", mensaje_temporizado)
}
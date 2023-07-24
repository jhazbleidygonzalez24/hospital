const Nombre = document.getElementById("Nombre")
const Apellido = document.getElementById("Apellido")
const NumeroDeCedula = document.getElementById("NumeroDeCedula")
const Consultorio = document.getElementById("Consultorio")
const Correo = document.getElementById("Correo")
const listadesplegabledelaespecialidad = document.getElementById("listadesplegabledelaespecialidad")
const formularioregistro = document.getElementById("registro-doctores-form")

formularioregistro.addEventListener("submit", function(event) {
    event.preventDefault();

    const  Doctores = {
        atributoNombre: Nombre.value,
        atributoApellido: Apellido.value,
        atributoNumeroDeCedula: NumeroDeCedula.value,
        atributoConsultorio: Consultorio.value,
        atributoCorreo: Correo.value,
        atributolistadesplegabledelaespecialidad : listadesplegabledelaespecialidad.value,
    }
    let doctores =[]
    let localdoctores = localStorage.getItem("doctores")
    if (localdoctores){
        doctores = JSON.parse(localdoctores)
    }
    doctores.push(objetoNombre)
    localStorage.setItem("doctores", JSON.stringify(doctores))
Formularioregistro.reset()
alert("dotores registrado con exito")
})


const formulario = document.getElementById("registro-paciente-form")
const paciente = document.getElementById("Nombre")
const Apellido2 = document.getElementById("Apellido")
const NumeroDeCedula2 = document.getElementById("NumeroDeCedula")
const Edad = document.getElementById("Edad")
const Telefono = document.getElementById("Telefono")
const listadesplegabledelaespecialidad2 = document.getElementById("listadesplegabledelaespecialidad")

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const objetopacintes = {
        atributopaciente: paciente.value,
        atributopaciente: Apellido.value,
        atributoNumeroDeCedula: NumeroDeCedula.value,
        atributoEdad: Edad.value,
        atributoEdad: Telefono.value,
        atributolistadesplegabledelaespecialidad : listadesplegabledelaespecialidad.value,

    }
    let paciente =[]
    let localpaciente = localStorage.getItem("pacientes")
    if (localpaciente){
        doctores = JSON.parse(localdoctores)
    }
    paciente.push(objetopacientes)
    localStorage.setItem("pacientes", JSON.stringify(paciente))
formulario.reset()
alert("paciente registrado con exito")
})


function mostrarpacientes(){
    let paciente = []
    let localpaciente = localStorage.getItem("paciente")
    if(localpaciente) {
        pacientes = JSON.parse(localpaciente)
    }
    const tablapacientes = document.getElementById("tabla-personal")
    const cuerpotabla =tablapacientes.getElementsByTagName("tbody")[0]

    paciente.forEach(paciente =>{
        let fila = cuerpotabla.insertRow()
        const celdaPaciente = fila.insertCell()
        celdaPaciente.textContent = paciente.  atributopaciente
        const celdaApellido = fila.insertCell()
        celdaApellido.textContent = paciente.  atributopaciente
        const celdacedula = fila.insertCell()
        celdacedula.textContent = paciente.atributoNumeroDeCedula
        const celdaEdad = fila.insertCell()
        celdaEdad.textContent = paciente.  atributoEdad
        const celdaTelefono = fila.insertCell()
        celdaTelefono.textContent = paciente.  atributoEdad
        const celdaEspecialidades = fila.insertCell()
        celdaEspecialidades.textContent = paciente.atributolistadesplegabledelaespecialidad
        
        
    });
}

mostrarpacientes()
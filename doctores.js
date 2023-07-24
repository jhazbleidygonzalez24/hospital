function mostrardoctores(){
    let doctores = []
    let localdoctores = localStorage.getItem("doctores")
    if(localdoctores) {
        doctores = JSON.parse(localdoctores)
    }
    const tabladoctores = document.getElementById("tabla-doctores")
    const cuerpotabla =tabladoctores.getElementsByTagName("tbody")[0]

    doctores.forEach(doctores =>{
        let fila = cuerpotabla.insertRow()
        const celdaNombre = fila.insertCell()
        celdaNombre.textContent = doctores.atributoNombre
        const celdaApellido = fila.insertCell()
        celdaApellido.textContent = doctores.atributoApellido
        const celdacedula = fila.insertCell()
        celdacedula.textContent = doctores.atributoNumeroDeCedula
        const celdaConsultorio = fila.insertCell()
        celdaConsultorio.textContent = doctores.atributoConsultorio
        const celdaCorreo = fila.insertCell()
        celdaCorreo.textContent = doctores.atributoCorreo
        const celdaEspecialidades = fila.insertCell()
        celdaEspecialidades.textContent = doctores.atributolistadesplegabledelaespecialidad
        
        
    });
}

mostrardoctores()
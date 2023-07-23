var nombre = document.getElementById("nombre");
var Apellido = document.getElementById("Apellido");
var Numerodecedula = document.getElementById("Numero de cedula");
var listadesplegabledelaespecialidad = document.getElementById("lista desplegable de la especialidad");
var consultorio = document.getElementById("consultorio");
var correodecontacto = document.getElementById("correo de contacto");
var error = document.getElementById("error");

	

error.style.color = "white";

function enviarformulario() {
	console.log("enviando formulario");

	var mensajeserror = [];

	if (nombre.value === null || nombre.value === "") {
		mensajeserror.push("ingresa tu nombre");

	}

	if (Apellido.value === null || Apellido.value === "") {
		mensajeserror.push("ingresa tu Apellido");

	}

   if (Numerodecedula.value === null || Numerodecedula.value === "") {
		mensajeserror.push("ingresa tu Numero de cedula");

	}
	
	if (consultorio.value === null || consultorio.value === "") {
		mensajeserror.push("ingresa tu consultorio");

	}

	if (correodecontacto.value === null || correodecontacto.value === "") {
		mensajeserror.push("ingresa tu correo de contacto");

	}

	const reg_ex = /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i; // Letras y espacios, pueden llevar acentos.
	const elNombreEsValido = reg_ex.test(nombre.value)
	console.log(nombre.value, elNombreEsValido)

	if (!elNombreEsValido) {
		mensajeserror.push("nombre no valido");
	}

	const reg_exApellido = /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i; // Letras y espacios, pueden llevar acentos.
	const elApellidoEsValido = reg_exApellido.test(Apellido.value)
	console.log(Apellido.value, elApellidoEsValido)

	if (!elApellidoEsValido) {
		mensajeserror.push("Apellido no valido");
	}

	const reg_exNumerodecedula = /^\d{7,14}$/  // 7 a 14 numeros. 
	const elNumerodecedulaEsValido = reg_exNumerodecedula.test(Numerodecedula.value)
	console.log(Numerodecedula.value, elNumerodecedulaEsValido)


	if (!elNumerodecedulaEsValido) {
		mensajeserror.push("Numero de cedula no valido");
	}

	
	const reg_exconsultorio = /^\d{3,14}$/  // 7 a 14 numeros. 
	const elconsultorioEsValido = reg_exconsultorio.test(consultorio.value)
	console.log(consultorio.value, elconsultorioEsValido)

	if (!elconsultorioEsValido) {
		mensajeserror.push("consultorio no valido");
	}

	const reg_excorreodecontacto = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	const elcorreodecontactoEsValido = reg_excorreodecontacto.test(correodecontacto.value)
	console.log(correodecontacto.value, elcorreodecontactoEsValido)

	if (!elcorreodecontactoEsValido) {
		mensajeserror.push("correo no valido");
	}
	
	const divError = document.getElementById("error");
	divError.innerHTML = mensajeserror.join(",");

}

	function enviarformulariopersonas() {
		console.log ("enviando formulario");
	
		var mensajeserror = [];
	
		if (nombre2.value === null || nombre2.value === "") {
			mensajeserror.push("ingresa tu nombre");
	
		}
	
		if (Apellido2.value === null || Apellido2.value === "") {
			mensajeserror.push("ingresa tu Apellido");
	
		}
	
		if (Numerodecedula.value === null || Numerodecedula.value === "") {
			mensajeserror.push("ingresa tu Numero de cedula");
	
		}

		if (Edad.value === null || Edad.value === "") {
			mensajeserror.push("ingresa tu Edad");
	
		}

		if (Telefono.value === null || Telefono.value === "") {
			mensajeserror.push("ingresa tu Telefono");
	
		}
	
	
		const reg_ex = /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i; // Letras y espacios, pueden llevar acentos.
		const elNombreEsValido = reg_ex.test(nombre.value)
		console.log(nombre.value, elNombreEsValido)
	
		if (!elNombreEsValido) {
			mensajeserror.push("nombre no valido");
		}
	
		const reg_exApellido = /^[a-zA-ZÀ-ÿ\\s]{1,40}$/i; // Letras y espacios, pueden llevar acentos.
		const elApellidoEsValido = reg_exApellido.test(Apellido.value)
		console.log(Apellido.value, elApellidoEsValido)
	
		if (!elApellidoEsValido) {
			mensajeserror.push("Apellido no valido");
		}
	
		const reg_exNumerodecedula = /^\d{7,14}$/  // 7 a 14 numeros. 
		const elNumerodecedulaEsValido = reg_exNumerodecedula.test(Numerodecedula.value)
		console.log(Numerodecedula.value, elNumerodecedulaEsValido)
	
		if (!elNumerodecedulaEsValido) {
			mensajeserror.push("Numerodecedula no valido");
		}
	
		const reg_exEdad = /^\d{1,2}$/  // 1 a 2 numeros. 
		const elEdadEsValido = reg_exEdad.test(Edad.value)
		console.log(Edad.value, elEdadEsValido)
	
		if (!elEdadEsValido) {
			mensajeserror.push("Edad no valido");
		}
	
		const reg_exTelefono = /^\d{10}$/  // 10 numeros. 
		const elTelefonoEsValido = reg_exTelefono.test(Telefono.value)
		console.log(Telefono.value, elTelefonoEsValido)
	
		if (!elTelefonoEsValido) {
			mensajeserror.push("Telefono no valido");
		}	

		const divError = document.getElementById("error2");
		divError.innerHTML = mensajeserror.join(",");

	return false;

}
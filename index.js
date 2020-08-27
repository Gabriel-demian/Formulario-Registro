var precio = 0;

function enviarForm(){
  alert("Su formulario se envió correctamente.");

  document.getElementById("datosFormulario").innerHTML =
  "Nombre: " + document.getElementsByName("nombre")[0].value + "<br>" +
  "Apellido: " + document.getElementsByName("apellido")[0].value + "<br>" +
  "DNI: :" + document.getElementsByName("dni")[0].value + "<br>" +
  "Email: " + document.getElementsByName("email")[0].value + "<br>" +
  "Teléfono: " + document.getElementsByName("tel")[0].value+ "<br>" +
  "Seguro: " + document.getElementsByName("tipoSeg")[0].value + " $" + tipoSeg();
}

function tipoSeg(){
  var seg = document.getElementsByName("tipoSeg")[0].value;
  
  switch (seg) {
    case 'Básico':
      precio = 500;
      break;
    case 'Intermedio':
      precio = 1000;
      break;
    case 'Premium':
      precio = 1500;
      break;
  }
  return precio;
}
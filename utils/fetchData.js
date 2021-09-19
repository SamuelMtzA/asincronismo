// importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// direccion de la API


// funcion principal
const fetchData = (url_api) =>{

  return new Promise((resolve, reject)=>{
  // instanciamos la conexion
  const xhttp = new XMLHttpRequest();
  // abrir una conexion con el metodo, la ruta y si es asincrono
  xhttp.open('GET', url_api, true);
  // validacion del llamado
  xhttp.onreadystatechange = (() => {
    // el state 4 ers completado
    if(xhttp.readyState === 4){
      // verificamos que el status este en 200, que dice que todo bien, no un 400 o 500
        (xhttp.status === 200) 
        ? resolve(JSON.parse(xhttp.responseText))//analiza una cadena de texto como JSON y devuleve DOMString que contiene la  respuesta a la consulta
        : reject(new Error('Error ',url_api));  
    }
  });
  // por ultimo enviamos la peticion
  xhttp.send();
 });
}

module.exports = fetchData;
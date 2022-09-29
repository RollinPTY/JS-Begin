/* INDICACIONES GENERALES
Escribe un código que pregunte por el inicio de sesión con propmt.

Si el visitante ingresa "Admin", entonces prompt(pregunta) por una contraseña, si la entrada es una linea vacía o Esc – muestra “Cancelado.”, si es otra cadena de texto – entonces muestra “No te conozco”.

La contraseña se comprueba de la siguiente manera:

Si es igual a “TheMaster”, entonces muestra “Bienvenido!”,
Si es otra cadena de texto – muetra “Contraseña incorrecta”,
Para una cadena de texto vacía o una entrada cancelada, muestra “Cancelado.”


Por favor usa bloques anidados de if. Piensa en la legibilidad general del código.

Pista: si se le pasa una entrada vacía a un prompt, retorna una cadena de texto vacía ''. Presionando ESC durante un prompt retorna null.
*/



/* The web */

/* 
let userName = prompt("Quién está ahí?", "");

if (userName == "Admin") {

    let pass = prompt("¿Contraseña?", "");

    if (pass === "TheMaster") {
  alert( "Bienvenido!" );
    } else if (pass === "" || pass === null) {
  alert( "Cancelado." );
    } else {
  alert( "Contraseña incorrecta" );
    }

} else if (userName === "" || userName === null) {
    alert( "Canceledo" );
} else {
    alert( "No te conozco" );
}

 */


/* ME */

/* 

usuario = prompt('¿Quién eres?');

if (usuario == 'Admin') {
  contraseña = prompt('Escribe la contraseña: ');
    if (contraseña == 'TheMaster') {
      alert('welcome');
    } else if (contraseña != ''){
      ;
        alert('contraseña incorrecta');
    }

} else if (usuario==null){
  alert('cancelado')
} else {
  alert('no te conozco')
}

*/



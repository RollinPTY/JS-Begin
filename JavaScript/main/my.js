

/* typeof duevelve el tipo de argumento. Es útil cuando queremos procesar valores de diferentes tipos de forma diferente o simplemente queremos hacer una comprobación ràpida */

/* 
typeof 0 // "number"

typeof(0) // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof Math // "object" 
 */


//----------------------------------------------------------------------------------

/* alert, prompt, confirm */

// alert ya vista, muestra un mensaje al usuario hasta que presiones "Aceptar"
//muestra una ventana modal que no deja interactuar al usuaio con lo demás hasya que preciones aceptar

//----------

//prompt  acepta dos argumentos 
//muestra una venta nodal con un mensaje de texto, un capo de entrada para le visitante y los botones OK/CANCELAR.
// 
/* 
let age = prompt ('¿Cuántos años tienes?', 100);

alert(`Tienes ${age} años!`); //Tienes 100 años!
 */

//----------

/* confirm */
// confirm muestra una ventana modal con una pregunta y dos botes: ok=true y cancelar=false
/* 
let isBoss = confirm("¿Eres el jefe?");

alert( isBoss ); // true si se pulsa OK

*/


//----------------------------------------------------------------------------------

/* CONVERSION DE TIPO */

// hay funciones que convierte automñaticamente los valores que les pasan al tipo correcto.
// alet convierte automáticamente cualquier valor a string para mostrarlo.

//----------

/* ToString */
// alert(value) para mostrar un valor como texto
/* 
let value = true;
alert(typeof value); // boolean

value = String(value); // ahora value es el string "true"
alert(typeof value); // string
 */

//----------

/* ToNumber */
// las conversiones numéricas ocurren automáticamente en funciones mateámticas y expresiones
/* 
alert( "6" / "2") // 3, los string son convertidos a números.

// para convertir explicitamente

let str = "123";
alert(typeof str); // string

let num = Number(str); // se convierte en 123

alert(typeof num); // number

 */


// REGLAS DE CONVERSIÓN
/* 
undefined=NaN
null=0
true and false= 1 y 0
string= se eliminan los espacios del inicio y final del texto. Si el str resulta vacío, el resultado es 0
en caso contrario el número es: "leido" del str. Un error devuelve NaN
*/
/* 
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error al leer un número en "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
 */

// en concatenación de str en casi todas las operaciones matemáticas convierten valores a números, a excepción de la suma 

//----------

/* ToBoolean */
//los valores que son intuitivamente "vacíos", como 0, "", null, undefined, NaN, se convierten en false
//otros valores se convierten en True


//----------------------------------------------------------------------------------



/* Operadores básicos, matemática */

/* 
suma= +
resta= -
multiplicación= *
división= /
resto= %
exponenciación= **

mayor/menor= a>b  y a<b
mayor/menor o igual= a>=b   a<=b
exactamente= a == b
distinto= a != b
igualdad estricto= === comprueba la igualdad sin conversiones de tipo
diferencia estricta= !==
*/

//----------


/* cocatenación de cadenas con el binario + */
/* 
let s= "my" + "string";
alert(s); // mystring
 */
// si uno de los operados es una cadena, el otro tambien se convertira en cadena
/* 
alert( '1' + 2 ); // "12"
alert(2 + 2 + '1' ); // "41" y no "221"
alert('1' + 2 + 2); // "122", no es "14"
 */

//El binario + es el único operador que soporta cadenas en esa forma. Otros operadores matemáticos trabajan solamente con números y siempre convierten sus operandos a números.
/* 
alert( 2 - '1' ); // 1
alert( '6' / '2' ); // 3
 */

//----------


/* conversión numérica, unario + */
//La suma + existe en dos formas: la forma binaria que utilizamos arriba y la forma unaria. La suma + existe en dos formas: la forma binaria que utilizamos arriba y la forma unaria.

// Sin efecto en números
/* 
let x = 1;
alert( +x ); // 1

let y = -2;
alert( +y ); // -2

// Convierte los no números
alert( +true ); // 1
alert( +"" );   // 0
 */
// hace lo mismo que Number(...) pero es más corto.
/* 
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", el binario suma concatena las cadenas
 */

// si queremos tratarlos como números, se convierte y luego se suma
/* 
let apples = "2";
let oranges = "3";

// ambos valores convertidos a números antes del operador binario suma
alert( +apples + +oranges ); // 5

// la variante más larga
// alert( Number(apples) + Number(oranges) ); // 5
 */


 /* comparación con nulos en indefinidos */
// null e indefined son valores diferentes.
/* 
alert( null === undefined ); // false
 */

// pero para  omparación no estricta 

/* 
alert( null == undefined ); // true
*/

// pero para otras comparaciones < > >= <=, null se convierte en 0 y undefined en NaN
//undefined no debe compararse con otros valores.

// tratar cualquier comparación con undefined/null (excepto la ifualdad estricta ===) con sumo cuidado y no usar comparaciones con estos.

//----------

/* Asignación */
// una asignación = es un operador y tiene una pioridad muy baja en la tabla de precedencia

// x = 2 * 2 + 1, los cálculos se realizan primero y luego se evalúa el =, almacenando el resultado en x

/* 
let x = 2*2+1
alert(x) // 5
 */

// todos los operadores enJS devuelven un valor, como + y -, pero también es cierto para =.
// x=value escribe el value en x y luego lo devuelve

/* 
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

alert( a ); // 3
alert( c ); // 0
 */

//----------


/* Asignacione encadenadas */
/* 
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
 */

//----------

/* modificar en el lugar */
/* 
let n = 2;
n=n+5;
n=n+2;

//esta anotación puede ser acortada ultilizando +=
n +=5
 */

//----------

/* Incremento/Decremento */
// aumentar o disminuir un número en uno es una de las operaciones num más comunes
// solo se puede utilizar con variables

//incremento
/* 
let counter = 2;
counter++;      // funciona igual que counter = counter + 1, pero es más corto
alert( counter ); // 3
 */

//----------


//decremento
/* 
let counter = 2;
counter--;      // funciona igual que counter = counter - 1, pero es más corto
alert( counter ); // 1
 */

/* 
let counter = 1;
let a = ++counter; // (*)

alert(a); // 2
 */


// puede ser usada dentro de expresiones

/* 
let counter = 1;
alert( 2 * ++counter ); // 4
 */


//comparado con:
/* 
let counter = 1;
alert( 2 * counter++ ); // 2, porque counter++ devuelve el valor "antiguo"
 */

/* 
let counter = 1;
alert( 2 * counter );
counter++;
 */


//----------------------------------------------------------------------------------


/* OPERADORES A NIVEL BIT */

// los operadores a nivel bit tratan a los argumentos como números enteros de 32 bits y trabajan en el niver de representacioón

/* 
AND(&)
OR(|)
XOR(^)
NOT(~)
LEFT SHIFT(<<)
RIGHT SHIFT(>>)
ZERO-FILL RIGHT SHIFT (>>>>)
*/

// estos operadores se usan muy raramente, cuando necesitamos manejar la representaciñon de números en su más bajo nivel.

//----------------------------------------------------------------------------------


/* Coma */

// el operador coma , es uno de los operadores más inusuales. A veces, es utilizaso para escribir código más corto

// permite evaluar varias expresiones, dividiendolas con una coma ,. cada una de ellas es evaluado pero solo el resltudao de la últimas es devuelto
/* 
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (el resultado de 3 + 4)
 */


//----------------------------------------------------------------------------------


/* CONDICIONAL if, '?' */
// if(...) evalua la condición en los paréntesis, y si el resultado es true ejecuta un bloque de código.

/* 
let year = prompt('¿En que año fué publicada la especificación ECMAScript-2015?', '');

if (year == 2015) alert( '¡Estás en lo cierto!' );
 */



// if(...) evalúa la expresión y convierte el resultado en booleano.
// RECORDAR: número =, str vacio "", null, undefined y NaN se convierten en false
// el resto en true
/* 
if (0) { // 0 es falso
    ...
}

if (1) { // 1 es verdadero
    ...
}
  */ 

/* 
let cond = (year == 2015); // la igualdad evalúa y devuelve un true o false

if (cond) {
  ...
}
 */

//----------


/* LA CLÁUSULA else */
// es un bloque opcional. se ejecutara la condición sea falsa.
/* 
let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');

if (year == 2015) {
  alert( '¡Lo adivinaste, correcto!' );
} else {
  alert( '¿Cómo puedes estar tan equivocado?' ); // cualquier valor excepto 2015
}

 */

// algunas veces, queremos probar variates de una condición, else if lo permite.
/* 
let year = prompt('¿En qué año fue publicada la especificación ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Muy poco...' );
} else if (year > 2015) {
  alert( 'Muy Tarde' );
} else {
  alert( '¡Exactamente!' );
}
 */

//----------


/* OPERADOR TERNARIO ? */
// a veces necesitamos asignar una variable dependiendo de alguna condición
/* 
let accessAllowed;
let age = prompt('¿Qué edad tienes?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed)
 */

// EL OPERADOR TERNARIO permite ejecutar esto de forma más simple
/* 
let result = condition ? value1 : value2;
 */

// se evalua condition: si es verdadera entonces devuelve value1, de lo contrario value2

/* 
let accessAllowed = (age > 18) ? true : false;
 */

// IMPORTANTE, se puede evitar utilizar el operador ternario porque esta comparación devuelve directamente true/false:

// es lo mismo que
/* 
let accessAllowed = age > 18;
 */

//----------


/* Multiples ternarios */
/* 
let age = prompt('¿edad?', 18);

let message = (age < 3) ? '¡Hola, bebé!' :
  (age < 18) ? '¡Hola!' :
  (age < 100) ? '¡Felicidades!' :
  '¡Qué edad tan inusual!'; // esto significaria +100

alert( message );
 */

//----------

// así sería con if...else
/* 
if (age < 3) {
    message = '¡Hola, bebé!';
  } else if (age < 18) {
    message = '¡Hola!';
  } else if (age < 100) {
    message = '¡Felicidades!';
  } else {
    message = '¡Qué edad tan inusual!';
}
 */
/* 

//----------------------------------------------------------------------------------


/* OPERADORES LÓGICOS */
// hay cuatro operadores lógicos en JS: ||=(or), &&=(y), !=(no), ??=(fusion de nulos)


// || (or)
// el operador or representa dos símbolos de línea vertical
/* 
result = a || b;
 */

// or sirve para manipular solo valores booleanos. SI uno de los argumentos es true, retorna true, de lo contrario false
/* 
alert(true || true); // true (verdadero)
alert(false || true); // true
alert(true || false); // true
alert(false || false); // false (falso)
 */
// el resultado siempre es true excepto cuando ambos argumentos son false.
/* 
if (1 || 0) { // Funciona como if( true || false )
    alert("valor verdadero!");
  }
 */

// la  mayoria de las veces or es usado en declaraciones if para probar si alguna de las condiciones dadas es true.
/* 
let hour = 9;

if (hour < 10 || hour > 18) {
  alert( 'La oficina esta cerrada.' );
}
*/
// o pasar dos condiciones
/*  
let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert("La oficina esta cerrada."); // Es fin de semana
}
 */

/*  
result = value1 || value2 || value3;
*/

// devuelve el primer valor verdadero o el último si ninguno es verdadero.

/* 
alert(1 || 0); // 1 (1 es un valor verdadero)

alert(null || 1); // 1 (1 es el primer valor verdadero)
alert(null || 0 || 1); // 1 (el primer valor verdadero)

alert(undefined || null || 0); // 0 (todos son valores falsos, retorna el último valor)
*/

// elje el que tiene datos y mostrarlo (o anñonimo si no hay nada configurado)
/* 
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder
 */
// si todas las variables fueran falsas, aparecería "Anonymous"


//----------

/* EVALUACIÓN DE CAMINO MÁS CORTO */
// significa que || procesa sus argumentos hasta que se alcanza el primer valor verdadero, luego el valor se devuelve inmediatamente, sin tocas el otro argumento
//La importancia de esta característica se vuelve obvia si un operando no es solo un valor, sino una expresión con un efecto secundario, como una asignación de variable o una llamada a función.

/* 
true || alert("not printed");
false || alert("printed");
 */
// en la primera línea el operador || detiene la evaluación inmediatamente después de ver que es verdadera. por lo que la alerta no se ejecuta


//----------

/* && (and) */

/* 
result= a && b;
*/

// retorna true si ambos son verdaderos.
/* 
alert(true && true); // true
alert(false && true); // false
alert(true && false); // false
alert(false && false); // false
 */

/* 
let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("La hora es 12:30");
}
*/


/* AND && encuentra el primer valor falso */
/* 
result = value1 && value2 && value3;
 */

// and retorna el primer valor falso o si todos los operadores son verdaderos, retorna el último

/* 
// si el primer operando es un valor verdadero,
// AND retorna el segundo operando:
alert(1 && 0); // 0
alert(1 && 5); // 5

// si el primer operando es un valor falso,
// AND lo retorna. El segundo operando es ignorado
alert(null && 5); // null
alert(0 && "cualquier valor"); // 0

alert(1 && 2 && null && 3); // null
*/

// LA PRECEDENCIA DE AND ES MAYOR QUE LA DE OR
// así que a && b || c && d  es basicamente lo mismo que las expresiones && estuvvieran en parentesis
// (a && b) || (c && d)

//----------

/* ! (NOT) */
// solo acepta un argumento y convierte el operando a tipo booleano, luego retorna lo contrario

/* 
result = !value;
*/

/* 
alert(!true); // false
alert(!0); // true
 */

// un doble not a veces se usa para convertir un valor al tipo booleano
/* 
alert(!!"cadena de texto no vacía"); // true
alert(!!null); // false
 */

// o una manera más prolija
/* 
alert(Boolean("cadena de texto no vacía")); // true
alert(Boolean(null)); // false
 */


//----------------------------------------------------------------------------------


/* OPERADOR NULLISH COALESCING ?? */
// el operador ?? (fusión de null) trata a null y a undefined de forma similar, diremos que una expresión es definida cuando no es null ni undefined
// devuelve el primer argumento cuano este no es null ni undefined, sino devuelve el segundo
/* el resultado de a ?? b :*/
// si a está definida, será a
//si a no está definida, será b

/* 
result = (a !== null && a !== undefined) ? a : b;
 */

// el uso típico de ?? es brindar un valor predeterminado


//Por ejemplo, aquí mostramos user si su valor está “definido” (que no es null ni undefined). De otro modo, muestra Anonymous:

/* 
let user;

alert(user ?? "Anonymous"); // Anonymous (user no definido)
 */

//con nombre definido:
/* 
let user = "John";

alert(user ?? "Anonymous"); // John (user definido)
 */


// También podemos usar una secuencia de ?? para seleccionar el primer valor que no sea null/undefined de una lista.
/* 
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// Muestra el primer valor definido:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
 */
//OJITO OJITO... El operador OR || puede ser utilizado de la misma manera que ??
/* 
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// muestra el primer valor "verdadero":
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
 */

// PERO LA GRAN DIFERENCIA ES: || devuelve el primer valor verdadero y ?? devuelve el primer valor definido.
// || no distingue entre false, 0, "" y null/unefined.  Todos son los mismos valores=false. Y entonces obtrendriamos el segundo valor como resultado

// pero a veces queremos usar el valor predeterminado solo si la variable es null/undefined.

/* 
ejm:
let height = 0; // altura cero

alert(height || 100); // 100
alert(height ?? 100); // 0
 */

/* ADVERTENCIA: esta prohibido utilizar ?? con || y && sin paréntesis explícitos. */



//----------------------------------------------------------------------------------


/* BUCLE WHILE y FOR */

/* While */
// mientras la condición sea verdadera, el código del curpo del bucle será ejecutado

/* 
let i = 0;
while (i < 3) { // muestra 0, luego 1, luego 2
  alert( i );
  i++;
}
 */

// la manera más corta de escribir while (i !=0) es while(i)

/* 
let i = 3;
while (i) { // cuando i sea 0, la condición se volverá falsa y el bucle se detendrá
  alert( i );
  i--;
}
*/

// manera corta y sin {}
/* 
let i = 3;
while (i) alert(i--);
*/

//----------

/* do...while */
// el bucle primero ejecuta el cuerpo, luego comprueba la condición, y,  mientras sea un valor verdadero, la ejecuta una y otra vez

/* 
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
 */


/* ADVERTENCIA: ESTA SINTAXIS SOLO SE USA CUANDO EL CUERPO DEL BUCLE SEA EJECUTADO AL MENOS UNA VEZ SIN IMPORTAR LA CONDICIÓN. */


//----------


/* Bucle for */
/* 
for (begin; condition; step) { // (comienzo, condición, paso)
  // ... cuerpo del bucle ...
}
*/

/* 
for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
  alert(i);
}
*/

/* IMPORTANTE: declar la variable en el bucle. se le llama declaraci´ln de variable en línea y son solo visibles dentro del bucle */
// se puede omitir el compienza, el paso o todo y hacerlo infinito

/* 
  for (; i < 3; i++) { // no hay necesidad de "comenzar"

  for (; i < 3;) {

*/

//----------


/* BREAk */
// se pouede forzar la salida del bucle con break, con este código se interrumpe si el usuario no ingresa un número
/*
let sum = 0;

while (true) {

  let value = +prompt("Ingresa un número", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Suma: ' + sum );
*/

//----------

/* continue */
// es una versión más ligera de break. No detiene el bucle por completo. En su lugar, detiene la iteración actual y fuerza el bucle a comebzar una nueva (si la condición lo permite)

// en este ejm continue se una para mostrar solo valores dispares

/* 
  for (let i = 0; i < 10; i++) {

  // si es verdadero, saltar el resto del cuerpo
  if (i % 2 == 0) continue;

  alert(i); // 1, luego 3, 5, 7, 9
}
*/
// para los valores pares i, la directiva continue deja de ejecutar el cuerpo y pasa el control a la siguiente iteración de for, así que alert solo es llamado para mostrar valores impares


// un bucle que muestra valores impares puede verse así:
/* for (let i = 0; i < 10; i++) {

  if (i % 2) {
    alert( i );
  }

}
 */
// la directiva continues ayuda a disminuir la anidación
// desde un punto de vista técnico, esto es idéntico al ejemplo de arriba, pero como efecto secundario, crearía un nivel más de anidación y reduce la legibilidad del código

// la directivas break/coninue no son permitidas a la derecha de '?'
/* 
if (i > 5) {
  alert(i);
} else {
  continue;
}
 */

// (i > 5) ? alert(i) : continue; // continue no está permitida aquí

// Esta es otra razón por la cual se recomienda no usar el operador de signo de interrogación ? en lugar de if

// A veces necesitamos salirnos de múltiples bucles anidados al mismo tiempo.
/* 
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Valor en las coordenadas (${i},${j})`, '');

    // ¿Y si quiero salir de aquí hacia Listo (debajo)?

  }
}

alert('Listo!');
 */

// necesitamos una manera de detener el proceso si el usuario cancela la entrada.
// break ordinario solo nos sacaria del bucle interno.

//----------
/* ETIQUETA */


/* SE NECESITA UNA ETIQUETA, que es un identificador con un signo de dos punto antes del bucle */

/* 
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // Si es una cadena de texto vacía o se canceló, entonces salir de ambos bucles
    if (!input) break outer; // (*)

    // hacer algo con el valor...
  }
}

alert('Listo!');
 */

// tambien se puede tener la etiqueta separada
/* 
outer:
for (let i = 0; i < 3; i++) { ... }
 */

// La directiva continue también puede usar usada con una etiqueta. En este caso, la ejecución del código salta a la siguiente iteración del bucle etiquetado.

/* 
practica
let i = 0

do {
  let input = prompt("Ingrese un valor mayor que 100");

} while (i<=100 && num);

 */





































































































































































































































































































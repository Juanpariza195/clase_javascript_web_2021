//hola mundo
alert('hola mundo');

//comentarios
 

//comentario de linea
/*comentario de mas de una linea*/

//sentencias

alert('hola');alert('mundo');

//alert('hola')
//alert('mundo')

// variables

let mensaje;
mensaje= "hola mundo"
//alert(mensaje)
let a = 5;
let b = 6;
let suma = a + b;
//console.log("El resultado de la suma es: ",suma);

b = 7
//console.log(b)

let nombre = "juan";
let nombre2 = nombre;

nombre2 = "pablo";
//console.log("el nombre uno es:",nombre); 
//console.log("el nombre dos es:",nombre2);

//nombrar variables con camel case
nombreUno = "Juan";
nombreDos = "Pablo";

//nombrar como underscore
nombre_uno = "Juan";
nombre_dos = "Pablo";

//nombres no comunes
let $ = 1;
let _ =2;

//no puede nombrar variables

/*let 1a = 3;
let primer-nombre = 4;*/

"use strict"

mensaje = "hola mundo";

// constantes

const pi = 3.141624;
const COLOR_ROJO = "#FFFFF";
pi_dos = pi;
pi_dos = 7;
//console.log(pi);
//console.log(pi_dos);

//const id_account = get_id_account(45);

// tipos de datos

//dinamicamente tipado

//let mensaje = "hello";
//mensaje = 1234

// Tipo de datos Numero
let n = 123;
n = 12.456;

// Valores numericos especiales Infinity, - Infinity y NaN

// Infinity: representa el infinito matematico. Es un valor especial que es mayor que cualquier numero;

//console.log(1 / 0);
//console.log(Infinity);


//NaN representa un  error de calculo. Es el resultado de una operacion
// matematica incorrecta o indefinida

//console.log("no es un numero" /2);

//NaN es pegajoso. cualquier operacion sobre Nan devuelve NaN

//console.log("no es un numero" /2 + 5);

//Tipos de datos BigInt


//Valores enteros mayores que (2^53-1) o menor que -(2^53-1) 9.007.199.254.740.991

//let numero_grande = 12345666895421115674444444489;
//console.log(numero_grande);

// Tipo String
let texto = "hola";
let texto_dos = 'hola';
let texto_tres = ``; //backticks funcionalidad extendida
let nomb = "Juan";
//console.log("hola", nomb);
//console.log('hola', nomb);
//console.log(`hola`, nomb);

//console.log("hola ${nomb}");
//console.log('hola ${nomb}');
//console.log(`hola ${nomb}`);

// Tipo booleano

// true y false

let verdadero = true;
let falso = false;
let mayor = 4 > 1; //True

// Tipo de dato null

// Valor especial que no pertenece a ningun tipo de dato anterior.
// Forma un tipo propio separado que contiene solo el valor null.

let edad = null;

// en javascript null No significa un objeto no existente
// Es solo un valor especial que representa nada, vacio o valor desconocido.

// valor undefined

// valor especial que no pertenece a ningun tipo de dato anterior.
//El significado de undefined es valor no asignado.

let edad_dos
//console.log(edad_dos);


// El operador typeof o funcion typeof(x), devuelve el tipo de dato.

//console.log(typeof undefined); // undefined
//console.log(typeof 0); //number
//console.log(typeof true);//boolean
//console.log(typeof 10n); //bigint
//console.log(typeof "hola");//string

//console.log(typeof(alert)); //funtion**
//console.log(null);// object- error de javascript
//console.log(Math); // object

// Interacciones: alert, prompt, confirm

//alert

//alert('hola mundo');

// prompt

//let nombre_capturado = prompt('digite el nombre', 'hola');
//alert(nombre_capturado);

//prompt('digite el nombre')
//prompt('digite el nombre', '') //solo para IE

// confirm

//let eshelado = confirm('¿Te gusta el helado?');
//console.log(eshelado); // true si presionan OK y false si precionan cancelar

// CONVERSION DE TIPOS 

// Existen dos tipos de conversiones explicitas e implicitas

//convertir a string

//let valor = true;
//console.log(typeof valor);

//valor = string(valor); // "true"
//valor = string(false); // "false"
//valor = string(null); // "null"
//valor = string(undefined); // undefined
//console.log(valor);
//console.log(typeof valor);

// convertir a Numero

//conversiones numericas ocurren automaticamente en funciones matematicas y expresiones

// alert('6 / 2'); //3
// alert(1 + '2'); //'12'
//alert('1' + 2); //'12'

//let cadena = "123"
//let num_cad = number(cadena); //123

//console.log(number('hola')); //NaN

/*
undefinend -> NaN
null -> 0
true -> 1
false ->0
string '' ->0
string 'hola' -> NaN
*/

// convertir a booleano

//console.log(Boolean("hola"))

/*
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
*/

//console.log(Boolean(string(0)))
//console.log(Boolean(0))

//OPERADORES BASICOS

// Operadores unarios y binarios

let  res;
a = 5;
b = 2;

res = a + b;
res = a - b;
res = a * b;
res = a / b;
res = a % b;// mod
res = a ** b; // potencia

//alert('1' + 2);//12
//alert(1 + '2');//12

//alert(2 + 2 + '1')//41
//alert('1' + 2 + 2)//122

//alert(2 - '1'); //1
//alert('6' / '2'); //3
//alert('6' / '2a');//

//Operaciones unarias +

a = 1;
console.log(+a);

a = -1;
console.log(+a);

console.log(+true);
console.log(+false);
console.log(+NaN);
console.log(+undefined);
console.log(+null);
console.log(+"");

a = "2";
b = "3";

console.log(+a + +b);
console.log(Number(a)+Number(b))

// operaciones unarias -

a = 1;
console.log(-a);

a = 1;
console.log(-true);
console.log(-false);
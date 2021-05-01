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
TABLA CONVERSIONES BOOLEANOS
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

// Asignaciones

a = 2 + 3
a = b = c = 2 + 3

c = 2 + 3
b = c
a = b

c = 3 - (a = b + 1)

// Modificadores

a = a + 2;
a += 2;
a = a - 2
a -= 2;

// incremento y decremento

// ++ Incremento
// -- Decremento

a = 2;
a ++;
console.log(a); // 3

a = 2;
a --;
console.log(a); //1

// posicion fel incremento o decremento

a = 1;
b = ++ a;
console.log(b);

a = 1;
b = a ++;
c = a;
console.log(b); //1
console.log(c);// 2

// comparaciones 

console.log(2 > 1); // true
console.log(2 == 1); // false
//console.log(2 =!1); // true

let resultado = 2 > 1;

// Comparaciones entre cadenas

console.log('z' > 'A');
console.log('Show' > 'show');// false
console.log('casa' > 'casas');// false
console.log('casa' > 'casas'); //false
console.log('a' > 'A');
console.log('carro' > 'cerro');

//1. La letra minuscula es mayor que la mayuscula
//2. La palabra con mas letras despues de pasar la primera condicion es mayor que la de menos letras

//comparacion de diferentes tipos

// al comparar valores de diferentes tipos, JS convierte los valores a numeros

//toda comparacion con NaN es falsa


a = 0;
b = '0';

boleano_a = Boolean(a); //false
boleano_b = Boolean(b); // true

console.log(a == b);//true

console.log('**************')
console.log('2' > 1); // true
console.log('01' == 1);//true
console.log(true > 0); // true
console.log(false == 0); // true

//NaN
console.log('hola' > 0)// false
console.log('hola' < 0)// false
console.log('hola' == 0)// false

console.log('***** undefined*****')
//UNDEFINED

console.log(undefined > 0)//false
console.log(undefined < 0)//false


console.log('***** null*****')
//undefined
console.log(null > 0)//false
console.log(null < 0)//false
console.log(null >= 0)//false

console.log('******null y undefined ==******')
// el undefined y el null en las comparaciones de igualacion no estrictas
// actuan diferente: son iguales entre si, pero no a ningun otro valor

console.log(null == undefined); //true
console.log(null ==5) //false
console.log(undefined ==5)//false

console.log('****** no diferencia de 0 de falso == ********')

console.log(0 == false);// false
console.log('' == false);// true

// igualacion estricta

console.log(0 == false); //false
console.log( null == undefined);// false


// sentencia IF

// if de linea 
if(4 > 5) console.log('mensaje');

if(4 > 5){
    b = 5 + 3;
    console.log('mensaje');
}

/*
TABLA CONVERSIONES BOOLEANOS
undefined -> false
null -> false
string '' -> false
NaN -> false
0 -> false
'0' -> true
*/

if('45A' /3){
    console.log('no entro');
}

if('0'){
    console.log('entro');
}

if(4/2){
    console.log('entro')
}

if(1){
    console.log('entro o no entro?');
}

let edadx

if(edadx){
    console.log('variable definida');
}else{
    console.log('variable indefinida');
}
// haga un algoritmo que dado una edad imprima true si es 
// false si no lo es.

let edad_usuario = 17;
if(edad_usuario >= 18){
    console.log(true);
}else{
    console.log(false);
}
// lo mismo que el anterior pero mas optimizado
//console.log(edad_usurio>= 18)

// operador ternario

//condicion ? operacion verdadera : operacion falsa;
resultado = edad_usuario >=18 ? x = 5 : x=7;

// operador logico

// OR
/*
v or v = v
v or f = v
f or v = v
f or f = f
*/

console.log('*******OPERADOR OR*******');
console.log(true || true);//true
console.log(true || false);//true
console.log(false || true);//true
console.log(false || false);//false

if (4 ==4 || 2 > 5){
    console.log('verdadero');
}

// resultado = vañor_uno || valor_dos || valor_tres;
// 1. evalua los operandos de izquierda a derecha.
// 2. por cada operando, convierte el valor a booleano .si el resultado es true.
// se detiene y retorna el valor original de ese operando.
// 3. si todos los operandos han sido evaluados (todos eran falsos) retorna el ultimo operando.

let comparacion_booleana = true || false || true; //true
comparacion_booleana = '0' || '0';// '0'
comparacion_booleana = undefined || null || NaN || '';//''
comparacion_booleana = undefined || null || 3|| '';//3
comparacion_booleana = undefined || 'hola' || 3|| '';//'hola'
// resumen: devuelve el primer valor verdadero o el ultimo si todos son falsos

// prevalencia u orden entre or y and
// el AND tiene mas prevalencia que el OR
// a && b || c && d = (a && b) || (c && d)

// negacion

console.log(!true);// false
console.log(!false);//true
console.log(!!undefined);// false == boolean(underfined)

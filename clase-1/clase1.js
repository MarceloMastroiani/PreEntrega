// DE UNA LINEA 

/*
MULTI 
*/




//VARIABLES//


let nombre_usuario;
let edad_usuario;
let nota_usuario;
const legajo_usuario = "AB123";


//TIPOS DE DATOS//

// STRING O CADENA DE CARACTERES //
nombre_usuario = "Pepe"


// INT O NUMERO ENTERO //
edad_usuario = 25;

// FLOAT O NUMEROS DEC //
nota_usuario = 8.5;




//CAMBIO DE VALOR
nombre_usuario = "Luis"

nombre_usuario = 30;



//OPERADORES ARITMETICOS//

// SUMA + //

let num_uno = 30;
let num_dos = 40;
let suma;


suma = 60 + 20; //80

suma = 100 + 50; // 150

suma = num_uno + 60; //90

suma = num_dos + num_uno; //70



// RESTA - //

let resta;

resta = 100 - 20; //80

resta = 50 - num_uno; //20

resta = 20 - 10 + 30; //40


// MULTIPLICACION * //

let multi;

multi = 10 * 2; //20


// DIVISION / //

let divi;

divi = 50 / 2; //25



let test;

// COERCION DE DATOS //

test = "Jose" + 40;

console.log( test );

//CONCATENAR +

let nombre = "Pedro";
let apellido = "Lopez";
let resultado;

resultado = nombre + apellido;
console.log(resultado);




// I= I / O ---> input/output


// SALIDAS DE DATOS //

// alert("VIRUS DETECTED");


let valor = "Un mensaje guardado en una variable";
console.log("Mensaje desde el console log");
console.log( 10 );

console.log( valor );




// ENTRADAS

let nombre_alumno = prompt("Ingrese su nombre");
console.log("Bienvenido/a al sistema: " , nombre_alumno);




//

let num_a = prompt("Ingrese un numero");
let num_b = prompt("Ingrese otro numero");

// PARSE O CASTEO //

num_a = parseInt(num_a);
num_b = parseInt(num_b);

suma = num_a + num_b;

console.log("El resultado de la suma es: " , suma);






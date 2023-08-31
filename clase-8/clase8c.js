//STRINGS//

// LENGTH //
/*
let nombre_usuario = "jose ramon";
console.log("cantidad de caracteres: ", nombre_usuario.length );
*/


// toUpperCase

/*
let operacion = prompt("ingrese suma o resta");

operacion = operacion.toUpperCase();
console.log(operacion)
*/

/*
if( operacion == "SUMA"){


}

else if( operacion == "RESTA"){


}
*/


//toLowerCase

//console.log( operacion.toLowerCase());





// SLICE 

let colores = "rojo, azul, verde, amarillo";


let cortes = colores.slice(6,10);

console.log(colores);
console.log("cortes: ", cortes);





// REPLACE

let texto = "los gatos son muy buenos. mi gato es el mejor del mundo"
let otro_texto = texto.replace("gatos" , "perros");
let otro_texto_dos = texto.replaceAll("gatos" , "perros");

console.log( texto );
console.log( otro_texto );
console.log( otro_texto_dos );




// Trim

let usuario = "                  pepito                    "
let usuario_clean = usuario.trim();

console.log(usuario);
console.log(usuario.length);

console.log(usuario_clean);
console.log(usuario_clean.length);





// SPLIT

let usuarios = "laura,lopez,323132131,LL23";

let lista_usuarios = usuarios.split(",");

console.log(lista_usuarios);



//let listaAlumnos = []; ARREGLO VACIO

let listaAlumnos = ["roman" , "lucia" , "marcos" , "romina"];


console.log(listaAlumnos);

// OJO CON LA ASIGNACION DIRECTA //
//listaAlumnos = "pedro";



// ACCESO A LOS VALORES //


console.log( listaAlumnos[0] );
console.log( listaAlumnos[3] );



let listaRamdom = [ "pedro" , 30 , true , 19 , "marta" , ["perro" , "gato" , "raton"] , false , {nombre:"marcos" , apellido:"lopez"} ];

console.log( listaRamdom[4] ); //MARTA
console.log( listaRamdom[6] ); //FALSE
console.log( listaRamdom[7] ); //OBJETO

console.log( listaRamdom[5][2] ); //RATON


console.log( listaRamdom[7].nombre );

let usuario = listaRamdom[7];
console.log(usuario.nombre);


// ASIGNACION INDEXADA //
listaRamdom[1] = 55;

console.log( listaRamdom );




// PROPIEDADES DE LOS ARREGLOS //

console.log( "cantidad de elementos: ", listaRamdom.length );


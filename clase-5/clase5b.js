//FUNCION CONSTRUCTORA

function alumno(nombre , apellido , dni){

    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;

}


let alumno_uno = new alumno( "pepe" , "lopez" , 32131233);
let alumno_dos = new alumno( "laura" , "rojas" , 44321313);

console.log(alumno_uno);
console.log(alumno_dos);
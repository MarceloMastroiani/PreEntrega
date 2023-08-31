//CLASES//


class alumno_coder{

    constructor( nombre , apellido , dni ){
        //PROPIEDADES
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nota_uno = 0;
        this.nota_dos = 0;
    }

    //METODOS

    saludar(){
        console.log("hola buenas noches, mi nombre es: ", this.nombre)
    }

    get_datos(){
        console.log("<--- DATOS ALUMNOS/A --->")
        console.log("nombre: ", this.nombre );
        console.log("apellido: ", this.apellido );
        console.log("DNI: ", this.dni );
        console.log("");
    }

    get_notas(){
        console.log("<--- NOTAS DEL ALUMNO --->")
        console.log("nombre: ", this.nombre );
        console.log("nota uno: ", this.nota_uno );
        console.log("nota dos: ", this.nota_dos );
        console.log("")

    }

    set_notas_uno( nota ){
        if( nota > 0 && nota <= 10){

            this.nota_uno = nota;

        }
    }

    set_notas_dos( nota ){
        if( nota > 0 && nota <= 10){

            this.nota_dos = nota;

        }
    }



}




let alumno_uno = new alumno_coder("jose" , "lopez" , 31231323);
let alumno_dos = new alumno_coder("laura" , "romero" , 65552313)

//console.log(alumno_uno);
//console.log("nombre: ", alumno_uno.nombre );

//MUESTRO LOS DATOS
alumno_uno.get_datos();
alumno_dos.get_datos();

//MUESTRO LAS NOTAS
alumno_uno.get_notas();
alumno_dos.get_notas();

//SALUDAN
alumno_uno.saludar();
alumno_dos.saludar();



//primer parcial
//alumno_uno.nota_uno = 10
//alumno_dos.nota_dos = 11

alumno_uno.set_notas_uno(10);
alumno_dos.set_notas_uno()




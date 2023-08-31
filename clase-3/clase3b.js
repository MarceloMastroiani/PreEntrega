



/*
let nombre_usuario = prompt("ingrese su nobre de usuario o FIN");

while( nombre_usuario != "FIN"){
    console.log("Bienvenido al sistema: ", nombre_usuario);
    nombre_usuario = prompt("ingrese su nobre de usuario o FIN");
}
*/

//PIDO UN NUMERO POR TECLADO Y MUESTRO EL SIGUIENTE POR CONSOLA 
//SE FINALIZA CUANDO SE INGRESE UN NUMERO NEGATIVO

/*
let numero = prompt("ingrese un numero, se mostrara por consola el siguiente.");

numero = parseInt(numero);

while( numero >= 0 ){
    console.log("usted ingreso el numero: ", numero);
    console.log("el siguiente es: ", nuemro + 1);

    //ACTUALIZO

    numero = prompt("ingrese un numero, se mostrara por consola el siguiente.");

    numero = parseInt(numero);

}
*/



let nombre_usuario = prompt("ingrese su nombre");


do{
    if( nombre_usuario == "ERROR"){
        console.log("SE DETECTO UN ERROR EN LA CONSULTA");
    }
    else{
        console.log("bienvendo al sistema");
        nombre_usuario = prompt("ingrese su nombre");
    }
}

while( nombre_usuario != "ERROR")
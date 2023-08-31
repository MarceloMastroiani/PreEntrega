

// FOR //




// FOR( desde ; hasta ; actualizacion )
/*
for( let i = 0 ; i < 10; i = i + 1 ){

    console.log("Mensaje desde el bucle FOR");
    console.log("Estamos en la vuelta ", i );


}
*/





// Se ingresan 5 usuarios por teclao, ir dando la binvenida a cada uno

/*
for( let i = 0 ; i < 5 ; i = i +1 ){

    let nombreUsuario = prompt("Ingrese su nomre");
    console.log("Bienvenido/a; ", nombreUsuario)
}
*/




// MOSTRAR POR CONSOLA LOS NUMEROS DESDE EL 0 AL 50

/*
for( let i = 0 ; i < 51 ; i = i + 1 ){

    console.log("esta es la vuelta; ", i)
}
*/




// SE PIE UN NUMERO POR TECLADO Y SE MUESTRA LA TABLA DEL TIEMPO

/*
let numero_usuario = prompt("Elija un numero:")

numero_usuario = parseInt(numero_usuario)

for( let i = 0 ; i <= 10 ; i = i + 1 ){

    let resultado = numero_usuario * i;
    console.log( numero_usuario , "x" , i , "=" , resultado );
}
*/


let usuario_registrados = "pepe";
let intentos = 1;

for( let i =0 ; i < 5 ; i = i = 1){

    let nombreUsuario = prompt("ingrese su nombre ");

    if( nombreUsuario != usuario_registrados && intentos < 3){
        console.log("DATOS INCORRECTOS");
        intentos = intentos + 1;
        continue;
    }

    if( intentos == 4 ){
        console.log("CHAU TARJETA");
        break;
    }

        console.log("Bienvenido/a: ", nombreUsuario);
        
}
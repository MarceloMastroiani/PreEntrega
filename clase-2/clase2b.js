
/*
let edad_usuario = 18;


if( edad_usuario >= 18 ){
    console.log( "Bienvenido/a el sistema de compra")
}

*/





let nombre_usuario = prompt("Ingrese su nombre");
let nivel_edu = prompt("Ingrese el niverl: Primaria | Jardin");
let edad_usuario = prompt("Ingrese su edad")


if( nivel_edu == "Jardin" && edad_usuario <= 6 ){
    console.log("Bienvenido/a al panel de usuario de Jardin:", nombre_usuario);
}
else if( nivel_edu == "Primaria"){
    console.log("Bienvenido/a al panel de usuario de primaria:", nombre_usuario);
}
else{
    console.log("Se eligio un nivel incorrecto");
}





// OPERADORES LOGICOS //


// AND ------ Y ------ && //

// ------ O ------ || //




function saludar(){
    console.log("hola");
}



// FUNCIONES ANONIMAS //

let saludo = function(){
    console.log("hola desde la funcion anonima");
}


// FUNCIONES ARROW //

/*
let saludo_arrow = ()=>{
    console.log("hola desde el arrow");
    console.log("hola desde el arrow");
    console.log("hola desde el arrow");
    console.log("hola desde el arrow");
}
*/

let saludo_arrow = ()=>"pepe"



saludo();
console.log( saludo_arrow() );






// RETORNAR FUNCIONES //


function doble( num ){

    return num * 2
}


function triple( num ){

    return num * 3
}



let resultado_doble = doble(50);
console.log("el doble del numero es: ",resultado_doble)






function crear_multiplicador( multiplicador ){

    // return ( num )=> num * multiplicador

    return function( num ){
        
        return num * multiplicador
    }


}


let doble_num = crear_multiplicador(2);
console.log( doble_num(80) );
console.log( doble_num(150) );


let triple_num = crear_multiplicador(3);
console.log( triple_num(50) );




//RECIBIR FUNCIONES POR PARAMETROS//


function saludar( nombre ){

    console.log("hola :", nombre)
}


function saludar_a_todos( arr , fn_saludar ){
    
    for( let alumno of arr){
        fn_saludar(alumno);
    }
}

let lista_alumnos = ["ariel" , "laura" , "marcela" , "pedro"];

saludar_a_todos(lista_alumnos , saludar);






//forEach

function doble_numero( num ){

    console.log("el numero es: ", num);
    console.log("y el doble es: ",num * 2);
}



let numeros = [10 , 2 , 55 , 32 , 11 , 28 , 67 , 99 ];


numeros.forEach( doble_numero );

//numeros.forEach( (num)=>console.log("el doble es: ", num * 2) )





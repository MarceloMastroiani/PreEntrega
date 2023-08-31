

function calcular_iva( precio ){

    let iva = precio * 0.21;

    return iva

}

function calcular_cuotas( precio , cuotas){

    if( cuotas == 3){
        let interes = precio * 0.25;
        return interes
    }

    else if( cuotas == 6){
        let interes = precio * 0.50;
        return interes
    }

    else if( cuotas == 12){
        let interes = precio * 0.90;
        return interes
    }

    else if( cuotas == 1){
        
        return 0
    }


}


//LOGICA IU COMPRA
let precio_lampara_lista = 1000;
let cuotas = prompt("ingrese la cantidad de cuotas: 3 , 6 o 12");

let iva = calcular_cuotas(precio_lampara_lista);
let precio_final = calcular_cuotas(precio_lampara_lista, cuotas) = precio_lampara_lista = calcular_iva(precio_lampara_lista);


console.log("usted va a comprar una lampara");
console.log("precio", precio_lampara_lista);
console.log("IVA", calcular_iva(precio_lampara_lista));
console.log("precio + iva:", calcular_iva(precio_lampara_lista) + precio_lampara_lista)
console.log("cuotas:", cuotas);
console.log("interes: ", calcular_cuotas(precio_lampara_lista, cuotas));
console.log("precio final", precio_final);
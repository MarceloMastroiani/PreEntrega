
// FUNCIONES //



//FUNCION PARA CALCULAR EL INTERES DEL PRESTAMO//

function calculo_del_prestamo( monto , cuotas ){

    monto = parseFloat(monto);
    cuotas = parseInt(cuotas);

    let prestamo_final = 0;

    if( cuotas == 3 && monto > 0){
        prestamo_final = monto + (monto * 0.25);
        return prestamo_final
    }
    else if( cuotas == 6 && monto > 0 ){
        prestamo_final = monto + (monto * 0.60);
        return prestamo_final
    }
    else if( cuotas == 12  && monto > 0){
        prestamo_final = monto + (monto * 1);
        return prestamo_final
    }
    else if( cuotas == 24  && monto > 0){
        prestamo_final = monto + (monto * 2);
        return prestamo_final
    }
    
}

//FUNCION PARA SACAR LAS CUOTAS QUE SE DEVEN PAGAR POR MES//

function cuotas_por_mes(resultado_del_prestamo , cuotas){


    let cuotas_mes = 0;
    
    cuotas_mes = resultado_del_prestamo / cuotas;
    return cuotas_mes 


}



// SIMULADOR //

let monto = 0;

console.log("¡Bienvenido/a a nuestra pagina de prestamos!")

while( monto != "FIN" ){

    monto = prompt("Ingrese el monto que desea solicitar o FIN");

    if( monto != "FIN"){

        let cuotas = prompt("Ingrese la cantidad de cuotas: 3, 6, 12 y 24");
        let resultado_del_prestamo = calculo_del_prestamo( monto , cuotas );
        let resultado_cuotas_mes = cuotas_por_mes(resultado_del_prestamo , cuotas);

        console.log("Pediste: ", monto);
        console.log("Cuotas: ", cuotas);
        console.log(cuotas,"cuotas de:",resultado_cuotas_mes);
        console.log("Devolves el total de: ",resultado_del_prestamo );
        



    }
    else{
        console.log("Muchas gracias");
    }

}
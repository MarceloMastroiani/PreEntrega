

// REDUCE //

let carrito = [
    {nombre:"cocina" , precio:20000},
    {nombre:"silla" , precio:10000},
    {nombre:"mate" , precio:4000},
    {nombre:"teclado" , precio:6000},
    {nombre:"mouse" , precio:14000},
    {nombre:"lampara" , precio:8000},
]


function calcular_total( acu , producto ){

    acu = acu + producto.precio;
    return acu 
}



let venta_total = carrito.reduce( calcular_total , 0);
console.log("total de la compra: ", venta_total);





// SORT //

let lista_alumnos =["romina" , "pepe" , "laura" , "ana" , "julian" , "blanca" , "carlos"];

console.log(lista_alumnos);
console.log(lista_alumnos.sort);


function ordenar( a , b){

    return a - b
}




let lista_numeros = [3 , 1 , 23 , 10 , 99 , 100 , 230];
let resultado_sort = lista_numeros.sort( ordenar ); //(a,b)=>a-b// 

console.log(lista_numeros);
console.log(lista_numeros.sort);

// FIND //


let usuarios = [
    {nombre:"marta" , apellido:"rojas" , edad:33},
    {nombre:"jose" , apellido:"lopez" , edad:45},
    {nombre:"diego" , apellido:"marladona" , edad:53},
    {nombre:"gabriel" , apellido:"bartistuta" , edad:22},
    {nombre:"lionel" , apellido:"mersi" , edad:25},
    {nombre:"romina" , apellido:"gomez" , edad:19},
]



function buscar_usuario(obj_usuario){

    return obj_usuario.nombre == "romina"
}

let resultado_find = usuarios.find(buscar_usuario);
console.log(resultado_find);






// FILTER //


let usuarios_dos = [
    {nombre:"marta" , apellido:"rojas" , edad:33},
    {nombre:"jose" , apellido:"lopez" , edad:45},
    {nombre:"diego" , apellido:"marladona" , edad:53},
    {nombre:"gabriel" , apellido:"bartistuta" , edad:22},
    {nombre:"lionel" , apellido:"mersi" , edad:25},
    {nombre:"romina" , apellido:"gomez" , edad:19},
]


function mayorEdad( obj_usuario ){

    return obj_usuario.edad >= 18
}




let resultado_filter = usuarios_dos.filter( mayorEdad );
console.log(resultado_filter);




// MAP //

let productos = [
    {nombre:"cocina" , precio:20000},
    {nombre:"silla" , precio:10000},
    {nombre:"mate" , precio:4000},
    {nombre:"teclado" , precio:6000},
    {nombre:"mouse" , precio:14000},
    {nombre:"lampara" , precio:8000},
]


function agrgar_iva(obj_producto){

    let iva = obj_producto.precio * 0.21;
    
    return {
        nombre: obj_producto.nombre,
        precio: obj_producto.precio + iva 
    }
}




let resultado_map = productos.map( );
console.log( resultado_map );





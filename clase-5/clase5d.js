

//CREAR UNA CLASE productos
//PROPIEDADES nombre , precio , stock

//METODOS
/*

get_datos: trae todos los datos del producto
get_stock: retorna true si existe stock disponible, sino retorna false.

*/

class producto{

    constructor( nombre , precio , stock){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    get_datos(){
        console.log("<--- DATOS DEL PRODUCTOS --->")
        console.log("nombre: ", this.nombre );
        console.log("precio: ", this.precio );
        console.log("stock: ", this.stock );
        console.log("")
    }

    get_stock(){
        
        if(this.stock > 0){
            return true
        }
        else{
            return false
        }
    }


    venta( cantidad ){

        if( this.stock >= cantidad ){
            console.log("gracias por su compra");
            this.stock = this.stock - cantidad;

        }
        else{
            console.log("solo tengo: ", this.stock );
        }
    }
}



let producto_uno = new producto("lampara" , 1000 , 3)
let producto_dos = new producto("radio" , 5000 , 5 )
let producto_tres = new producto("mouse" , 8000 , 2)


producto_uno.get_datos();
producto_dos.get_datos();
producto_tres.get_datos();





// VENTA DE PRODUCTO //

// EL USUARIO QUIERE COMPRAR UNA LAMPARA--> PUEDE VENIR DE UN PROMPT


if( producto_uno.get_stock() ){
        //TENGO STOCK PARA VENDER
    let cantidad = prompt("ingrese la cantida que quiera comprar");
    console.log("tenemos stock");
    cantidad = parseInt(cantidad);
    producto_uno.venta(cantidad)
    //producto_uno

}
else{
    console.log("no hay stock")
}
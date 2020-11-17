export class Articulo{

    rebajado:boolean;
    color:string;
    talla:string;
    precio:number;
    precioRebajado:number;
    descripcion:string;
    nombre:string;
    imagen:string;
    cantidad:number;

    constructor(nombre:string, descripcion:string, talla:string, precio:number, precioRebajado:number,
                rebajado:boolean, cantidad:number){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.talla = talla;
        this.precio = precio;
        this.precioRebajado = precioRebajado;
        this.rebajado = rebajado;
        this.cantidad = cantidad;
    }
}
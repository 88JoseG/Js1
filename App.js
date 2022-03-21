//Dom de eventos
document
.getElementById("formulario-producto")
.addEventListener("submit", function(elemento){
    elemento.preventDefault(); //evalua el comportamiento del elemento
    //obtener valores de formulario 
    const name = document.getElementById("name").value,
    precio = document.getElementById("precio").value,
    año = document.getElementById("año").value;

    //crear nuevo objeto
    const producto = new Producto(nombre,precio,año);

    //crear nuevo usuario
    const usuario = new Usuario();

    //Boton de validacion
    if(nombre === "" || precio === "" || año === "" ){
        usuario.showMessage("Por favor insertar nombre de usuario");
    }

    //Guardar
    usuario.AddProducto(producto)
    usuario.showMessage("Producto agregado correctamente");
    usuario.resetForm();
});

document.getElementById("Lista-producto").addEventListener("click", (elemento)=>{
    const usuario=new Usuario();
    usuario.deleteProduct(elemento.target);
    elemento.preventDefault();
});

//Producto clase
export class Producto{
    constructor(nombre, precio, año){
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }
}

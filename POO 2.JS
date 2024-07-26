//Creamos una clase
class articulo {
    constructor(codigo, nombrep, precio, descripcion, limite) {
        this._codigo = codigo;
        this._nombrep = nombrep;
        this._precio = precio;
        this._descripcion = descripcion;
        this._limite = limite;
    }
    mostrarinfo() {
        return `Codigo: ${this._codigo} Nombre del producto: ${this._nombrep} Precio: $${this._precio} Descripcion: ${this._descripcion} Limite: ${this._limite}`
}
}
//Instanciar o crear los objetos
let p1 = new articulo(
    1234,
    "Pepsi",
    1000,
    "Una botella de Pepsi es un envase trasnparente con etiqueta azul que contiene 500 ml de refresco de cola dulce y gasificado",
    50
);
let p2 = new articulo(
    1235,
    "Paso de los toros",
    1000,
    "Una botella de Paso de los toros es un envase transparente con etiqueta verde que contiene 500 ml de refresco de pomelo dulce y gasificado",
    50
);
let p3 = new articulo(
    1236,
    "Manaos",
    750,
    "Una bottella de Manaos es un envase trasnparente con una etiqueta roja que contiene 500 ml de refresco de cola dulce y gasificado",
    25
);

//Imprimir en pantalla los valores de atributos:
alert(p1.mostrarinfo());

alert(p2.mostrarinfo());

alert(p3.mostrarinfo());

//Imprimir en pantalla los valores de atributos:
document.write(p1._codigo, `<br>`)
document.write(p1._nombrep, `<br>`)
document.write(p1._precio, `<br>`)
document.write(p1._descripcion, `<br>`)
document.write(p1._limite, `<br>`)
document.write(`<br>`)
document.write(p2._codigo, `<br>`)
document.write(p2._nombrep, `<br>`)
document.write(p2._precio, `<br>`)
document.write(p2._descripcion, `<br>`)
document.write(p2._limite, `<br>`)
document.write(`<br>`)
document.write(p2._codigo, `<br>`)
document.write(p2._nombrep, `<br>`)
document.write(p2._precio, `<br>`)
document.write(p2._descripcion, `<br>`)
document.write(p2._limite, `<br>`)
document.write(`<br>`)
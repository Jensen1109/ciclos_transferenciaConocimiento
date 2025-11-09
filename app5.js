// Se inicializa el total de la compra en cero
let total = 0;

// Se crea una variable para controlar si el usuario desea seguir comprando
let seguirComprando = "si";

// Se inicia un ciclo que se repite mientras el usuario escriba "si"
while (seguirComprando === "si") {

    // Se solicita al usuario el precio del producto
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));

    // Se verifica que el precio sea mayor a cero
    if (precio > 0) {
        total += precio; // Se suma el precio al total
    } else {
        alert("Precio invalido. Ingrese un numero mayor a cero.");
        continue; // Se repite la iteracion sin preguntar si desea continuar
    }

    // Se pregunta al usuario si desea agregar otro producto
    seguirComprando = prompt("Desea agregar otro producto? (si/no)").toLowerCase();
}

// Se verifica si el total supera los 100000 para aplicar el descuento
if (total > 100000) {
    let descuento = total * 0.10; // Se calcula el 10 por ciento de descuento
    total -= descuento; // Se aplica el descuento al total
    alert(`Se aplico un descuento de $${descuento}`);
}

// Se muestra el total final de la compra
alert(`Total a pagar: $${total}`);

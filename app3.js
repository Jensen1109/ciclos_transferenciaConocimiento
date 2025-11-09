// Se define el saldo inicial del usuario como 1000
let saldo = 1000;

// Se inicia un ciclo while que se ejecuta mientras el saldo sea mayor que cero
while (saldo) {

    // Se muestra el saldo actual disponible al usuario
    alert(`Sueldo actual ${saldo}`);

    // Se solicita al usuario que ingrese el monto que desea retirar
    let retiro = parseFloat(prompt("Cuanto desea retirar?"));

    // Se verifica que el valor ingresado sea un numero valido y mayor que cero
    if (!isNaN(retiro) && retiro > 0) {

        // Se verifica si el usuario tiene suficiente saldo para hacer el retiro
        if (retiro <= saldo) {

            // Si el retiro es valido, se resta el monto al saldo
            saldo -= retiro;

            // Se muestra un mensaje confirmando el retiro y el nuevo saldo
            alert(`Retiro exitoso nuevo saldo ${saldo}`);

        } else {

            // Si el monto es mayor que el saldo disponible, se muestra un mensaje de error
            alert("Saldo insuficiente");
        }

    } else {

        // Si el valor ingresado no es valido, se muestra un mensaje de advertencia
        alert("Por favor ingrese un monto valido");
    }

    // Se pregunta al usuario si desea hacer otro retiro
    if (!confirm("Deseas hacer otro retiro?")) {

        // Si el usuario elige no continuar, se muestra un mensaje de despedida
        alert("Gracias por usar el cajero");

        // Se sale del ciclo usando break
        break;
    }
}

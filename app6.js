// Se genera un numero aleatorio entre 1 y 20
let numeroSecreto = Math.floor(Math.random() * 20) + 1;

// Se inicializa la variable para almacenar el intento del usuario
let intento = 0;

// Se inicia un ciclo que se repite hasta que el usuario adivine el numero
while (intento !== numeroSecreto) {

    // Se solicita al usuario que ingrese un numero
    intento = parseInt(prompt("Adivina el numero entre 1 y 20:"));

    // Se verifica si el intento es igual al numero secreto
    if (intento === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el numero.");
    }
    // Si el intento es menor, se da una pista
    else if (intento < numeroSecreto) {
        alert("El numero secreto es mayor.");
    }
    // Si el intento es mayor, se da una pista
    else if (intento > numeroSecreto) {
        alert("El numero secreto es menor.");
    }
}

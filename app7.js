// Se inicia un ciclo for que se repite 10 veces
for (let i = 1; i <= 10; i++) {

    // Se solicita al usuario que ingrese un numero entre 1 y 10
    let n = parseInt(prompt("Ingrese un numero del 1 al 10;"));

    // Se verifica si el numero ingresado es par usando el operador modulo
    if (n % 2 == 0) {

        // Si el residuo de dividir entre 2 es cero, el numero es par
        alert(`El numero ${n} es par`);

    } else {

        // Si el residuo no es cero, el numero es impar
        alert(`El numero ${n} es impar`);
    }
}

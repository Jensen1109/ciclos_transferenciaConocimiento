// Se inicia un ciclo for que recorre los numeros del 1 al 10
for (let i = 1; i <= 10; i++) {

    let n = parseInt(prompt("Ingrese un numero del 1 al 10;"))
    // Se verifica si el numero actual es divisible por 2
    if (n % 2 == 0) {

        // Si el residuo es cero, el numero es par
        alert(`El numero ${n} es par`);

    } else {

        // Si el residuo no es cero, el numero es impar
        alert(`El numero ${n} es impar`);
    }
}

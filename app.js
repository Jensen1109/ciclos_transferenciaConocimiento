// Recorremos los números del 2 al 50 (1 no es primo)
for(let i = 2; i<=50; i++)
{
    // Suponemos que el número actual es primo
    let esprimo = true;

    // Recorremos todos los posibles divisores menores que el número actual
    for(let j = 2 ; j<i;j++)
    {
        // Si encontramos un divisor exacto, el número no es primo
        if(i % j  == 0)
        {
            esprimo = false;  // Marcamos que no es primo
            break;  // Salimos del ciclo interno para ahorrar tiempo
        }
    }
    // Si no se encontró ningún divisor, confirmamos que es primo
    if(esprimo){
        // Mostramos el número primo
        alert(`numero primo: ${i}`)
    }
}
// Mensaje final indicando que se terminó el proceso
alert("Se acabaron los numeros primos")
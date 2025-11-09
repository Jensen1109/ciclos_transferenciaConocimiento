// Declaramos una variable de control para repetir el proceso
let repetir = true;
// Iniciamos un ciclo que se ejecuta mientras el usuario quiera seguir consultando tablas
while(repetir)
{
    // Solicitamos al usuario que ingrese un número
    let numero = parseInt(prompt("Ingrese un numero para ver su tabla"))

// Verificamos que el valor ingresado sea un número válido
    if(!isNaN(numero))
    {
        // Recorremos los números del 1 al 12 para generar la tabla de multiplicar
        for(let i = 1; i<=12; i++)
        {
            // Recorremos los números del 1 al 12 para generar la tabla de multiplicar
            alert(`${numero} = ${numero*i}`)
        }
    }
    else
    {
        // Si el valor ingresado no es válido, mostramos un mensaje de error
        alert("Ingrese un numero valido")
    }

    // Preguntamos si desea consultar otra tabla
    let respuesta = prompt("Desea consultar otra tabla ¿si o no?")

    // Si la respuesta no es "sí", salimos del bucle
    if (respuesta !== "si" && respuesta !== "SI")
    {
        repetir = false;
        alert("Gracias por visitarnos")
    }
}
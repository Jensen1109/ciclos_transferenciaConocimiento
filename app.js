// Inicia un bucle que recorre los números del 0 al 50
for(let i = 2; i<=50; i++)
{
    let esprimo = true;

    for(let j = 2 ; j<i;j++)
    {
        if(i % j  == 0)
        {
            esprimo = false;
            break;
        }
    }
    if(esprimo){
        alert(`numero par: ${i}`)
    }
}
// Muestra una alerta final indicando que el proceso ha terminado
alert("Se acabaron los numeros primos")
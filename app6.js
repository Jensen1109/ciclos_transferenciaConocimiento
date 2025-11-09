let numeroSecreto  = Math.floor(Math.random()*20)+1;

let intento  = 0;

while(intento !== numeroSecreto)
{
    intento = parseFloat(prompt("Ingresa el numero del 1 alo 20: "))

    if (intento === numeroSecreto)
    {
        alert("Felicidades adivinaste el numero secreto")
    }
    if(intento<numeroSecreto)
    {
        alert("El numero secreto es mayor")
    }
    else if( intento>numeroSecreto)
    {
        alert("El numero secreto es menor")
    }
}
let saldo  = 1000

while(saldo)
{
    alert(`Suedlo actual ${saldo}`)

    let retiro  = parseFloat(prompt("Cuanto desea retirar?"))

    if(!isNaN(retiro) && retiro>0)
    {
        if(retiro<= saldo)
        {
            saldo-= retiro
            alert(`Retiro exitoso nuevo saldo ${saldo}`)
        }
        else
        {
            alert("Saldo insuficiente")
        }
    }
    else{
        alert("Por favor ingrese un monto valido")
    }
    if(!confirm("Deseas hacer otro retiro?")){
        alert("Gracias por usar el cajero")
        break;
    }
}
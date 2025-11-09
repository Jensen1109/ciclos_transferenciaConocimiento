

for(let estudiante = 1; estudiante <=5; estudiante++)
{
    let sumaNotas = 0;
    for(let nota = 1; nota<=3; nota++)
    {
        let valor   = parseFloat(prompt(`Estudiante  ${estudiante} ingrese la nota ${nota}`))
        
        let notaNumerica  = parseFloat(valor)

        if(notaNumerica>= 0 && notaNumerica<=5)
        {
            sumaNotas+=notaNumerica
        }
        else{
            alert("Nota invalida ingresa un numero entre 1 y 5")
            nota--;
        }
    }
    let promedio  = sumaNotas/3

    alert(`Estudaiante ${estudiante} - promedio: ${promedio}`)

    if(promedio>=3.0)
    {
        alert("Aprobado ")
    }
    else
    {
        alert("Reprobado")
    }

}
// Se inicia un ciclo para recorrer los 5 estudiantes
for (let estudiante = 1; estudiante <= 5; estudiante++) {

    // Se inicializa la suma de notas en cero
    let sumaNotas = 0;

    // Se inicia un ciclo para pedir 3 notas por estudiante
    for (let nota = 1; nota <= 3; nota++) {

        // Se solicita al usuario que ingrese una nota
        let valor = prompt(`Estudiante ${estudiante} - Ingrese la nota ${nota}:`);

        // Se convierte el valor ingresado a numero decimal
        let notaNumerica = parseFloat(valor);

        // Se verifica que la nota este entre 0 y 5
        if (notaNumerica >= 0 && notaNumerica <= 5) {
            sumaNotas += notaNumerica; // Se suma la nota al total
        } else {
            alert("Nota invalida. Ingrese un numero entre 0 y 5.");
            nota--; // Se repite la nota actual
        }
    }

    // Se calcula el promedio dividiendo la suma entre 3
    let promedio = sumaNotas / 3;

    // Se muestra el promedio del estudiante
    alert(`Estudiante ${estudiante} - Promedio: ${promedio.toFixed(2)}`);

    // Se determina si aprueba o reprueba
    if (promedio >= 3.0) {
        alert("Resultado: Aprobado");
    } else {
        alert("Resultado: Reprobado");
    }
}

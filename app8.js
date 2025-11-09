let contraseña = 123;
let usuario = "cr7"
for (let intentos = 1; intentos<=3; intentos++)
{
    let usuario  = prompt("Ingrese el usuario: ")
    let contraseña =  parseInt(prompt("Ingrese la contraseña: "))
    
    if(usuario === "cr7" && contraseña === 123)
    {
        alert("Bienvenido")
        break; 
    }
    else
    {
        alert("Acceso denegado")
    }
}

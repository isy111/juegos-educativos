let numero1;
let numero2;
let resultado;
function nuevaSuma(){
    numero1 = Math.floor(Math.random()*10)+1;
    numero2 = Math.floor(Math.random()*10)+1;
    resultado = numero1 + numero2;
    document.getElementById("pregunta").innerHTML =
    numero1 + " + " + numero2 + " = ?";
    document.getElementById("respuesta").value = "";
    document.getElementById("mensaje").innerHTML = "";
}
function comprobar(){
    let respuestaUsuario =
    parseInt(document.getElementById("respuesta").value);
    if(respuestaUsuario === resultado){
        document.getElementById("mensaje").innerHTML =
        "✅ ¡Correcto!";
    }else{
        document.getElementById("mensaje").innerHTML =
        "❌ Inténtalo otra vez";
    }
}
nuevaSuma();
let respuestaCorrecta;
let puntos = 0;
let correctas = 0;
let incorrectas = 0;
let preguntaActual = 1;
let totalPreguntas = 10;
function nuevaPregunta(){
    if(preguntaActual > totalPreguntas){
        terminarJuego();
        return;
    }
    document.getElementById("actual").innerHTML =
    preguntaActual;
    let n1 = Math.floor(Math.random() * 20) + 1;
    let n2 = Math.floor(Math.random() * 20) + 1;
    respuestaCorrecta = n1 + n2;
    document.getElementById("pregunta").innerHTML =
    n1 + " + " + n2 + " = ?";
    let respuestas = [respuestaCorrecta];
    while(respuestas.length < 4){
        let falsa =
        respuestaCorrecta +
        Math.floor(Math.random() * 10) - 5;
        if(
            falsa !== respuestaCorrecta &&
            !respuestas.includes(falsa)
        ){
            respuestas.push(falsa);
        }
    }
    respuestas.sort(() => Math.random() - 0.5);
    document.getElementById("b1").innerHTML = respuestas[0];
    document.getElementById("b2").innerHTML = respuestas[1];
    document.getElementById("b3").innerHTML = respuestas[2];
    document.getElementById("b4").innerHTML = respuestas[3];
}
function actualizarEstadisticas(){
    let total = correctas + incorrectas;
    let porcentaje = 0;
    if(total > 0){
        porcentaje =
        Math.round((correctas / total) * 100);
    }
    document.getElementById("correctas").innerHTML =
    correctas;
    document.getElementById("incorrectas").innerHTML =
    incorrectas;
    document.getElementById("porcentaje").innerHTML =
    porcentaje;
}
function verificar(numero){
    if(numero === respuestaCorrecta){
        puntos++;
        correctas++;
        document.getElementById("mensaje").innerHTML =
        "✅ ¡Correcto!";
    }else{
        incorrectas++;
        document.getElementById("mensaje").innerHTML =
        "❌ Incorrecto";
    }
    actualizarEstadisticas();
    preguntaActual++;
    setTimeout(() => {
        nuevaPregunta();
    }, 700);
}
function terminarJuego(){
    let porcentaje =
    Math.round((correctas / totalPreguntas) * 100);
    document.getElementById("pregunta").innerHTML =
    "🎉 Juego Terminado";
    document.getElementById("mensaje").innerHTML =
    `
    <br>
    🏆 Puntaje: ${puntos}/10 <br><br>
    ✅ Correctas: ${correctas} <br>
    ❌ Incorrectas: ${incorrectas} <br>
    📊 Acierto: ${porcentaje}% 
    `;
    document.getElementById("b1").style.display = "none";
    document.getElementById("b2").style.display = "none";
    document.getElementById("b3").style.display = "none";
    document.getElementById("b4").style.display = "none";
}
document.getElementById("b1").onclick = function(){
    verificar(Number(this.innerHTML));
};
document.getElementById("b2").onclick = function(){
    verificar(Number(this.innerHTML));
};
document.getElementById("b3").onclick = function(){
    verificar(Number(this.innerHTML));
};
document.getElementById("b4").onclick = function(){
    verificar(Number(this.innerHTML));
};
nuevaPregunta();
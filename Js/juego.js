const simbolos = [
    "imagenes/Campana.png",
    "imagenes/Cereza.png",
    "imagenes/Estrella.png",
    "imagenes/Limon.png",
    "imagenes/Sandia.png"
];

let ganaste = 0;
let casi = 0;
let perdiste = 0;

function jugar() {
    let s1 = simbolos[Math.floor(Math.random() * simbolos.length)];
    let s2 = simbolos[Math.floor(Math.random() * simbolos.length)];
    let s3 = simbolos[Math.floor(Math.random() * simbolos.length)];

    document.getElementById("espacio1").src = s1;
    document.getElementById("espacio2").src = s2;
    document.getElementById("espacio3").src = s3;

    const celdaGanaste = document.getElementById("t_ganaste");
    const celdaCasi = document.getElementById("t_casi");
    const celdaPerdiste = document.getElementById("t_perdiste");

    celdaGanaste.innerText = ganaste;
    celdaCasi.innerText = casi;
    celdaPerdiste.innerText = perdiste;

    let resultadoTexto = "";
    let resultadoElemento = document.querySelector(".Resultado")

    if (s1 === s2 && s2 === s3) {
        resultadoTexto = "Felicitaciones Ganaste";
        ganaste++;
        document.querySelector.style.color = "rgb(3, 71, 50)";
        aplicarAnimacion(document.getElementById("t_ganaste"));
    }

    else if (s1 === s2 || s2 === s3 || s1 === s3) {
        resultadoTexto = "Terrible, Casi Lo Logras";
        casi++;
        document.querySelector.style.color = "rgb(2, 128, 144)";
        aplicarAnimacion(document.getElementById("t_casi"));

    } else {
        resultadoTexto = "Que Pena, Perdiste";
        perdiste++;
        document.querySelector.style.color = "rgb(112, 22, 60)";
        aplicarAnimacion(document.getElementById("t_perdiste"));
    }

    resultadoElemento.innerText = resultadoTexto;
    document.getElementById("t_ganaste").innerText = ganaste;
    document.getElementById("t_casi").innerText = casi;
    document.getElementById("t_perdiste").innerText = perdiste;
}
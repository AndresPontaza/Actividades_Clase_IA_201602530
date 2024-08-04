let contadorEstados = {
    estado1: 0,
    estado2: 0,
    estado3: 0,
    estado4: 0,
    estado5: 0,
    estado6: 0,
    estado7: 0,
    estado8: 0
};

let estados = ["A", "DIRTY", "DIRTY"];

function agenteReflejo(ubicacion, estado) {
    if (estado == "DIRTY") return "CLEAN";
    else if (ubicacion == "A") return "RIGHT";
    else if (ubicacion == "B") return "LEFT";
}

function ejecutarSimulacion(estados) {
    var ubicacion = estados[0];
    var estado = estados[0] == "A" ? estados[1] : estados[2];
    
    // Actualizar contadores
    if (ubicacion == "A" && estados[1] == "DIRTY" && estados[2] == "DIRTY") {
        contadorEstados.estado1++;
        document.getElementById("e1").innerHTML = `Estado 1: ${contadorEstados.estado1}`;
    } else if (ubicacion == "A" && estados[1] == "CLEAN" && estados[2] == "DIRTY") {
        contadorEstados.estado5++;
        document.getElementById("e5").innerHTML = `Estado 5: ${contadorEstados.estado5}`;
    } else if (ubicacion == "A" && estados[1] == "DIRTY" && estados[2] == "CLEAN") {
        contadorEstados.estado3++;
        document.getElementById("e3").innerHTML = `Estado 3: ${contadorEstados.estado3}`;
    } else if (ubicacion == "A" && estados[1] == "CLEAN" && estados[2] == "CLEAN") {
        contadorEstados.estado7++;
        document.getElementById("e7").innerHTML = `Estado 7: ${contadorEstados.estado7}`;
    } else if (ubicacion == "B" && estados[1] == "DIRTY" && estados[2] == "DIRTY") {
        contadorEstados.estado2++;
        document.getElementById("e2").innerHTML = `Estado 2: ${contadorEstados.estado2}`;
    } else if (ubicacion == "B" && estados[1] == "CLEAN" && estados[2] == "DIRTY") {
        contadorEstados.estado4++;
        document.getElementById("e4").innerHTML = `Estado 4: ${contadorEstados.estado4}`;
    } else if (ubicacion == "B" && estados[1] == "DIRTY" && estados[2] == "CLEAN") {
        contadorEstados.estado6++;
        document.getElementById("e6").innerHTML = `Estado 6: ${contadorEstados.estado6}`;
    } else if (ubicacion == "B" && estados[1] == "CLEAN" && estados[2] == "CLEAN") {
        contadorEstados.estado8++;
        document.getElementById("e8").innerHTML = `Estado 8: ${contadorEstados.estado8}`;
    }

    var resultadoAccion = agenteReflejo(ubicacion, estado);
    document.getElementById("log").innerHTML += `<br>Ubicación: ${ubicacion} | Acción: ${resultadoAccion}`;
    
    if (resultadoAccion == "CLEAN") {
        if (ubicacion == "A") estados[1] = "CLEAN";
        else if (ubicacion == "B") estados[2] = "CLEAN";
    } else if (resultadoAccion == "RIGHT") estados[0] = "B";
    else if (resultadoAccion == "LEFT") estados[0] = "A";
    
    // Verificar si todos los estados han sido visitados al menos una vez
    if (Object.values(contadorEstados).every(contador => contador >= 1)) {
        document.getElementById("fin").innerHTML = " Se han recorrido los 8 estados! ";
    } else {
        setTimeout(function() { ejecutarSimulacion(estados); }, 2000);
    }
}

ejecutarSimulacion(estados);

setInterval(function() {
    let aleatorio = Math.random();
    if (aleatorio <= 0.30) {
        estados[1] = "DIRTY";
    } else if (aleatorio < 0.60) {
        estados[2] = "DIRTY";
    } else {
        estados[1] = "DIRTY";
        estados[2] = "DIRTY";
    }
}, 6000);
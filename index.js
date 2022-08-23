let nombre = prompt(`Cuál es su nombre?`);
while (nombre == ""){
    nombre = prompt(`Indique su nombre por favor`);
}
alert(`Bienvenido ${nombre} a la calculadora`);
let opcion = prompt(`Desea sumar, restar, dividir, multiplicar o salir`).toLowerCase();
while (opcion != "salir") {
    switch (opcion){
        case "sumar":
            let sumUno = Number(prompt(`Indique el primer valor`));
            let sumDos = Number(prompt(`Indique el segundo valor`));
            let rsuma = sumUno + sumDos;
            let mensajeS = `${sumUno} + ${sumDos} = ${rsuma}`;
    
            alert(mensajeS);
            break;
        case "restar":
            let resUno = Number(prompt(`Indique el primer valor`));
            let resDos = Number(prompt(`Indique el segundo valor`));
            let rresta = resUno - resDos;
            let mensajeR = `${resUno} - ${resDos} = ${rresta}`;
    
            alert(mensajeR);
            break;
        case "dividir":
            let divUno = Number(prompt(`Indique el primer valor`));
            let divDos = Number(prompt(`Indique el segundo valor`));
            if (divDos === 0) {
                alert("No se puede dividir por 0")
            } else {
                let rdiv = divUno / divDos;
                let mensajeD = `${divUno} / ${divDos} = ${rdiv}`;
            
                alert(mensajeD);
            }
            break;
        case "multiplicar":
            let mulUno = Number(prompt(`Indique el primer valor`));
            let mulDos = Number(prompt(`Indique el segundo valor`));
            let rmul = mulUno + mulDos;
            let mensajeM = `${mulUno} * ${mulDos} = ${rmul}`;
    
            alert(mensajeM);
            break;
        default: alert("Opcion incorrecta.");
            break;
    }
    opcion = prompt(`Desea sumar, restar, dividir, multiplicar o salir`).toLowerCase();
}

alert(`Gracias ${nombre} por usar la calculadora.`);
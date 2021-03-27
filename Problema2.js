let codigoAcceso1="ARQ2555: Sara Bel-Sun";
let codigoAcceso2="ARQ2556: Nodin Chavdri";
let codigoAcceso3="ARQ2557: Finn";

function generarPiloto(codigo)
{
    let nombrePiloto = codigo.split(':');
    console.log(`Usando funciones tradicionales el Nombre del piloto correspondiente a este código es: ${nombrePiloto[1].trim()}`);
}

generarPiloto(codigoAcceso1);
generarPiloto(codigoAcceso2);
generarPiloto(codigoAcceso3);


generarPilotoFlecha = (codigo) =>{
    let nombrePiloto = codigo.split(':');
console.log(`Usando funciones flecha el Nombre del piloto correspondiente a este código es: ${nombrePiloto[1].trim()}`);
};

generarPilotoFlecha(codigoAcceso1);
generarPilotoFlecha(codigoAcceso2);
generarPilotoFlecha(codigoAcceso3);


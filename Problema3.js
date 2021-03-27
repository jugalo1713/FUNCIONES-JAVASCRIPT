let temperaturaMin = 28;
let temperaturaMax = 45;

function calcularTemperaturaMedia (tempMin, tempMax)
{
    console.log(`Con funciones tradicionales la Temperatura promedio de la luna es ${(tempMax + tempMin)/2}`);
}

calcularTemperaturaMedia(temperaturaMin, temperaturaMax);


let calcularTemperaturaMediaFlecha = (tempMin, tempMax) => console.log(`Con funciones flecha la Temperatura promedio de la luna es ${(tempMax + tempMin)/2}`);


calcularTemperaturaMediaFlecha(temperaturaMin, temperaturaMax);

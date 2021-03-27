let x1 = 70;
let y1 = 50;
let x2 = 0;
let y2 =  0;


function calcularDistancia(x1, x2, y1, y2)
{
  let cuadradoX = Math.pow((x2-x1), 2);
  let CuadradoY = Math.pow((y2-y1),2);
  let resultado = Math.sqrt(cuadradoX + CuadradoY )


  return resultado;
}

let calculoFuncionTradicional =  calcularDistancia(x1, x2, y1, y2);

console.log(`Haciendo uso de una función tradicional la distancia es: ${calculoFuncionTradicional}`);



calcularDistanciaFlecha = (x1, x2, y1, y2)=>{
  let cuadradoX = Math.pow((x2-x1), 2);
  let CuadradoY = Math.pow((y2-y1),2);
  let resultado = Math.sqrt(cuadradoX + CuadradoY )
  return resultado;
};

console.log(`Haciendo uso de una función tipo flecha la distancia es: ${calcularDistanciaFlecha(x1, x2, y1, y2)}`);


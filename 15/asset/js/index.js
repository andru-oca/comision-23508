/*

function nombre_function(params){
    ...code
    return null;
}
*/

// CALCULADORA
import {
  calculadora,
  sumar,
  multiplicar,
  restar,
  dividir,
  sumarPower,
} from "./calculadora.js";

let total = calculadora(dividir, 1, 1, 2, 3, 4, 1, 2, 3, 4, 10);
console.log(total);

// BISIESTO :: UTILIZAR UN ELEMENTO INPUT PARA TOMAR UN AÑO NUMERICO
// IMPRIMIR SI ES QUE EL AÑO ES BISIESTO O NO

import { leapYear, leapYearUpgrade } from "./leapYear.js";
import { response, getContainer } from "./response.js";

let container = getContainer("year");
let writter = response("response");

container.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    let valueInput = container.valueAsNumber;

    writter(
      leapYearUpgrade(valueInput)
        ? "ES BISIESTO!! VAMOS QUE HAY 1 DE VACACIONES"
        : "UH! NO ES BISIESTO"
    );
  }
});

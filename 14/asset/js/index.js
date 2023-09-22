import { user, pass } from "./userDb.js";
import { respuestaError, respuestaPositiva } from "./respuestas.js";
import { frutas } from "./frutas.js";

/**
 *
 * TABLAS DE VERDAD
 */

//AND
console.log(true && true);

//OR
console.log(true || false);

console.table({
  true_true: true && true,
  true_falso: 19 > 8 && !(19 > 8),
  falso_true: Boolean(0 && 1),
  falso_falso: 19 != 19 && "pepe" == "PEPE",
});

console.table({
  true_true: true || true,
  true_falso: 19 > 8 || !(19 > 8),
  falso_true: Boolean(0 || 1),
  falso_falso: 19 != 19 || "pepe" == "PEPE",
});

/**
 *
 * CONTROL DE FLUJO
 */

/* let userName = prompt("ingrese su nombre");
let passPassword = prompt("ingrese su contraseña");

if (user == userName && pass == passPassword){
  document.body.innerHTML = respuestaPositiva;
} else {
  document.body.innerHTML = respuestaError;
}
 */

/**
 * SWITCH
 */

/* let expr = prompt("ingrese una fruta!");

switch (expr) {
  case "Oranges":
    console.log("Oranges are $0.59 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
} */

/**
 * FOR
 */
/* 
let preFijoCenter = "<center class='smooth'>";
let suFijoCenter = "</center>";

let stopper = prompt("cuantas frutas?");
stopper = isNaN(Number(stopper)) ? 4 : Number(stopper);

for (let i = 0; i < stopper; i++) {
  preFijoCenter += `<h1>
                    ${frutas[i]}
                    </h1>
                    `;
}

preFijoCenter += suFijoCenter;

document.body.innerHTML = preFijoCenter;

 */

let userName;
let passPassword;

let flag = true;
let acc = 0;
let topeVeces = 2;

while (flag && acc < topeVeces) {
  userName = prompt("ingrese su nombre");
  passPassword = prompt("ingrese su contraseña");

  if (user == userName && pass == passPassword) {
    document.body.innerHTML = respuestaPositiva;
    flag = !flag;
  }

  acc++;
  console.log("cantidad de veces intentadas" + acc);
}

if (flag) {
  document.body.innerHTML = respuestaError;
}

/*

  UN LOGIN 
  - PEDIRTE TU EMAIL
  - PASS

  MATCH ==> RENDER > BIENVENIDO nombre de usuario
  !MATCH => alert ("el password es incorrecto") si el pass es incorrecto
  !MATCH => alert("el email es incorrecto") si el email es incorrecto
  */

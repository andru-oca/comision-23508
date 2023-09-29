import { Persona } from "./Persona.js";
import { User } from "./User.js";
const { log } = console;

log("hola mundo");

const manu = {
  nombre: "Juan Manuel de Rosas y Cardenas",
  email: "manu@mail.com",
  lenguajes: ["Js", "Css", "Python"],
  credenciales: {
    blockBuster: { numeroSocio: 678, activo: false },
    dni: "ARG - oiausdiouaiosduo",
    osde: "lkdajskldjklajsdlk-504",
  },

  saludar: function () {
    return `
    Hola! soy ${this.nombre}
    Mi email es: ${manu.email}
     `;
  },
  queLenguajesConozco: function () {
    let resultado = "";

    for (let lenguaje of this.lenguajes) {
      if (lenguaje == "Css") {
        lenguaje = lenguaje.toUpperCase();
      }

      resultado += `Yo sé ${lenguaje} \n`;
    }

    log(resultado);
  },
};

log(manu);

// con notacion por .  y notacion de brackets

// funcion constructora

/* const belen = new Persona(
  "belen",
  "belen@mail.com",
  ["ruby", "golang", "js", true],
  { osde: "606", netlfix: true }
);

log(belen);
 */

//belen.queLenguajesConozco();

const ismael = {
  nombre: "ismael",
  email: "isma@mail.com",
  lenguajes: ["golang", "js"],
  credenciales: { sancor: 891723897, plex: "anonima-7891623" },
};

const ismaelPersona = new Persona(ismael);

log(ismaelPersona);
log(ismaelPersona.saludar());
ismaelPersona.queLenguajesConozco();

const agustina = new Persona({
  nombre: "agustina",
  apellido: "cherry",
  email: "agus@mail.com",
  languages: [32, 31, 23, 123, 12, 3, 123, 123],
  credenciales: {},
});

log(agustina);

const gaby = new User({
  userName: "Gabriel",
});

log(gaby);

gaby.showData();
gaby.credenciales = { osde: 123 };
log(gaby.credenciales);

gaby.changeStatus();
gaby.showData();

import { AndruFW } from "./AndruFW.js";

const container = new AndruFW("app");
const container2 = new AndruFW("app2");

container.render(
  `
        <center>
            <marquee behavior="" direction="">
            <h1>
                ESTE ES MI PRIMER FW
                REACT EMPEZA A TEMBLAR!!
            </h1>
            </marquee>
        </center>
    `
);

container2.render(
  "<img src='https://compote.slate.com/images/2b6fb34a-8047-4e17-b3d5-64987519657d.jpg'>"
);

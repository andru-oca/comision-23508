const { log } = console;

function Persona({ nombre, email, lenguajes, credenciales }) {
  this.nombre = nombre;
  this.email = email;
  this.lenguajes = lenguajes ?? ["jeringozo", "esperanto"];
  this.credenciales = credenciales;
}

Persona.prototype.saludar = function () {
  return `
    Hola! soy ${this.nombre}
    Mi email es: ${this.email}
     `;
};

Persona.prototype.queLenguajesConozco = function () {
  let resultado = "";

  for (let lenguaje of this.lenguajes) {
    if (lenguaje == "Css") {
      lenguaje = lenguaje.toUpperCase();
    }

    resultado += `Yo sé ${lenguaje} \n`;
  }

  log(resultado);
};

export { Persona };

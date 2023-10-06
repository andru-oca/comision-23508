const { log } = console;

document.title = " i ❤ JS, tu papá!";

const mensajes = [
  "I ❤ JS, tu papá!",
  "I ❤ NY",
  "Pirulino se pego una borrachera",
  "Yo no fuí",
  " A la grande le puse Cuca",
  "My sandwich!",
];

let i = 0;

function renderMensaje(mensajes) {
  document.body.children[0].children[0].innerText = mensajes[i];

  i++;

  if (i == mensajes.length) {
    i = 0;
  }
}

setInterval(renderMensaje, 1_000, mensajes);

// MANEJO INTEGRAL DEL DOM

let header = document.getElementsByTagName("header")[0];
header.classList.add("agus");

let main = document.querySelector("body > main");
log(main);

let footer = document.querySelectorAll("footer");
let footerXCaro = document.querySelector("body > [data-class='caro']");
let footerByDolor = document.querySelector("main + footer");
log(footer, footerXCaro, footerByDolor);

let input = document.createElement("input");
let btn = document.createElement("button");

input.value = 20;
input.placeholder = "ingrese cubitos";
input.type = "number";
input.style.borderRadius = "1rem";

btn.innerText = "Agregar";

log(input, btn);

header.appendChild(input);
header.appendChild(btn);

// btn.addEventListener("click", () => {
//   let inputComplicadoAlPepe = document.querySelector(
//     "header > input[type='number']"
//   );
//   let valueDelComplicado = inputComplicadoAlPepe.valueAsNumber;

//   document
//     .querySelectorAll("main > div")
//     .forEach((e) => e.parentNode.removeChild(e));

//   const containerDiv = [];

//   for (let i = 0; i < valueDelComplicado; i++) {
//     let div = document.createElement("div");
//     if (i % 2 == 0) {
//       div.classList.add("sandra");
//     } else {
//       div.classList.add("juan");
//     }
//     containerDiv.push(div);
//   }

//   containerDiv.forEach((div) => main.appendChild(div));

//   inputComplicadoAlPepe.value = "";
//   //alert("👹 me hiciste click")
// });

const TOKEN = "ibc6kpjwf51zz6b9qd991l2psw9yaaed0ls6hycn";
const URL = "https://sheetdb.io/api/v1/d0vtlcfmzacuu";

const belenValidador = (value) => 0 < value && value < 20;

const ismaelRender = (ticket) => {
  let div = document.createElement("div");
  div.style.backgroundColor = ticket.color_status;
  div.style.color = "white";

  let os = document.createElement("p");
  let email = document.createElement("p");
  os.innerText = ticket.sistema_operativo;
  email.innerText = ticket.email;

  div.appendChild(os);
  div.appendChild(email);

  return div;
};

const getData = () => {
  let limite = document.querySelector(
    "header > input[type='number']"
  ).valueAsNumber;

  if (!belenValidador(limite)) {
    alert("No papá! Mucho!");
    return;
  }

  document
    .querySelectorAll("main > div")
    .forEach((e) => e.parentNode.removeChild(e));

  let url_limit = URL + `?limit=${limite}`;
  fetch(url_limit, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const ticketsTotales = data.map((ticket) => ismaelRender(ticket));
      ticketsTotales.forEach((ticket) => main.appendChild(ticket));
    })
    .catch((error) => log({ error }));
};

btn.addEventListener("click", getData);

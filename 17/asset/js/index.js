const { log } = console;

// array

const dbUser = [];

function User({ nombre, credencial }) {
  this.nombre = nombre;
  this.credencial = credencial ?? {
    id: crypto.randomUUID(),
    empresa: "OSDE",
  };
}

dbUser.push("Caro");
dbUser.push("Sandra");

dbUser.push(
  new User({
    nombre: "Esteban",
    credencial: { id: crypto.randomUUID(), empresa: "OSDE" },
  })
);

dbUser.push(() => crypto.randomUUID());

dbUser[0] = "Carolina";

/* const randomUID = dbUser.pop(); */

/* log(dbUser);
log(randomUID);

log(dbUser.slice(2));
 */

// for (let ele of dbUser) {
//   log(ele);
// }

dbUser.forEach((ele) => {
  if (typeof ele == "string") {
    log(ele.toUpperCase());
    return;
  }
  log(ele);
});

const usuariosBase = ["Franco", "Manu", "Mariano", "Manal"];

let usuariosLegales = usuariosBase.map((user) => new User({ nombre: user }));

log(usuariosLegales);

usuariosLegales = usuariosLegales.filter((user) => user.nombre != "Manal");

log(usuariosLegales);

usuariosBase.includes("Manu")
  ? log("esta en la base ")
  : log("no esta en la base");

// import user from "./userDB.json" assert { type: "json" };

// user.forEach((u) => {
//   let usN = new User({ nombre: u.name });
//   log(usN);
// });

const URL = "./asset/js/userDB.json";

/* fetch(URL, {})
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("users", JSON.stringify(data));
  })
  .catch((error) => log({ error })); */

let cache = {};

/* function pesada(num) {
  if (Object.keys(cache).includes(num)) {
    log("esto ya fue calculado", cache[num]);
    return cache[num];
  }

  num = Number(num);
  let valorCalculado = num ** 10;
  cache[num] = valorCalculado;
  log("esto no fue calculado", cache[num]);
  return valorCalculado;
}

pesada("100000000");
log(cache);
pesada("100000000");
 */

let users = localStorage.getItem("users");

log(JSON.parse(users));

import { Render } from "./Render.js";
import { sandraSuperRenderPower as render } from "./sandraSuperRenderPower.js";

const app = new Render("app");

const LOCAL_URL = "./asset/js/beerDB.json";
const API_REAL = "https://api.sampleapis.com/beers/stouts";

app.fecthData(API_REAL, render);

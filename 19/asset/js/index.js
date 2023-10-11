import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { appCore } from "./appCore.vue.js";
const { createApp } = Vue;

// instancio el id del div
const appID = "#app";

// instancio la creacion de la aplicacion
const app = createApp(appCore);

// monto o renderizo esa app
app.mount(appID);

// createApp({
//   data() {
//     return {
//       count: 0,
//     };
//   },
// }).mount("#app");

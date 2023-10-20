//import vue
import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { mainCore } from "./mainCore.Vue.js";

//
const { createApp } = Vue;
//id del item a renderizar
const mainId = "#main";
//app a renderizar y montar
const mainApp = createApp(mainCore);
//montado de la app
mainApp.mount(mainId);

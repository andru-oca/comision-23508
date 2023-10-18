import * as Vue from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import { headerCore } from "./headerCore.Vue.js";
import { mainCore } from "./mainCore.Vue.js";

const { createApp } = Vue;

/*header*/
const headerID = "#header";
const headerApp = createApp(headerCore);

headerApp.mount(headerID);

/*main*/
const mainID = "#main";
const mainApp = createApp(mainCore);

mainApp.mount(mainID);

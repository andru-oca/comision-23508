import { pichichu } from "./pichichu.Component.js";

export const mainCore = {
  data: function () {
    return {
      form: null,
      form_config_json: "./asset/js/form.pattern.json",
      api_bichos: "https://sheetdb.io/api/v1/7ese19x6705bm",
      pichichu: {
        name: "",
        breed: "",
        color: "",
        owner: "",
        img: "",
        last_view: "",
      },

      bichos: null,
      errorLoad: null,
      errorPost: null,
    };
  },
  components: {
    pichichu: pichichu,
  },
  created: async function () {
    const formData = await fetch(this.form_config_json);

    if (!formData.ok) {
      this.errorLoad = `Error : ${formData.status}`;
    }
    this.form = await formData.json();
  },

  methods: {
    selectBichoHandler: function (id) {
      this.bichos = this.bichos.filter((bicho) => bicho.id == id);
    },

    getDataHandler: async function () {
      const response = await fetch(this.api_bichos);
      this.bichos = await response.json();
    },

    postDataHandler: async function (e) {
      e.preventDefault();

      this.pichichu = {
        id: crypto.randomUUID(),
        ...this.pichichu,
      };

      const response = await fetch(this.api_bichos, {
        method: "POST",
        body: JSON.stringify(this.pichichu),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        this.errorPost = `Falló algo del post. error: ${response.status}`;
      } else {
        this.errorPost = `${
          this.pichichu.owner
        } fue cargado en la fecha del ${new Date().toISOString()} `;
      }

      this.pichichu = {
        name: "",
        breed: "",
        color: "",
        owner: "",
        img: "",
        last_view: "",
      };
    },
  },
};

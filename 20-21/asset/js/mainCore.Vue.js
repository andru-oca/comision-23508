const usuario = {
  template: `
    <div>
    <h1>{{user.nombre}}</h1>
    <img :src="user.avatar" width="300" />
    <ul>
      <li>{{user.id}}</li>
      <li>{{user.dob}}</li>
    </ul>
  </div>
`,
  props: {
    user: Object,
  },
};

const formulario = {
  nombre: {
    label: "Nombre de usuario",
    type: "text",
    placeholder: "ingresa tu nombre de usuario",
  },
  avatar: {
    label: "Imagen",
    type: "url",
    placeholder: "https://url/pic.jpg",
  },
  dob: {
    label: "Fecha de nacimiento",
    type: "date",
    placeholder: "",
  },
  password: {
    label: "Contraseña",
    type: "password",
    placeholder: "Ingrese pass",
  },
};

export const mainCore = {
  data: function () {
    return {
      API: "https://sheetdb.io/api/v1/metk99avx0cbz",
      errorPOST: null,
      form: formulario,
      usuarioInput: {
        nombre: "",
        avatar: "",
        dob: "",
        password: "",
      },
      users: [],
    };
  },
  components: {
    vueuser: usuario,
  },
  methods: {
    usersGetHandler: async function () {
      try {
        const response = await fetch(this.API);
        this.users = await response.json();
      } catch (e) {
        this.errorPOST = error;
      }
    },

    userUploadHandler: function (e) {
      e.preventDefault();

      const usuarioNuevo = {
        ...this.usuarioInput,
        id: crypto.randomUUID(),
        fecha_creacion: new Date().toISOString(),
      };

      fetch(this.API, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(usuarioNuevo),
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw Error("Bad Post");
          }
          return;
        })
        .then(() => {
          console.log(usuarioNuevo);
          this.usuarioInput = {
            nombre: "",
            avatar: "",
            dob: "",
            password: "",
          };
        })
        .catch((error) => (this.errorPOST = error));
    },
  },
};

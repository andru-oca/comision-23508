const { log } = console;

export class User {
  constructor({ userName, pwd, status }) {
    this.userName = userName;
    this.pwd = pwd ?? "changeMe1234";
    this.status = status ?? true;
  }

  changeStatus = () => (this.status = !this.status);

  showData = function () {
    log(`
    hola ${this.userName} es mi nombre de usuario,
    mi password es ${this.pwd === "changeMe1234" ? " para cambiar" : this.pwd}
    y mi status es : ${this.status ? "🟢" : "🔴"}
    `);
  };
}

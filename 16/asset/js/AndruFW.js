export class AndruFW {
  constructor(containerID) {
    this.container = document.getElementById(containerID);
  }

  render = function (texto) {
    this.container.innerHTML = texto;
    return null;
  };
}

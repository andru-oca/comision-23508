const getContainer = (containerID) => {
  let container = document.getElementById(containerID);
  return container;
};

const response = (containerID) => {
  // closure

  let container = document.getElementById(containerID);
  container.classList.add("smooth");

  return (respuesta) => (container.innerHTML = respuesta);
};

export { getContainer, response };

const sumar = function (a, b) {
  return a + b;
};

const sumarPower = (...params) => {
  let total = 0;
  for (let value of params) {
    total += value;
  }
  return total;
};
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
  if (b == 0) {
    console.warn("Zapallo!!! Como vas a dividir por cero??!");
    return null;
  }

  return a / b;
};

function calculadora(callback, ...params) {
  return callback(...params);

  /*   if (action == "sumar") {
    return a + b;
  }

  if (action == "restar") {
    return a - b;
  }

  if (action == "multiplicar") {
    return a * b;
  }

  if (action == "dividir") {
    return a / b;
  }

  return null; */
}

export { calculadora, sumar, multiplicar, restar, dividir, sumarPower };

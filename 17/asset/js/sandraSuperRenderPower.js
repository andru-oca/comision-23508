export function sandraSuperRenderPower(data) {
  let items = "";
  data.forEach((chela) => {
    let pattern = `
        <div>
            <img src="${chela.image}" alt="${chela.name}">
            <div>
            <h2>precio : ${chela.price}</h2>
            <p>${chela.name}</p>
            </div>
        </div>
            `;
    items += pattern;
  });

  return items;
}

export const pichichu = {
  template: `
  <div>
  <h2>{{pichi.name}}</h2>
  <img :src="pichi.img" width="200" />
  <p>{{pichi.last_view}}</p>
  <p>{{pichi.breed}}</p>
  <p>{{pichi.color}}</p>
</div>
`,
  props: {
    pichi: Object,
  },
};

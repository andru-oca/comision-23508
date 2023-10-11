import users from "./userDB.json" assert { type: "json" };

// instancio el core del argumento

export const appCore = {
  data: function () {
    return {
      count: 0,
      msg: "La llama que llama!",
      display: true,
      users: users,
      styleSofia: "sofia",
      userItems: users,
      inputUserCant: users.length,
    };
  },
};

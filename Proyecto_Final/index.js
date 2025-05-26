import { Inicio, Login, Register } from "./componentes.js";

const routes = {
  "/": { view: () => m(Inicio) },
  "/login": { view: () => m(Login) },
  "/register": { view: () => m(Register) },
};

// Montar en el div con id="app"
m.route(document.getElementById("app"), "/", routes);







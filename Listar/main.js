import Persona from "./persona.js";
import Grupo from "./grupo.js";

let g3h = new Grupo ();
let nuevo = new Persona("A", 1);
g3h.agregar(nuevo);
let alguien = new Persona ("B",2);
g3h.agregar(alguien);
alguien = new Persona ("C", 3);
g3h.agregar(alguien);
console.log(g3h);
console.log(g3h.listar());
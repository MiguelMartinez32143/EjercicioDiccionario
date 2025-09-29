// --------- "Tupla" simulada con Object.freeze ----------
const usuarioBase = Object.freeze(["Miguel", 19]); 
// usuarioBase[0] = "Otro"; // Esto daría error en modo estricto, se congela.

// --------- Lista de claves y valores ----------
const claves = ["nombre", "edad", "ciudad"];
const valores = ["Miguel", 19, "Bogotá"];

// --------- Función que convierte dos listas en un diccionario ----------
function listaADiccionario(claves, valores) {
  if (claves.length !== valores.length) {
    throw new Error("Las listas deben tener la misma longitud");
  }
  const diccionario = {};
  for (let i = 0; i < claves.length; i++) {
    diccionario[claves[i]] = valores[i];
  }
  return diccionario;
}

// --------- Crear diccionario con la función ----------
const usuario = listaADiccionario(claves, valores);

// --------- Lista de usuarios (diccionarios) ----------
let usuarios = [
  usuario,
  { nombre: "Ana", edad: 22, ciudad: "Medellín" },
  { nombre: "Carlos", edad: 30, ciudad: "Cali" }
];

// --------- Función para mostrar usuarios con ciclo/bucle ----------
function mostrarUsuarios(lista) {
  console.log("Lista de usuarios:");
  for (let i = 0; i < lista.length; i++) {
    const u = lista[i];
    console.log(`- ${u.nombre}, ${u.edad} años, vive en ${u.ciudad}`);
  }
}

// --------- Usar las funciones ----------
mostrarUsuarios(usuarios);

// --------- Agregar nuevo usuario ----------
function agregarUsuario(nombre, edad, ciudad) {
  const nuevo = { nombre, edad, ciudad };
  usuarios.push(nuevo);
  console.log("Usuario agregado correctamente.");
}

// --------- Prueba ----------
agregarUsuario("Laura", 25, "Barranquilla");
mostrarUsuarios(usuarios);

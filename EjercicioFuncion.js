// --------- "Tupla" simulada con Object.freeze ----------
const usuarioBase = Object.freeze(["Miguel", 19]); 

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

// --------- Función para mostrar usuarios ----------
function mostrarUsuarios(lista) {
  let texto = "Lista de usuarios:\n";
  for (let i = 0; i < lista.length; i++) {
    const u = lista[i];
    texto += `- ${u.nombre}, ${u.edad} años, vive en ${u.ciudad}\n`;
  }
  alert(texto);
}

// --------- Agregar nuevo usuario ----------
function agregarUsuario(nombre, edad, ciudad) {
  const nuevo = { nombre, edad, ciudad };
  usuarios.push(nuevo);
  alert("Usuario agregado correctamente.");
}

// --------- Menú interactivo ----------
let opcion;
do {
  opcion = prompt(
    "Menú:\n1. Ver usuarios\n2. Agregar usuario\n3. Salir\nElige una opción:"
  );

  if (opcion === "1") {
    mostrarUsuarios(usuarios);

  } else if (opcion === "2") {
    const nombre = prompt("Nombre:");
    const edad = parseInt(prompt("Edad:"));
    const ciudad = prompt("Ciudad:");
    if (!nombre || !edad || !ciudad) {
      alert("Campos inválidos.");
    } else {
      agregarUsuario(nombre, edad, ciudad);
    }

  } else if (opcion === "3") {
    alert("Saliendo del programa...");
  } else {
    alert("Opción no válida.");
  }

} while (opcion !== "3");
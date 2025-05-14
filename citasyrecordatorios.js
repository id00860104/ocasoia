const formModal = document.getElementById("formModal");
const showModal = document.getElementById("showModal");
const overlay = document.getElementById("overlay");
const dataContainer = document.getElementById("dataContainer");
let personas = [];

function openFormModal() {
  overlay.style.display = "block";
  formModal.style.display = "block";
}

function openShowModal() {
  overlay.style.display = "block";
  showModal.style.display = "block";
  mostrarPersonas();
}

function cerrarModales() {
  overlay.style.display = "none";
  formModal.style.display = "none";
  showModal.style.display = "none";
}

overlay.addEventListener("click", cerrarModales);

function guardarRecordatorio() {
  const nombre = document.getElementById("nombre").value.trim();
  const apellido = document.getElementById("apellido").value.trim();
  if (nombre && apellido) {
    personas.push({ nombre, apellido });
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    cerrarModales();
  } else {
    alert("Por favor, complete ambos campos.");
  }
}

function mostrarRecordatorios() {
  dataContainer.innerHTML = "";
  personas.forEach((p, index) => {
    const div = document.createElement("div");
    div.className = "saved-item";
    div.textContent = `${p.nombre} ${p.apellido}`;
    div.onclick = () => {
      if (confirm(`¿Eliminar a ${p.nombre} ${p.apellido}?`)) {
        personas.splice(index, 1);
        mostrarRecordatorios();
      }
    };
    dataContainer.appendChild(div);
  });
}

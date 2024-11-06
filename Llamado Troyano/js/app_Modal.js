const modal = document.getElementById("myModal");
const spanClose = document.getElementsByClassName("close")[0];

function mostrarModal(event) {
    const nombre = event.target.getAttribute("data-nombre");
    const expediente = event.target.getAttribute("data-expediente");
    const carrera = event.target.getAttribute("data-carrera");
    const asistencias = event.target.getAttribute("data-asistencias");
    const faltas = event.target.getAttribute("data-faltas");
    const ultima = event.target.getAttribute("data-ultima");
    const proxima = event.target.getAttribute("data-proxima");

    document.getElementById("modal-nombre").textContent = nombre;
    document.getElementById("modal-expediente").textContent = expediente;
    document.getElementById("modal-carrera").textContent = carrera;
    document.getElementById("modal-asistencias").textContent = asistencias;
    document.getElementById("modal-faltas").textContent = faltas;
    document.getElementById("modal-ultima").textContent = ultima;
    document.getElementById("modal-proxima").textContent = proxima;

    modal.style.display = "block";
}

document.querySelectorAll(".alumnoExp").forEach(element => {
    element.addEventListener("click", mostrarModal);
});

document.querySelectorAll(".alumnoNombre").forEach(element => {
    element.addEventListener("click", mostrarModal);
});

document.querySelectorAll(".name").forEach(element => {
    element.addEventListener("click", mostrarModal);
});

spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
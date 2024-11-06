var modal = document.getElementById("myModal");
var modalTitle = document.getElementById("modalTitle");
var span = document.getElementsByClassName("close")[0];

var botones = document.querySelectorAll('.agendarCitaBoton');

botones.forEach(function(boton) {
    boton.onclick = function() {
        var servicio = this.getAttribute('data-servicio');
        modalTitle.textContent = 'Agendar cita en: ' + servicio;
        modal.style.display = "block";
    };
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelector('.aceptar').onclick = function() {
    let selectedDay = document.getElementById('daySelector').value;
    let selectedTime = document.getElementById('timeSelector').value;
    alert('Cita agendada para el ' + selectedDay + ' a las ' + selectedTime);
    modal.style.display = "none";
};

document.querySelector('.cancelar').onclick = function() {
    modal.style.display = "none";
};
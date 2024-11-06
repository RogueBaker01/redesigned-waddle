const today = new Date();
const mesesNombres = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const mesActual = mesesNombres[today.getMonth()];

document.getElementById('month-name').textContent = mesActual;

const diaActual = today.getDate();
const diaActualDeLaSemana = today.getDay();

function getdiaDeLaSemana(diaDeLaSemana) {
    const diff = diaDeLaSemana - diaActualDeLaSemana;
    return new Date(today.setDate(diaActual + diff)).getDate();
}

document.getElementById('lunes').textContent = getdiaDeLaSemana(1);
document.getElementById('martes').textContent = getdiaDeLaSemana(2);
document.getElementById('miercoles').textContent = getdiaDeLaSemana(3);
document.getElementById('jueves').textContent = getdiaDeLaSemana(4);
document.getElementById('viernes').textContent = getdiaDeLaSemana(5);
document.getElementById('sabado').textContent = getdiaDeLaSemana(6);
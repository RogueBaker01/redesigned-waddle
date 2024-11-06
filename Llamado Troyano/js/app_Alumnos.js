function filtrarAlumnos() {
    var input, filter, alumnos, alumno, exp, nombre, i, txtValueExp, txtValueNombre;
    input = document.getElementById('filtro');
    filter = input.value.toUpperCase();
    alumnos = document.getElementById("myTable").getElementsByClassName('alumno');

    filter = normalizeString(filter);

    for (i = 0; i < alumnos.length; i++) {
        alumno = alumnos[i];

        if (alumno.classList.contains('titulosAlumnos')) {
            continue;
        }

        exp = alumno.getElementsByClassName("alumnoExp")[0].getElementsByTagName("p")[0];
        nombre = alumno.getElementsByClassName("alumnoNombre")[0].getElementsByTagName("p")[0];
        
        txtValueExp = exp.textContent || exp.innerText;
        txtValueNombre = nombre.textContent || nombre.innerText;

        txtValueExp = normalizeString(txtValueExp.toUpperCase());
        txtValueNombre = normalizeString(txtValueNombre.toUpperCase());

        if (txtValueExp.indexOf(filter) > -1 || txtValueNombre.indexOf(filter) > -1) {
            alumno.style.display = "";
        } else {
            alumno.style.display = "none";
        }
    }
}

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function showLoginForm(userType) {
    document.getElementById('maestro-form').style.display = 'none';
    document.getElementById('alumno-form').style.display = 'none';

    if (userType === 'maestro') {
        document.getElementById('maestro-form').style.display = 'block';
    } else if (userType === 'alumno') {
        document.getElementById('alumno-form').style.display = 'block';
    }
}
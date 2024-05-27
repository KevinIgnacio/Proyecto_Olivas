function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Aquí puedes agregar la lógica de autenticación
    if (username == 'admin' && password == '1234') {
        alert('Bienvenido, ' + username + '!');
        
        // Redirigir a otra página o realizar alguna acción
    } else {
        alert('Usuario o contraseña incorrectos.');
    }
    return false; // Evita el envío del formulario
}

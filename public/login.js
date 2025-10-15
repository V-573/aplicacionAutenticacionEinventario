 //const API = '/api/auth';
 //const API = 'http://localhost:8000/api/auth';
//const API= "https://aplicacion-autenticacione-e-inventario.vercel.app/api/auth"; // es para utilizar con versel


const baseURL = window.location.hostname.includes("localhost")
  ? "http://localhost:8000"
  : "";

const API = `${baseURL}/api/auth`;

const out = document.getElementById('out');
const errorMessage = document.getElementById('errorMessage');


document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const form = e.target;
  const data = { email: form.email.value, password: form.password.value };


  //ocultar mensajes de error
errorMessage.style.display = 'none';
errorMessage.textContent = '';



  try {
    const res = await fetch(API + '/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(data)
    });

    const json = await res.json();

    if (res.ok && json.token) {
      // guardar token y redirigir a la página protegida
      localStorage.setItem('token', json.token);
      // redirige a profile
      location.href = '/profile.html';
    } else {
      // Mostrar mensaje de error
      errorMessage.textContent = json.message || 'Email o contraseña incorrectos';
      errorMessage.style.display = 'block';
      out.textContent = json.message || JSON.stringify(json);
    }
  } catch (err) {

    errorMessage.textContent = 'Error de red: ' + err.message;
    errorMessage.style.display = 'block';
    out.textContent = 'Error de red: ' + err.message;
  }
});

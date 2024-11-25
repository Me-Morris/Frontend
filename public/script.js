const baseURL = 'http://18.213.175.5:8000'; // Cambia esto si es necesario

// Registrar nuevo Tenant
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const tenantData = {
    name: document.getElementById('name').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    userName: document.getElementById('userName').value,
    paymentMethodId: document.getElementById('paymentMethodId').value,
    password: document.getElementById('password').value,
  };

  try {
    const response = await fetch(`${baseURL}/tenants`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tenantData),
    });

    const data = await response.json();
    document.getElementById('responseMessage').textContent = data.message;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('responseMessage').textContent = 'Error registrando tenant';
  }
});

// Login de Tenant
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const loginData = {
    username: document.getElementById('loginUserName').value,
    password: document.getElementById('loginPassword').value,
  };

  try {
    const response = await fetch(`${baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    const data = await response.json();
    document.getElementById('responseMessage').textContent = data.message;
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('responseMessage').textContent = 'Error al iniciar sesión';
  }
});




function login(){

  const username = document.getElementById('loginUserName').value;
  const password = document.getElementById('loginPassword').value

  fetch('http://18.213.175.5:8000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(response => {
      
      if (!response.ok) {
        alert('Algo salió mal');
      }else{
        alert('Inicio de sesión exitoso');
      }

      return response.json()
    })
    .then(data => {
      console.log(data);

      // Guardar token en localStorage

    })
    .catch(error => console.error('Error:', error));
}




function register(){

  const userName = document.getElementById('userName').value;
  const password = document.getElementById('password').value
  const lastName = document.getElementById('lastName').value
  const email = document.getElementById('email').value
  const paymentMethodId = document.getElementById('paymentMethodId').value
  const name = document.getElementById('name').value

  fetch('http://18.213.175.5:8000/tenants', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      userName,
      lastName,
      email,
      paymentMethodId,
      password
    })
  })
    .then(response => {
      
      if (response.status != 201) {
        alert('Algo salió mal');
        console.log("no se creo")
      }else{
        alert('El usuario se creo exitosamente');
        console.log("se creo")
      }
      return response.json()
    })
    .then(data => {
      console.log(data);
      // Guardar token en localStorage

    })
    .catch(error => console.error('Error:', error));

}
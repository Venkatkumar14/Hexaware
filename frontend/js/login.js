document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            document.getElementById('message').innerText = 'Login successful!';
            document.getElementById('message').style.color = 'green';
        } else {
            document.getElementById('message').innerText = 'Login failed: ' + data.error;
            document.getElementById('message').style.color = 'red';
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Error logging in!';
        document.getElementById('message').style.color = 'red';
    }
});

document.getElementById('getFeedback').addEventListener('click', async function() {
    const speechText = document.getElementById('speechInput').value;
    const token = localStorage.getItem('token');

    const response = await fetch('http://localhost:5000/api/ai/feedback', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ text: speechText })
    });

    const data = await response.json();
    document.getElementById('feedback').innerText = data.feedback;
});

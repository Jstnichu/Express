document.getElementById('userForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value
    };

    try {
        const response = await fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.text();
        document.getElementById('response').textContent = result;
    } catch (error) {
        document.getElementById('response').textContent = 'Error: ' + error.message;
    }
});

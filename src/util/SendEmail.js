const sendContactForm = async (emailInfo) => {
    const uri = import.meta.env.VITE_BASE_URI || 'http://localhost:5000'

    return fetch(`${uri}/sendContactForm`, { // Enter your IP address here
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(emailInfo) // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(response => {
        return 'Email sent!'
    })
    .catch(error => {
        console.error('Error from frontend:', error);
        return 'Email failed to send, please try again.'
    });
}

export default sendContactForm
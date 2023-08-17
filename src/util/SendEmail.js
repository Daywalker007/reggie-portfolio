const sendContactForm = async (emailInfo) => {
    const uri = import.meta.env.BASE_URI || 'http://localhost:5000'
    console.log('Import base uri: ', uri)
    console.log('Process base uri: ', process.env.BASE_URI)
    return fetch(`${uri}/sendContactForm`, { // Enter your IP address here
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(emailInfo) // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(response => {
        return response.success
    })
    .catch(error => {
        console.error('Error from frontend:', error);
        return 'Issue with server, please try again'
    });
}

export default sendContactForm
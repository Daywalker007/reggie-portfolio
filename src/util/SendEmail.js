const sendContactForm = (emailInfo) => {
    const uri = import.meta.env.BASE_URI || 'http://localhost:5000'
    console.log('Using base uri: ', uri)
    return fetch(`${uri}/sendContactForm`, { // Enter your IP address here
        headers: {
            "Content-Type": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(emailInfo) // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.error('Error from frontend:', error);
        return 'Issue with server, please try again'
    });
}

export default sendContactForm
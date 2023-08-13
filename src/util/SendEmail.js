import emailjs from '@emailjs/browser';

const sendContactEmail = (emailInfo) => {
    console.log('Inside send function')
    const {Name, Email, Subject, Message} = emailInfo

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: import.meta.env.FROM_EMAIL,
            pass: import.meta.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: Email,
        to: import.meta.env.TO_EMAIL,
        subject: Subject,
        text: `${Name}\n\n\n${Message}`
    };

    console.log('Attempting to send')
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

const EmailContactForm = () => {   
    const sendEmail = (e) => {
      e.preventDefault(); // prevents the page from reloading when you hit “Send”
   
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            // show the user a success message
        }, (error) => {
            // show the user an error
        });
    };

export default sendContactEmail
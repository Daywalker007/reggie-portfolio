export default function validateContactForm(infoObj) {
    const {Name, Email, Subject, Message} = infoObj
    const errors = {}

    const email_pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    if(!Name)
        errors.Name = 'Name is required'

    if(!Email)
        errors.Email = 'Email is required'
    else if(!email_pattern.test(Email))
        errors.Email = 'Not a valid email'

    if(!Subject)
        errors.Subject = 'Subject is required'

    if(!Message)
        errors.Message = 'Message is required'

    return errors
}
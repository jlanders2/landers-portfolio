const sgMail = require('@sendgrid/mail');
const contactSender = process.env.CONTACT_SENDER;
const contactRecipient = process.env.CONTACT_RECIPIENT;

export async function POST(request) {
    const data = await request.json();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);// 
    
    const message = {
        to: contactRecipient,
        from: contactSender,
        subject: `${data.from ? data.from + '-' : ''} ${data.subject}`,
        text: data.message,
        html: `<html>${data.message}</html>`
    };

    sgMail
        .send(message)
        .then(() => {
            // Handle success
            // console.log('Email sent');
        })
        .catch((error) => {
            // log error somehow better than this
            // console.error(error);
        });
    return Response.ok;
}
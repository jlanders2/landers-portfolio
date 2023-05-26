"use server";
const sgMail = require('@sendgrid/mail');

const contactSender = process.env.CONTACT_SENDER;
const contactRecipient = process.env.CONTACT_RECIPIENT;

export async function contactByEmail(data) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);// 
    
    const message = {
        to: contactRecipient,
        from: contactSender,
        subject: `${data.from ? data.from + ' -' : ''} ${data.subject}`,
        text: data.message,
        html: `<html>${data.message}</html>`
    };

    await sgMail
        .send(message)
        .then(() => {
            // Handle success
            console.log('The following email was sent successfully: ', message);
        })
        .catch((error) => {
            // log error somehow better than this
            console.error('The following email was not sent successfully: ', message, error);
        });
}
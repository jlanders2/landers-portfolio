
export const emailMe = (from, subject, text) => {
    // check nodemailer docs, can't do much here until I deploy and can setup a smtp server
    // Do i need to make this (below) every time? 
    let transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: "apikey",
          pass: "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",
        },
    });

    let message = {
        from: from,
        to: 'jlanders2jsu@gmail.com',
        subject: subject,
        text: text
    };

    transporter.sendMail(message); // I can use a callback here is there a way to notify back up using async or something? 
}
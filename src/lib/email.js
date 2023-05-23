
export const emailMe = (from, subject, text) => {
    // check nodemailer docs, can't do much here until I deploy and can setup a smtp server
    // Do i need to make this (below) every time? 
    // let transporter = nodemailer.createTransport({
    //     host: "smtp.example.com",
    //     port: 587,
    //     secure: false, // upgrade later with STARTTLS
    //     auth: {
    //       user: "username",
    //       pass: "password",
    //     },
    // });

    // let message = {
    //     from: from,
    //     to: 'jlanders2jsu@gmail.com',
    //     subject: subject,
    //     text: text
    // };

    // transporter.sendMail(message); // I can use a callback here is there a way to notify back up using async or something? 
    console.log(from, subject, text);
}
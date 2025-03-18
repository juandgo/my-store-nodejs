const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for port 465, false for other ports
  auth: {
    user: 'juandavidgo1997@gmail.com',
    pass: 'rmvvvqcesuawtlah'
}
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'juandavidgo1997@gmail.com', // sender address
    to: "juandago97@hotmail.com", // list of receivers
    subject: "Este es un nuevo correo", // Subject line
    text: "Hola Juan de prueba", // plain text body
    html: "<b>Hola Juan de prueba</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main();

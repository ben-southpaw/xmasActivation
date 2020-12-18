import nodemailer from "nodemailer";
import smtpTransport from "nodemailer-smtp-transport";

export async function post(req, res) {
  //request from Gift.svelte
  var transporter;
  var email = "benjamin@adventureclub.io";
  var message = req.body;
  console.log(message, "message here");
  message = `Another address for Xmas gift 
    \n${message.address_1}\n${message.address_2}`;

  //create email function
  transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    })
  );

  const mailOptions = {
    from: "acdesigncollective@gmail.com",
    to: email,
    subject: "Xmas Activation address",
    text: message,
  };

  // verify connection configuration
  res.setHeader("Content-Type", "application/json");
  try {
    var response = await transporter.sendMail(mailOptions);
    console.log("reached here yay");
    return res.end(JSON.stringify({ success: true }));
  } catch (e) {
    return res.end(JSON.stringify({ success: false }));
  }
}

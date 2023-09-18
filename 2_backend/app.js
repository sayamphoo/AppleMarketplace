const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var cors = require('cors')
const app = express();

// Middleware
app.use(cors())
app.use(bodyParser.json());

// Routes
app.post("/sendemail", (req, res) => {
  const { model, capacity, color, quantity, address, email, payment } =
    req.body;
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "email",
      pass: "password",
    },
  });

  const html = ` <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Lato"
      rel="stylesheet"
      type="text/css"
    />

    <title>Document</title>

    <style>
      * {
        margin: auto;
        font-family: "Lato";
        padding: 5px;
      }
      .main {
        max-width: 500px;
        text-align: center;
        margin-bottom: 50px;
      }

      .ddd {
        font-size: 20px;
        font-weight: bold;
      }

      .line {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        width: 100%;
        background-color: rgb(0, 0, 0);
      }

      
      .line > p{
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-size: 18px;
        color: rgb(255, 255, 255);
      }

      .detial {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        width: 100%;
       
      }

      
      .detial > p{
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        margin: 0;
        padding-bottom: 5px;
        font-size: 18px;
        color: rgb(0, 0, 0);
      }
    </style>
  </head>
  <body>
    <div class="main">
      <img src="https://media.tenor.com/qoIGqkJ345gAAAAM/tick.gif" />
      
      <p class="ddd">Thank you for placing your order <br />with our store!</p>
      <div class="line">
        <p>รายการ</p>
      </div>


      <div class="detial">
        <p>Model</p>
        <p>${model}</p>
      </div>
  
      <div class="detial">
        <p>Capacity</p>
        <p>${capacity}</p>
      </div>
  
      <div class="detial">
        <p>Quantity</p>
        <p>${quantity}</p>
      </div>
  
      <div class="detial">
        <p>Address</p>
        <p>${address}</p>
      </div>
  
      <div class="detial">
        <p>Color</p>
        <p>${color}</p>
      </div>
  
      <div class="detial">
        <p>Email</p>
        <p>${email}</p>
      </div>
  
      <div class="detial">
        <p>Payment</p>
        <p> ${payment}</p>
      </div>

    </div>
  </body>
</html>`;

  const mailOptions = {
    from: "Sayamphoo.nyd@g.swu.ac.th",
    to: email,
    subject: "Confirm Order",
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.json({ message: "Email sent successfully", data: req.body });
    }
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 3000");
});

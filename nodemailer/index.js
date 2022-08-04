const express = require("express");
const { createTransport } = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 8080;

const testMail = 'piper.auer37@ethereal.email';

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: testMail,
        pass: 'twkNXYhEBy5A6gq5x5'
    }
});

const mailOptions = {
    from: "Servidor node.js",
    to: testMail,
    subject: "Mail prueba desde node js",
    html:'<h1 style="color:blue;">H1 - Contenido de prueba desde <span style="color:green;">node js</span></h1><h5 style="color:red;">h5</h5>'
}


//ROUTES
app.get("/", (req, res) => {
    res.send("API REST AWS TEST");
});
app.post("/email-coder", async (req, res) => {
    try{
        const info = await transporter.sendMail(mailOptions)
        console.log(info);
        res.send("email enviado")
    }catch(error){
        console.log(error);
    }
});



app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});

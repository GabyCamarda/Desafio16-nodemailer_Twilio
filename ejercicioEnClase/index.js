const express = require("express");
const { createTransport } = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.json());
const testMail = 'piper.auer37@ethereal.email';

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: testMail,
        pass: 'twkNXYhEBy5A6gq5x5'
    }
});


//ROUTES
app.post("/enviarmail", async (req, res) => {
    try{
        let subject = req.body.subject;
        let html = req.body.html;
        const info = await transporter.sendMail({
            from: "Servidor node.js",
            to: testMail,
            subject: subject,
            html: html,
        })
        console.log(info);
        res.send("email enviado")
    }catch(error){
        console.log(error);
    }
});



app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});
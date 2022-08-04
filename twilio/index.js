const express = require("express");
const twilio = require("twilio");

const app = express();
const PORT = process.env.PORT || 8080;

const accountid = process.env.accountid;
const authToken = process.env.authToken;

const client = twilio(accountid, authToken);

app.post("/twilio", async (req, res) => {
    try{
        const message = await client.messages.create({
            body:"hola test twilio desde nodejs",
            from:process.env.sms_from,
            to:process.env.sms_to
        })
        console.log(message);
        res.send("txt enviado");
    }catch(error){
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`app running on port ${PORT} process: ${process.pid}`);
});

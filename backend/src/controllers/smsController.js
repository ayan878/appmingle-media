import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const client = twilio(accountSid, authToken);

const sendSms = async (req, res) => {
  const { name, phone, email, service } = req.body;

  const message = `Callback request from ${name}, Phone: ${phone}, Email: ${email}, Service: ${service}`;

  try {
    const msg = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    res.json({ success: true, messageSid: msg.sid });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export default sendSms;

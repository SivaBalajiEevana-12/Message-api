const express = require('express');
const gupshup = require('@api/gupshup')
const app =express();
app.use(express.json());
app.get('/siva',(req,res)=>{
 const phoneNumber = req.query.phoneNumber;
 if (!phoneNumber) {
    return res.status(400).json({ status: "error", message: "Phone number is required" });
  }

  // Validate phone number format (optional)


  // Send the message using gupshup API

gupshup.postWaApiV1Msg({
    message: JSON.stringify({
      text: `
      *🌼Hare Krishna siva*! 🙏 
  Thank you for registering for our *Online Bhagavad-gita Workshop*, hosted by the *Hare Krishna Movement Vizag*.
  We are honored to be part of your spiritual journey.🕉️✨
   Through the *Bhagavad-gita As It Is by Srila Prabhupada*, we will explore the timeless wisdom of Lord Krishna together. 📖  Here’s what to expect: 
  🔹 You will receive the *meeting link* before each session
  🔹 All *important updates* will be shared in our official *WhatsApp group* 
  🔹 *Bonus spiritual content and guidance* will be shared to support your practice 🌿  
  📲 Join the WhatsApp Group here
  *Gita Pathashala - HKM Vizag*
  https://chat.whatsapp.com/BgKZOANIvI0JSuBWStpyf2`,
      type: "text",
      previewUrl: false
    }),
  source: 917075176108,
  destination: phoneNumber,
  'src.name': 'Production'
}, {
  apikey: 'zbut4tsg1ouor2jks4umy1d92salxm38'
})
  .then(({ data }) => {
    console.log(data);
    res.status(200).json({ status: "success", message: "Message sent successfully" });
  })
  .catch(err => console.error(err));
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
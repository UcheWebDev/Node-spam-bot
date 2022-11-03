const nodemailer = require('nodemailer');
const fs = require('fs');

const Emails = fs.readFileSync('file.txt').toString().split("\n");

const transporter = nodemailer.createTransport({
  service : 'gmail',
  auth:{
    user:'uceewebdev@gmail.com',
    pass:'avluycaluozrvrdy'
  }
});

for(email in Emails) {
    const mailOptions = {
  from:"office@efccNg.com",
  to:Emails[email], 
  subject:"Cybercrime Detected",
  text:"we write you because we detected suspicious activities around your mobile IP and NIN ID log pulled from the NCC website,  we tracking your location and request you turn yourself in or pay the sum of $1000"
};

transporter.sendMail(mailOptions,(error, info)=>{
  if(error){
console.log(error)
  }else {
    console.log(`email sent `+ info.response);
  }

})


}



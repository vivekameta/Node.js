const mailer=require("nodemailer");

const transport = mailer.createTransport({
  service : "gmail",
  auth : {
    user : "vickyameta8@gmail.com",
    pass : "eoqhubvbffirzkvb"
  }
})

module.exports.sendOtp=(to,otp)=>{
  let mailOption = {
    from : "vickyameta8@gmail.com",
    to : to,
    subject : "Your OTP",
    text : `Your OTP is ${otp}`
  }

  transport.sendMail(mailOption,(err)=>{
    err && console.log(err);
  })
  
}